//ANMERKUNG: Damit die in den Inforboxen enthaltenen Links funktionieren muss eine Änderung in der Cesium.js-Datei getätigt werden.
//Folgende Code-Passage muss gelöscht werden, damit Skripte in der über den Link augerufenen Seite ausgeführt werden dürfen und die Seiten somit richtig funktionieren:
// c.setAttribute(“sandbox”, “allow-same-origin allow-popups allow-forms”),

var viewer;

//___________Cesium Globus und Layer____________________________________________
function  globus(){

//Ansicht auf Europa
var rectangle = Cesium.Rectangle.fromDegrees(10.0, 36.0, 30.0, 48.0);
//Zoomlevel der Kamera
Cesium.Camera.DEFAULT_VIEW_FACTOR = 2.0;
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;

//4 imagery base layers
var imageryViewModels = [];
imageryViewModels.push(new Cesium.ProviderViewModel({
name: 'Sentinel-2',
iconUrl: Cesium.buildModuleUrl('clusterimages/sentinel_icon.png'),
//category: "test",
creationFunction: function () {
return new Cesium.UrlTemplateImageryProvider({
      url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg'
  });

}
}));

imageryViewModels.push(new Cesium.ProviderViewModel({
name: 'OSM',
iconUrl: Cesium.buildModuleUrl('clusterimages/osm_icon.png'),
creationFunction: function () {
return new Cesium.OpenStreetMapImageryProvider({
    url:'//a.tile.openstreetmap.org/',
  });
}
}));

imageryViewModels.push(new Cesium.ProviderViewModel({
name: 'Watercolor',
iconUrl: Cesium.buildModuleUrl('clusterimages/watercolor_icon.png'),
creationFunction: function () {
return new Cesium.OpenStreetMapImageryProvider({
    url: 'http://tile.stamen.com/watercolor',
  });
}
}));

imageryViewModels.push(new Cesium.ProviderViewModel({
name: 'Natural Earth',
iconUrl: Cesium.buildModuleUrl('clusterimages/esri_icon.png'),
creationFunction: function () {
return new Cesium.ArcGisMapServerImageryProvider({
    url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
  });
}
}));


//CesiumViewer
 viewer = new Cesium.Viewer('cesiumContainer', {
  //CesiumViewer Properties
	fullscreenButton: true,  //Button für Vollbild
  infoBox: true,  //Infobox, welche erscheint wenn man auf ein Objekt klickt
  sceneModePicker: true, //2D/3D Wechsler
  homeButton: true, //Button für Home-Kameraposition
  selectionIndicator: true, //Auswahl Indikator beim Klicken auf ein Objekt
  imageryProviderViewModels: imageryViewModels,
	timeline: false, //kein Zeitstrahl
	animation: false,  //keine Animation
	navigationInstructionsInitiallyVisible: false, //keine Navigierhinweise
	baseLayerPicker: false, //kein Standard-BaseLayer-Picker (wird selbst erstellt)
	navigationHelpButton: false, //keine Hilfe
	geocoder: false, //kein Geocoder aktiviert
  //clockViewModel: new Cesium.ClockViewModel(clock), //Zeitanimation
});
  //viewer.scene.globe.enableLighting = true;

//add base layer picker
var baseLayerPicker = new Cesium.BaseLayerPicker('baseLayerPickerContainer', {
  globe: viewer.scene,
  imageryProviderViewModels: imageryViewModels
});

//remove cesium logo
viewer._cesiumWidget._creditContainer.parentNode.removeChild(viewer._cesiumWidget._creditContainer);

//Variablen deklarieren
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;

//Zoomsets definieren
var entities = viewer.entities;
var zoomset1 = entities.add(new Cesium.Entity());
zoomset1.show = true;
var zoomset2 = entities.add(new Cesium.Entity());
zoomset2.show = false;

//Gebietspolygone zur Karte hinzufügen
var polygons = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/polygons.geojson", {
  stroke: Cesium.Color.WHITE,
  fill: Cesium.Color.WHITE.withAlpha(0.1),
})));
//Für jedes Polygon eine Beschreibung erzeugen und zu Zoomset2 hinzufügen
polygons.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.parent= zoomset2;
    //Bechreibung für Infobox, als HTML
    console.log(entity.properties.beschreibung);
    entity.description = "<p>"+ entity.properties.beschreibung +"Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
  }
});

