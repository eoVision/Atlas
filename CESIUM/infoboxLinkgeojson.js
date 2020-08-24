//ANMERKUNG: Damit die in den Inforboxen enthaltenen Links funktionieren muss eine Änderung in der Cesium.js-Datei getätigt werden.
//Folgende Code-Passage muss gelöscht werden, damit Skripte in der über den Link augerufenen Seite ausgeführt werden dürfen und die Seiten somit richtig funktionieren:
// c.setAttribute(“sandbox”, “allow-same-origin allow-popups allow-forms”),

function  globus(){

//Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwYzk0NWViOS1lMjk4LTQyMjItOTQ0ZC02YjViOTBiYmFhZTQiLCJpZCI6NjUxNiwic2NvcGVzIjpbImFzciIsImdjIl0sImlhdCI6MTU0NjcwOTAyOH0.dbzsNnU7Sp3y_GsyYu2zEvSHa-w2HQLUffiqoB9VJjE';

//Ansicht auf Europa
var west = 10.0;
var south = 36.0;
var east = 30.0;
var north = 48.0;
var rectangle = Cesium.Rectangle.fromDegrees(west, south, east, north);
Cesium.Camera.DEFAULT_VIEW_FACTOR = 2.0;
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;

//CesiumViewer
var viewer = new Cesium.Viewer('cesiumContainer', {
//basemap
imageryProvider: new Cesium.OpenStreetMapImageryProvider({
  url: 'http://tile.stamen.com/watercolor',
  //url:'//a.tile.openstreetmap.org/',
}),


//CesiumViewer Properties
			fullscreenButton: false,
			timeline: false,
			animation: false,
			infoBox: true,
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

//___________________________________________________________
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;

//polygons
var polygons = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/polygons.geojson", {
  stroke: Cesium.Color.INDIANRED,
  fill: Cesium.Color.INDIANRED .withAlpha(0.1),
})));

polygons.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.description = "<p>Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
  }
});


/////////////////

//Centroids laden
centroids = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/centroids.geojson"));
//Eigenschaften für jeden Punkt in "Centroids" anpassen
centroids.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.billboard.image =  "../clusterimages/dot.png";
    entity.billboard.scale = 0.00;
    entity.description = "<p>Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
    entity.label = {
      text: entity.name,
      font: "15px FreeMono",
      show: true,
      fillColor: Cesium.Color.INDIANRED,

    };

  }
});

//Centroids cluster
centroids.then(function (dataSource){
  var pixelRange = 25;
  var minimumClusterSize = 2;
  var enabled = true;

  dataSource.clustering.enabled = enabled;
  dataSource.clustering.pixelRange = pixelRange;
  dataSource.clustering.minimumClusterSize = minimumClusterSize;

  var removeListener;

  var pinBuilder = new Cesium.PinBuilder();
  var pin50 = pinBuilder
    .fromText("50+", Cesium.Color.RED, 48)
    .toDataURL();
  var pin40 = pinBuilder
    .fromText("40+", Cesium.Color.ORANGE, 48)
    .toDataURL();
  var pin30 = pinBuilder
    .fromText("30+", Cesium.Color.YELLOW, 48)
    .toDataURL();
  var pin20 = pinBuilder
    .fromText("20+", Cesium.Color.GREEN, 48)
    .toDataURL();
  var pin10 = pinBuilder
    .fromText("10+", Cesium.Color.fromBytes(231,111,81), 48)
    .toDataURL();

  var singleDigitPins = new Array(8);
  for (var i = 0; i < singleDigitPins.length; ++i) {
    singleDigitPins[i] = pinBuilder
      .fromText("" + (i + 2), Cesium.Color.VIOLET, 48)
      .toDataURL();
  }



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
        cluster.billboard.scale = 1;
        cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER;
        cluster.billboard.pixelOffset= new Cesium.Cartesian2(0.0,-5.0);

        if (clusteredEntities.length >= 50) {
          cluster.billboard.image = pin50;
        } else if (clusteredEntities.length >= 40) {
          cluster.billboard.image = pin40;
        } else if (clusteredEntities.length >= 30) {
          cluster.billboard.image = pin30;
        } else if (clusteredEntities.length >= 20) {
          cluster.billboard.image = pin20;
        } else if (clusteredEntities.length >= 10) {
          cluster.billboard.image = pin10;
        } else {
          cluster.billboard.image =
            singleDigitPins[clusteredEntities.length - 2];
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

//click on cluster will zoom
handlerjson = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handlerjson.setInputAction(function(ss) {
    var pickedObject = viewer.scene.pick(ss.position);
    if (Cesium.defined(pickedObject) && Array.isArray(pickedObject.id)) { //if object is a cluster
      viewer.flyTo(pickedObject.id, {
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 0),
    });
}
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);


}
