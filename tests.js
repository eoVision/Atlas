
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

//__________alternative basemaps

imageryProvider: new Cesium.OpenStreetMapImageryProvider({

  url:'//a.tile.openstreetmap.org/',
  //url:Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
}),

//CesiumViewer Properties/*
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
      //shouldAnimate: true,
});

//viewer.scene.globe.enableLighting = true;
//viewer.scene.globe.showGroundAtmosphere = false;
//viewer.scene.skyBox.show = false;

/*
//Globus auto-rotieren
var lastNow = Date.now();
viewer.clock.onTick.addEventListener(function(clock){
    var now = Date.now();
    var spinRate = 0.01;
    var delta = (now - lastNow)/1000;
    lastNow = now;
    viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z,-spinRate*delta);
})
*/

//___________________________________________________________
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;
var handler2;

viewer.scene.highDynamicRange = false;

///////////////


////////////////
//__RECTANGLES_ENTITIES__________________________________________________________
/*
var alps_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(10.623442313,47.41767801,13.671979258,48.295864634), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    outline: true,
    outlineWidth: 2,
    height: 0,
    outlineColor: Cesium.Color.GOLD,
    material: Cesium.Color.GOLD.withAlpha(0.5),
  },
});
alps_rectangle.linkForPick = '../../../FERTIGE BEISPIELE/B5_QGIS2Web_SwipeBar_Alps/index.html';

var tauern3d_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(12.5080231,46.8409051,13.4015453,47.3482102), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.GOLD.withAlpha(0.5),
    outline: true,
    outlineWidth: 2,
    height: 0,
    outlineColor: Cesium.Color.GOLD,
  },
});
tauern3d_rectangle.linkForPick = '../../../FERTIGE BEISPIELE/B1_QGIS2three_HoheTauern/HoheTauern3D18.html';

var tauern_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(12.1282332,47.0652138,12.3125519,47.2619378), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.GOLD.withAlpha(0.5),
    outline: true,
    outlineWidth: 2,
    height: 0,
    outlineColor: Cesium.Color.GOLD,
  },
});
tauern_rectangle.linkForPick = '../../../FERTIGE BEISPIELE/B3_QGIS2Web_SwipeGitterKoodinaten/index.html';

var lasvegas_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-115.61611761,35.8601178,-114.654276,36.4614242), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.GOLD.withAlpha(0.5),
    outline: true,
    outlineWidth: 2,
    height: 0,
    outlineColor: Cesium.Color.GOLD,
  },
});
lasvegas_rectangle.linkForPick = '../../../FERTIGE BEISPIELE/B2_QGIS2Web_Timeline_LasVegas/index.html';

var vail_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-106.3950876,39.6141279,-106.3668318,39.6468993), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.GOLD.withAlpha(0.5),
    outline: true,
    outlineWidth: 2,
    height: 0,
    outlineColor: Cesium.Color.GOLD,
  },
});
vail_rectangle.linkForPick = '../../../FERTIGE BEISPIELE/B4_QGIS2Web_KreisNordpfeil_Skipisten/index.html';
*/


var polygons = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/polygons.geojson")));

alps = viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/centroids.geojson", {
  markerColor: Cesium.Color.FORESTGREEN,
}));

