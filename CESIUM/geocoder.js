var viewer;


function  globus(){

   viewer = new Cesium.Viewer('cesiumContainer', {

     imageryProvider: new Cesium.UrlTemplateImageryProvider({
         url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg'
     }),
     /*
     imageryProvider: new Cesium.OpenStreetMapImageryProvider({
       //url: 'http://tile.stamen.com/watercolor',
       url:'//a.tile.openstreetmap.org/',
     }),
     */
      geocoder: false,
      timeline: false,
      animation: false,
      baseLayerPicker: false,
  });

//remove cesium logo
viewer._cesiumWidget._creditContainer.parentNode.removeChild(viewer._cesiumWidget._creditContainer);



var centroids = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/centroids.geojson"));
centroids.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];

    entity.description = "<p>Dies ist eine Beschreibung, welche sich dynamisch aus den Attributen des jeweiligen GeoJSON-Objektes zusammensetzt.</p>\
    <p>Der Name dieses Gebiets ist: <b>" + entity.properties.name + "</b></p><p>Dieser <a target='_blank' href='" + entity.properties.link + "'>Link</a> wird ebenso aus der GeoJSON-Datei für jedes Objekt abgefragt.</p>";
    entity.label = {
      text: entity.name,
      show: true,
      fillColor: Cesium.Color.WHITE,

    };

  }
});


};

var tagsall = [];
var uniquetags = [];


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

//remove duplicates
tagsarray.forEach((tag) => {
    if (!uniquetags.includes(tag)) {
        uniquetags.push(tag);
    }
});


};



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
          //entityCollectionArray[j].billboard.image =  "../clusterimages/pin.png";
          //entityCollectionArray[j].billboard.scale =  0.08;
          entityCollectionArray[j].label.fillColor =  Cesium.Color.BLACK;
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
    //same for single entities
    /*
    var entitiesArray = viewer.entities._entities._array;
    console.log(viewer.entities._entities._array);
    var n = 0;
    while (n < entitiesArray.length) {
      if (entitiesArray[n].description !== void 0) {
        var entityDescription = entitiesArray[n].description._value;
        if (entityDescription.indexOf(searchQuery) != -1) {
          entitiesArray[n].show = true;
        } else {
          entitiesArray[n].show = false;
        }
      }
      n++;
    }
    */
  }
  viewer.flyTo(treffer, {
  offset: new Cesium.HeadingPitchRange(0, Cesium.Math.toRadians(-90), 20000000),

});
};
