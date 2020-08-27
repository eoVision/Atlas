
var viewer;

function  globus(){

   viewer = new Cesium.Viewer('cesiumContainer', {
     imageryProvider: new Cesium.UrlTemplateImageryProvider({
         url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg'
     }),
      geocoder: false,
      timeline: false,
      animation: false,
      baseLayerPicker: false,
  });



//remove cesium logo
viewer._cesiumWidget._creditContainer.parentNode.removeChild(viewer._cesiumWidget._creditContainer);

//Punktdaten-GeoJSON-Datei zur Karte hinzufügen
var centroids = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("GeoJSON/centroids.geojson"));
// zu allen Punkten eine Beschreibung und Label hinzufügen
centroids.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    //Beschreibung, teilweise aus individuellen GeoJSON properties
    entity.description = "<p>Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
    //Label
    entity.label = {
      text: entity.name,
      show: true,
      fillColor: Cesium.Color.WHITE,
    };
  }
});

};


var tagsall = []; //Array, alle Tags aus den GeoJSON-Dateien
var uniquetags = []; // Array, jeder Tag nur ein mal, damit in den Suchvorschlägen keine Begriffe doppelt erscheinen

//Funktion um Tags aus GeoJSON-Datei auszulesen
function  gettags(){
      var dataSources = viewer.dataSources._dataSources;
      //console.log(dataSources);
      var i = 0;
      while (i < dataSources.length) {
        var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
        //console.log(dataSources[i]._entityCollection._entities._array);
        var j = 0;
        while (j < entityCollectionArray.length) {
          if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0){
              tagsall.push(entityCollectionArray[j]._properties._tags._value);
              tagsall.push(entityCollectionArray[j]._name);
          }
          j++;
      }
    i++;
    }

    var tagsstring = tagsall.toString();
    tagsarray = tagsstring.split(",");

    //doppelte tags aus Liste entfernen
    tagsarray.forEach((tag) => {
        if (!uniquetags.includes(tag)) {
            uniquetags.push(tag);
        }
    });
};


//Funktion um nach dem Begriff in der Suchleiste zu filtern
function textSearch() {
  var searchQuery = document.getElementById('searchQuery').value.toUpperCase();
  var dataSources = viewer.dataSources._dataSources;
  var treffer = [];
  console.log(dataSources);
  var i = 0;
  while (i < dataSources.length) {
    var entityCollectionArray = dataSources[i]._entityCollection._entities._array;
    //console.log(dataSources[i]._entityCollection._entities._array);
    var j = 0;
    while (j < entityCollectionArray.length) {
      if (entityCollectionArray[j]._properties._tags._value !== void 0 && entityCollectionArray[j]._name !== void 0) {
        /*
        console.log(entityCollectionArray[j]._id);
        console.log(entityCollectionArray[j]._name);
        console.log(entityCollectionArray[j]._properties._link._value);
        console.log(entityCollectionArray[j]._description._value);
        */
        var name = entityCollectionArray[j]._name;
        //var link = entityCollectionArray[j]._properties._link._value;
        var tags = entityCollectionArray[j]._properties._tags._value;
        //var description = entityCollectionArray[j]._description._value
        //if not present
        if (name.toUpperCase().indexOf(searchQuery) != -1 || tags.toUpperCase().indexOf(searchQuery) != -1) {
          //entityCollectionArray[j].show = true;
          //entityCollectionArray[j].billboard.scale =  0.08;
          entityCollectionArray[j].label.fillColor =  Cesium.Color.BLACK;
          treffer.push(entityCollectionArray[j]);


        } else {
          //entityCollectionArray[j].show = false;
          entityCollectionArray[j].label.fillColor =  Cesium.Color.WHITE;
          //entityCollectionArray[j].billboard.scale =  0.08;
        }
      }
      j++;
    }
    i++;
  }
  //Die Kamera fliegt zu den Suchtreffern
  viewer.flyTo(treffer, {
  offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 20000000), //Range = Kamerahöhe so hoch notwendig, da sonst die Kamera im Globus versinkt die Treffer auf verschiedenen Seiten des Globus liegen.

});
};
