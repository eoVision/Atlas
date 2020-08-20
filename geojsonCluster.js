//Funktion für das gesamte Skript
function  globus(){


//Ansicht auf Europa
Cesium.Camera.DEFAULT_VIEW_RECTANGLE =  Cesium.Rectangle.fromDegrees(10.0, 36.0, 30.0, 48.0);
//Zoomstufe
Cesium.Camera.DEFAULT_VIEW_FACTOR = 2.0;


//CesiumViewer
var viewer = new Cesium.Viewer('cesiumContainer', {
//basemap
imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg'
}),
//CesiumViewer Properties
			fullscreenButton: false,
			timeline: false,
			animation: false,
			infoBox: false,
			navigationInstructionsInitiallyVisible: false,
			sceneModePicker: true,
			baseLayerPicker: false,
			homeButton: true,
			selectionIndicator: false,
			navigationHelpButton: false,
			geocoder: false,
	    requestRenderMode: false,
			skyAtmosphere: false,
});



//Zoomsets definieren
var entities = viewer.entities;
var zoomset1 = entities.add(new Cesium.Entity());
zoomset1.show = true;
var zoomset2 = entities.add(new Cesium.Entity());
zoomset2.show = false;

//___________________________________________________________
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;
var handlerjson;

//Polygone geojson
var polygons = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/polygons.geojson")));

polygons.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.parent= zoomset2;
  }
});



//centroids geojson
alps = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/centroids.geojson"));

alps.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.billboard.image =  "../clusterimages/pin.png";
    entity.billboard.scale = 0.08;
    entity.billboard.width = 100;
    entity.billnoard.height = 100;
    entity.parent= zoomset1,
    entity.label = {
      text: entity.name,
      font: "15px Impact",
      fillColor: Cesium.Color.fromCssColorString('#3280fc'),

      show: true,
      pixelOffset: new Cesium.Cartesian2(0,-50),
    };
  }
});

alps.then(function (dataSource){
  var pixelRange = 25;
  var minimumClusterSize = 2;
  var enabled = true;

  dataSource.clustering.enabled = enabled;
  dataSource.clustering.pixelRange = pixelRange;
  dataSource.clustering.minimumClusterSize = minimumClusterSize;

  var removeListener;

function customStyle() {
  if (Cesium.defined(removeListener)) {
    removeListener();
    removeListener = undefined;
  } else {
    removeListener = dataSource.clustering.clusterEvent.addEventListener(
      function (clusteredEntities, cluster) {
        cluster.label.show = false;
        cluster.billboard.show = true;
        cluster.billboard.id = cluster.label.id;
        cluster.billboard.scale = 0.6;
        cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER;
        cluster.billboard.pixelOffset= new Cesium.Cartesian2(0.0,-32.0);

        if (clusteredEntities.length >= 10) {
          cluster.billboard.image = "../clusterimages/009-neunplus.png";
        } else if (clusteredEntities.length >= 9) {
          cluster.billboard.image = "../clusterimages/009-neun.png";
        } else if (clusteredEntities.length >= 8) {
          cluster.billboard.image = "../clusterimages/008-acht.png";
        } else if (clusteredEntities.length >= 7) {
          cluster.billboard.image = "../clusterimages/007-sieben.png";
        } else if (clusteredEntities.length >= 6) {
          cluster.billboard.image = "../clusterimages/006-sechs.png";
        } else if (clusteredEntities.length >= 5) {
          cluster.billboard.image = "../clusterimages/005-funf.png";
        } else if (clusteredEntities.length >= 4) {
          cluster.billboard.image = "../clusterimages/004-vier.png";
        } else if (clusteredEntities.length >= 3) {
          cluster.billboard.image = "../clusterimages/003-drei.png";
        } else {
          cluster.billboard.image = "../clusterimages/002-zwei.png";
        }
      }
    );
  }

  // force a re-cluster with the new styling
  var pixelRange = dataSource.clustering.pixelRange;
  dataSource.clustering.pixelRange = 0;
  dataSource.clustering.pixelRange = pixelRange;
}

// start with custom style
customStyle();
});








// If the mouse is over the plane, change cursor
handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(movement) {
    var pickedObject = scene.pick(movement.endPosition);
    if (Cesium.defined(pickedObject)) {
        element.style.cursor = 'pointer';

    } else {
        element.style.cursor = 'default';
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);


/////handler 2geojson
handlerjson = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handlerjson.setInputAction(function(ss) {
    var pickedObject = viewer.scene.pick(ss.position);
    if (Cesium.defined(pickedObject) && Array.isArray(pickedObject.id)) { //if object is a cluster
    //if (Cesium.defined(pickedObject) && pickedObject.id.constructor === Array) { //if object is a cluster
      //window.open(pickedObject.id.properties.link, '_self');
      //console.log(pickedObject);
      viewer.flyTo(pickedObject.id, {
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 0),
    });
}
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


var ellipsoid = viewer.scene.globe.ellipsoid;
var camera = viewer.camera;
//////////////////////////////
viewer.camera.changed.addEventListener(function() {
//viewer.camera.moveEnd.addEventListener(function() { //für bessere performance
     // the camera stopped moving
     var cameraHeight = ellipsoid.cartesianToCartographic(camera.position).height;
 	   //console.log(cameraHeight);

       if (cameraHeight > 40000000)
           {
             zoomset1.show = false;
             zoomset2.show = false;
           }
       else if (cameraHeight <= 40000000 && cameraHeight > 7000000){
           zoomset1.show = true;
           zoomset2.show = false;
         }
         else if (cameraHeight <= 7000000){
             zoomset1.show = true;
             zoomset2.show = true;
           }
});

}