alps.then(function (dataSource){
  var entities = dataSource.entities.values;
  for (var i = 0; i < entities.length; i++){
    var entity = entities[i];
    entity.billboard.image =  "../clusterimages/pin.png";
    entity.billboard.scale = 0.08;
    //var position = entity.polyline.positions.getValue(viewer.clock.currentTime)[0];
    //entity.position = position;
    entity.description = "kgnoggsgnslgbslbgsglsb igjpsghsgsp"
    entity.label = {
      text: entity.name,
      show: true,
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

/*
//__GEOJSON_POLYGONS_________________________________________________________
//müssen in EPSG: 4326 sein, link wurde manuell als properties element hinzugefügt
var lasvegas_json = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/alps_bbox.geojson")));
var lasvegas_json = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/lasvegas_bbox.geojson")));
var tauern_json = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/tauern_bbox.geojson")));
var tauern3d_json = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/tauern3d_bbox.geojson")));
var vail_json = viewer.entities.add(viewer.dataSources.add(Cesium.GeoJsonDataSource.load("../bbox/vail_bbox.geojson")));
*/

/*
//___3D Models________________________________________________________
var map_pin = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100, 20, 0.0),
    model:{
      uri: "../3D/map_pin/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 1000000,
    },
    label : {
        text : 'PIN',
        font : '10pt sans-serif',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(10, 30)
    }
});

var pin_free = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(12.329, 48.146, -60000.0),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(12.329, 48.146, -60000.0), new Cesium.HeadingPitchRoll(180,0,0)),
    model:{
      uri: "../3D/pin_free_model/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
    label : {
        text : 'Alpen',
        font : '10pt sans-serif',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(10, 30)
    }
});

var pin_free = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(13.051, 46.951, -60000.0),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(13.051, 46.951, -60000.0), new Cesium.HeadingPitchRoll(100,0,0)),
    model:{
      uri: "../3D/pin_free_model/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
    label : {
        text : 'Hohe Tauern 3D',
        font : '10pt sans-serif',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(10, 30)
    }
});

var pin_free = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(11.954, 46.975, -60000.0),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(11.954, 46.975, -60000.0), new Cesium.HeadingPitchRoll(45,0,0)),
    model:{
      uri: "../3D/pin_free_model/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
    label : {
        text : 'Hohe Tauern',
        font : '10pt sans-serif',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(10, 30)
    }
});

var lowpoly_pin = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(180, 20, 10000.0),
    model:{
      uri: "../3D/lowpoly_pin/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
});

var flag = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-90, 20, 10000.0),
    model:{
      uri: "../3D/flag_in_the_wind/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
});
var map_pin_a = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-90, 0, 0.0),
    model:{
      uri: "../3D/map_pin_animation/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 60000,
    },
});
*/


/*
//_____________________________________________________________
////Point
var lv = viewer.entities.add({
        position : Cesium.Cartesian3.fromDegrees(-43.1729,-22.9068),
        point : {
            pixelSize : 10,
            color : Cesium.Color.RED,
            outlineColor : Cesium.Color.WHITE,
            outlineWidth : 1
        },
        label : {
            text : 'Rio de Janeiro',
            font : '15pt sans-serif',
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            outlineWidth : 2,
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
            pixelOffset : new Cesium.Cartesian2(0, -9)
        }
    });
    lv.linkForPick = 'https://google.de';

    ////Point
    var lv = viewer.entities.add({
            position : Cesium.Cartesian3.fromDegrees(-47.850,-15.838),
            point : {
                pixelSize : 10,
                color : Cesium.Color.RED,
                outlineColor : Cesium.Color.WHITE,
                outlineWidth : 1
            },
            label : {
                text : 'Brasilia',
                font : '15pt sans-serif',
                style: Cesium.LabelStyle.FILL_AND_OUTLINE,
                outlineWidth : 2,
                verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
                pixelOffset : new Cesium.Cartesian2(0, -9)
            }
        });
        lv.linkForPick = 'https://google.de';
*/

/*
//handler, polygons, planes, 3d models, points etc.
viewer.screenSpaceEventHandler.setInputAction(function(mouse) {
        var pickedObject = viewer.scene.pick(mouse.position);
        if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id.linkForPick)) {
            window.open(pickedObject.id.linkForPick, "_self");
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
*/

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

/*
/////handler 2geojson
handler2 = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler2.setInputAction(function(ss) {
    var pickedObject = viewer.scene.pick(ss.position);
    if (Cesium.defined(pickedObject)) {
      console.log(pickedObject.id.properties);
      window.open(pickedObject.id.properties.link, '_self');
}
}, Cesium.ScreenSpaceEventType.LEFT_CLICK);

*/

//////////////////CLUSTER

/*
var modelLayer = new Cesium.CustomDataSource();
    for (var i = 0; i < 50; i++) {
        var lon = Math.random() * 1000;
        var lat = Math.random() * 500;
        modelLayer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(-75.1641667 + lon, -39.9522222 + lat),
            point : {
                pixelSize : 10,
                color : Cesium.Color.RED,
                outlineColor : Cesium.Color.WHITE,
                outlineWidth : 1
            },
        });
    }
points = viewer.dataSources.add(modelLayer);

points.then(function (dataSource){
  var pixelRange = 50;
  var minimumClusterSize = 3;
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
  .fromText("10+", Cesium.Color.fromBytes(231,111,81), 100)
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
        cluster.billboard.verticalOrigin =
          Cesium.VerticalOrigin.BOTTOM;

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
*/
//////////////////////////////////////////////////////////////////////////////////////////////
var imageryLayers = viewer.imageryLayers;

var viewModel = {
  layers: [],
  baseLayers: [],
  upLayer: null,
  downLayer: null,
  selectedLayer: null,
  isSelectableLayer: function (layer) {
    return this.baseLayers.indexOf(layer) >= 0;
  },
  raise: function (layer, index) {
    imageryLayers.raise(layer);
    viewModel.upLayer = layer;
    viewModel.downLayer = viewModel.layers[Math.max(0, index - 1)];
    updateLayerList();
    window.setTimeout(function () {
      viewModel.upLayer = viewModel.downLayer = null;
    }, 10);
  },
  lower: function (layer, index) {
    imageryLayers.lower(layer);
    viewModel.upLayer =
      viewModel.layers[
        Math.min(viewModel.layers.length - 1, index + 1)
      ];
    viewModel.downLayer = layer;
    updateLayerList();
    window.setTimeout(function () {
      viewModel.upLayer = viewModel.downLayer = null;
    }, 10);
  },
  canRaise: function (layerIndex) {
    return layerIndex > 0;
  },
  canLower: function (layerIndex) {
    return layerIndex >= 0 && layerIndex < imageryLayers.length - 1;
  },
};
var baseLayers = viewModel.baseLayers;

Cesium.knockout.track(viewModel);

function setupLayers() {
  // Create all the base layers that this example will support.
  // These base layers aren't really special.  It's possible to have multiple of them
  // enabled at once, just like the other layers, but it doesn't make much sense because
  // all of these layers cover the entire globe and are opaque.
  addBaseLayerOption("Bing Maps Aerial", undefined); // the current base layer
  addBaseLayerOption(
    "Bing Maps Road",
    Cesium.createWorldImagery({
      style: Cesium.IonWorldImageryStyle.ROAD,
    })
  );
  addBaseLayerOption(
    "ArcGIS World Street Maps",
    new Cesium.ArcGisMapServerImageryProvider({
      url:
        "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
    })
  );
  addBaseLayerOption(
    "OpenStreetMaps",
    new Cesium.OpenStreetMapImageryProvider()
  );
  addBaseLayerOption(
    "Stamen Maps",
    new Cesium.OpenStreetMapImageryProvider({
      url: "https://stamen-tiles.a.ssl.fastly.net/watercolor/",
      fileExtension: "jpg",
      credit:
        "Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.",
    })
  );
  addBaseLayerOption(
    "Natural Earth II (local)",
    new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
    })
  );
  addBaseLayerOption(
    "USGS Shaded Relief (via WMTS)",
    new Cesium.WebMapTileServiceImageryProvider({
      url:
        "http://basemap.nationalmap.gov/arcgis/rest/services/USGSShadedReliefOnly/MapServer/WMTS",
      layer: "USGSShadedReliefOnly",
      style: "default",
      format: "image/jpeg",
      tileMatrixSetID: "default028mm",
      maximumLevel: 19,
      credit: "U. S. Geological Survey",
    })
  );

  addAdditionalLayerOption (
    "OpenWeatherMap",

     new Cesium.WebMapTileServiceImageryProvider({

         url: 'https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png',



     })

  );


  // Create the additional layers
  addAdditionalLayerOption(
    "United States GOES Infrared",
    new Cesium.WebMapServiceImageryProvider({
      url:
        "https://mesonet.agron.iastate.edu/cgi-bin/wms/goes/conus_ir.cgi?",
      layers: "goes_conus_ir",
      credit: "Infrared data courtesy Iowa Environmental Mesonet",
      parameters: {
        transparent: "true",
        format: "image/png",
      },
    })
  );
  addAdditionalLayerOption(
    "United States Weather Radar",
    new Cesium.WebMapServiceImageryProvider({
      url:
        "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?",
      layers: "nexrad-n0r",
      credit: "Radar data courtesy Iowa Environmental Mesonet",
      parameters: {
        transparent: "true",
        format: "image/png",
      },
    })
  );
  addAdditionalLayerOption(
    "Grid",
    new Cesium.GridImageryProvider(),
    1.0,
    //false
  );
  addAdditionalLayerOption(
    "Tile Coordinates",
    new Cesium.TileCoordinatesImageryProvider(),
    1.0,
    //false
  );
}

function addBaseLayerOption(name, imageryProvider) {
  var layer;
  if (typeof imageryProvider === "undefined") {
    layer = imageryLayers.get(0);
    viewModel.selectedLayer = layer;
  } else {
    layer = new Cesium.ImageryLayer(imageryProvider);
  }

  layer.name = name;
  baseLayers.push(layer);
}

function addAdditionalLayerOption(name, imageryProvider, alpha, show) {
  var layer = imageryLayers.addImageryProvider(imageryProvider);
  layer.alpha = Cesium.defaultValue(alpha, 0.5);
  layer.show = Cesium.defaultValue(show, true);
  layer.name = name;
  Cesium.knockout.track(layer, ["alpha", "show", "name"]);
}

function updateLayerList() {
  var numLayers = imageryLayers.length;
  viewModel.layers.splice(0, viewModel.layers.length);
  for (var i = numLayers - 1; i >= 0; --i) {
    viewModel.layers.push(imageryLayers.get(i));
  }
}

setupLayers();
updateLayerList();

//Bind the viewModel to the DOM elements of the UI that call for it.
var toolbar = document.getElementById("toolbar");
Cesium.knockout.applyBindings(viewModel, toolbar);

Cesium.knockout
  .getObservable(viewModel, "selectedLayer")
  .subscribe(function (baseLayer) {
    // Handle changes to the drop-down base layer selector.
    var activeLayerIndex = 0;
    var numLayers = viewModel.layers.length;
    for (var i = 0; i < numLayers; ++i) {
      if (viewModel.isSelectableLayer(viewModel.layers[i])) {
        activeLayerIndex = i;
        break;
      }
    }
    var activeLayer = viewModel.layers[activeLayerIndex];
    var show = activeLayer.show;
    var alpha = activeLayer.alpha;
    imageryLayers.remove(activeLayer, false);
    imageryLayers.add(baseLayer, numLayers - activeLayerIndex - 1);
    baseLayer.show = show;
    baseLayer.alpha = alpha;
    updateLayerList();
  });



}