//Centroids (Mittelpunkte der Polygone) laden
centroids = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/centroids.geojson"));
//Eigenschaften für jeden Punkt in "Centroids" anpassen. Label, Beschreibung und Zoomset hinzufügen
centroids.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.parent= zoomset1,
    //Symbol
    entity.billboard.image =  "../clusterimages/pin.png";
    entity.billboard.height = 30;//benötigt, damit am Anfang automatisch geclustered wird, bug
    entity.billboard.width = 30;//same
    //Label
    entity.label = {
      text: entity.name,
      font: "15px Impact",
      fillColor: Cesium.Color.fromCssColorString('#3280fc'),
      show: true,
      pixelOffset: new Cesium.Cartesian2(0,-50),
    };
    //Beschreibung bei Klick
    entity.description = "<p>Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
  }
});

//Centroids-Punkte cluster
centroids.then(function (dataSource){
  //Clustering aktivieren für centroids
  dataSource.clustering.enabled = true;
  //bis zu welchem Abstand werden Punkte geclustered
  dataSource.clustering.pixelRange = 25;
  //Minimum Anzahl an Punkten um ein Cluster zu bilden
  dataSource.clustering.minimumClusterSize = 2;

  var removeListener;

  //Aussehen der Cluster
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
          cluster.billboard.scale = 0.5;
          cluster.billboard.verticalOrigin = Cesium.VerticalOrigin.CENTER;
          cluster.billboard.pixelOffset= new Cesium.Cartesian2(0.0,-20.0);
          //Aussehen nach Anzahl der Punkte
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

// If the mouse is over object, change cursor
handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(movement) {
    var pickedObject = scene.pick(movement.endPosition);

    if (Cesium.defined(pickedObject)) {
        element.style.cursor = 'pointer';
    } else {
        element.style.cursor = 'default';
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

//fly to points if click on cluster billboard
var handlerjson;
handlerjson = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handlerjson.setInputAction(function(ss) {
    var pickedObject = viewer.scene.pick(ss.position);
    if (Cesium.defined(pickedObject) && Array.isArray(pickedObject.id)) { //if object is a cluster
      viewer.flyTo(pickedObject.id, {
      offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 0),
    });
}
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

//Aus- und einblenden der Objekte bei Zoom
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

}; //Ende der globus() funktion

//___________Tags (welche als Vorschläge in der Suchleiste erscheinen) aus Datenquellen (geoJSON) auslesen____________________________________________
var tagsall = [];
var uniquetags = [];

function  gettags(){
  var dataSources = viewer.dataSources._dataSources; //alle Datenquellen in der Szene
  var i = 0;
  while (i < dataSources.length) { //für alle Datequellen in der Szene
    var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
      var j = 0;
      while (j < entityCollectionArray.length) { //für jedes Objekt in einer Datenquelle
        if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0){ //wenn das Objekt sowohl die Attriute Name und Tags hat
          //tags und name zur Liste der Tags hinzufügen
            tagsall.push(entityCollectionArray[j]._properties._tags._value);
            tagsall.push(entityCollectionArray[j]._name);
        }
      j++;
      }
i++;
}

  var tagsstring = tagsall.toString(); //in String umwandeln, da mehrere Tags pro Objekt möglich
  tagsarray = tagsstring.split(","); //Strng mit allen Tags am Komma trennen

  //Doppelte Tags entfernen
  tagsarray.forEach((tag) => {
      if (!uniquetags.includes(tag)) {
          uniquetags.push(tag); //uniquetags enthält die finale Liste der Tags und wird in GLOBUS.html übergeben
      }
  });
};

//___________Suchleiste____________________________________________
function textSearch() {
  var searchQuery = document.getElementById('searchQuery').value.toUpperCase();
  var dataSources = viewer.dataSources._dataSources;
  var treffer = [];
  var i = 0;
  while (i < dataSources.length) { //für alle Datenquellen
    var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
    var j = 0;
    while (j < entityCollectionArray.length) { //Für jedes Objekt der Datenquelle
      if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0 ) { //wenn tag und name existieren UND das Objekt sichtbar ist (nicht gefiltert wurde)

        var name = entityCollectionArray[j]._name;
        var tags = entityCollectionArray[j]._properties._tags._value;
        //wenn der Suchtext im Array der namen oder tags enthalten ist
        if (name.toUpperCase().indexOf(searchQuery) != -1 || tags.toUpperCase().indexOf(searchQuery) != -1) {
          entityCollectionArray[j].show = true; //Objekt sichtbar setzen
          treffer.push(entityCollectionArray[j]);
        } else {
          entityCollectionArray[j].show = false; //Objekt unsichtbar setzen
        }
      }
      j++;
    }
i++;
}
  //Kamera fliegt zu Treffern
  viewer.flyTo(treffer, {
  offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 20000000),
  });
};





//___________FILTER____________________________________________
var filterbegriffe = [];
function Filter(filterbegriff, filterId) {
  filterbegriff = filterbegriff.toUpperCase(); //Umwandlung des Filterbegriffs in Großbuchstaben
  var dataSources = viewer.dataSources._dataSources;
  var treffer = [];

  //if checkbox gets checked
var decider = document.getElementById(filterId);
if(decider.checked){
  filterbegriffe.push(filterbegriff); //Filter zur Liste hinzufügen
  console.log("checked");
  console.log(filterbegriffe);

  var i = 0;
  while (i < dataSources.length) { //für alle Datenquellen
    var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
    var j = 0;
    while (j < entityCollectionArray.length) { //Für jedes Objekt der Datenquelle
      if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0) { //wenn tag und name existieren

        var name = entityCollectionArray[j]._name;
        var tags = entityCollectionArray[j]._properties._tags._value;
        entityCollectionArray[j].show = true;
        //wenn der Suchtext im Array der namen oder tags enthalten ist
        var f;
        for (f=0; f<filterbegriffe.length; f++){
        if (name.toUpperCase().indexOf(filterbegriffe[f]) != -1 || tags.toUpperCase().indexOf(filterbegriffe[f]) != -1 && entityCollectionArray[j].show == true) { //wenn Begriff in Array ist

          entityCollectionArray[j].show = true; //Objekt sichtbar setzen
          treffer.push(entityCollectionArray[j]);
        } else {

          entityCollectionArray[j].show = false; //Objekt unsichtbar setzen
        }
      }
      }
      j++;
    }
i++;
}
  //Kamera fliegt zu Treffern
  viewer.flyTo(treffer, {
  offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 20000000),
  });



}
  //if checkbox gets unchecked
