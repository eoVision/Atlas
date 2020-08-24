//nur Tests, funktioniert nicht wie gewünscht

var layers = [];

function globus() {

var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.TileMapServiceImageryProvider({
    url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
  }),
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

var scene = viewer.scene;
var imageryLayers = viewer.imageryLayers;
var viewModel = {
  layers: layers,

};
//Alle Bilder der Zeitreihe +knockoutJS
Cesium.knockout.track(viewModel);
/////////////////////Januar
var jan = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/01jan.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

jan.show = false;
jan.name = "Januar";

Cesium.knockout.track(jan, ["show", "name"]);
viewModel.layers.push(jan);
/////////////////////Februar
var feb = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/02feb.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

feb.show = true;
feb.name = "Februar";
Cesium.knockout.track(feb, ["show", "name"]);
viewModel.layers.push(feb);

/////////////////////März
var mar = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/03mar.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

mar.show = true;
mar.name = "März";
Cesium.knockout.track(mar, ["show", "name"]);
viewModel.layers.push(mar);

/////////////////////April
var apr = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/04apr.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

apr.show = true;
apr.name = "April";

Cesium.knockout.track(apr, ["show", "name"]);
viewModel.layers.push(apr);

/////////////////////Mai
var mai = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/05mai.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

mai.show = true;
mai.name = "Mai";

Cesium.knockout.track(mai, ["show", "name"]);
viewModel.layers.push(mai);

/////////////////////Juni
var juni = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/06juni.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

juni.show = true;
juni.name = "Juni";

Cesium.knockout.track(juni, ["show", "name"]);
viewModel.layers.push(juni);

/////////////////////Juli
var jul = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/07juli.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

jul.show = true;
jul.name = "Juli";

Cesium.knockout.track(jul, ["show", "name"]);
viewModel.layers.push(jul);

/////////////////////August
var aug = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/08aug.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

aug.show = true;
aug.name = "August";

Cesium.knockout.track(aug, ["show", "name"]);
viewModel.layers.push(aug);

/////////////////////September
var sep = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/09sep.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

sep.show = true;
sep.name = "September";

Cesium.knockout.track(sep, ["show", "name"]);
viewModel.layers.push(sep);

/////////////////////Oktober
var okt = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/10okt.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

okt.show = true;
okt.name = "Oktober";

Cesium.knockout.track(okt, ["show", "name"]);
viewModel.layers.push(okt);

/////////////////////November
var nov = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/11nov.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

nov.show = true;
nov.name = "November";

Cesium.knockout.track(nov, ["show", "name"]);
viewModel.layers.push(nov);

/////////////////////Dezember
var dez = imageryLayers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "../ozon/12dez.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 0.0),
  })
);

dez.show = true;
dez.name = "Dezember";

Cesium.knockout.track(dez, ["show", "name"]);
viewModel.layers.push(dez);

var toolbar = document.getElementById("toolbar");
Cesium.knockout.applyBindings(viewModel, toolbar);

//console.log(imageryLayers);
//imageryLayers._layers[12].show = false;


};
/*
var months = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
var num = [1,2,3,4,5,6,7,8,9,10,11,12];
var sliderRange = document.getElementById("myRange");
console.log(sliderRange);
sliderRange.max =12;
var dateValue = document.getElementById("date_value");
dateValue.innerHTML = months[sliderRange.value];
*/