else {
    console.log("unchecked");
    var index = filterbegriffe.indexOf(filterbegriff);
    filterbegriffe.splice(index, 1);
    console.log(filterbegriffe);

    var i = 0;
    while (i < dataSources.length) { //für alle Datenquellen
      var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
      var j = 0;
      while (j < entityCollectionArray.length) { //Für jedes Objekt der Datenquelle
        if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0) { //wenn tag und name existieren

          var name = entityCollectionArray[j]._name;
          var tags = entityCollectionArray[j]._properties._tags._value;
          entityCollectionArray[j].show = true;
          //wenn der Suchtext im Array der namen oder tags enthalten ist
          var f;

          for (f=0; f<filterbegriffe.length; f++){
          if (name.toUpperCase().indexOf(filterbegriffe[f]) != -1 || tags.toUpperCase().indexOf(filterbegriffe[f]) != -1 && entityCollectionArray[j].show == true) { //wenn Begriff in Array ist

            entityCollectionArray[j].show = true; //Objekt sichtbar setzen
            treffer.push(entityCollectionArray[j]);
          } else {

            entityCollectionArray[j].show = false; //Objekt unsichtbar setzen
          }
        }
        }
        j++;
      }
  i++;
  }

    //Kamera fliegt zu Treffern
    viewer.flyTo(treffer, {
    offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 20000000),
    });
  }
//customStyle();


};
