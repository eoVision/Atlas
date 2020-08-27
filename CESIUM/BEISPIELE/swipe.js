function globus() {





var viewer = new Cesium.Viewer("cesiumContainer", {
  imageryProvider: new Cesium.TileMapServiceImageryProvider({
    url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
  }),
  fullscreenButton: false,
  timeline: false,
  animation: false,

  //infoBox: true,
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

var layers = viewer.imageryLayers;

layers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "Bilddateien/lightning_jan.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
  })
);

var lightning_jul = layers.addImageryProvider(
  new Cesium.SingleTileImageryProvider({
    url: "Bilddateien/lightning_jul.png",
    rectangle: Cesium.Rectangle.fromDegrees(-180.0, -90.0, 180.0, 90.0),
  })
);
lightning_jul.splitDirection = Cesium.ImagerySplitDirection.LEFT;// Only show to the left of the slider.



// Sync the position of the slider with the split position
var slider = document.getElementById("slider");
viewer.scene.imagerySplitPosition =
  slider.offsetLeft / slider.parentElement.offsetWidth;

var handler = new Cesium.ScreenSpaceEventHandler(slider);

var moveActive = false;

function move(movement) {
  if (!moveActive) {
    return;
  }

  var relativeOffset = movement.endPosition.x;
  var splitPosition =
    (slider.offsetLeft + relativeOffset) /
    slider.parentElement.offsetWidth;
  slider.style.left = 100.0 * splitPosition + "%";
  viewer.scene.imagerySplitPosition = splitPosition;
}

handler.setInputAction(function () {
  moveActive = true;
}, Cesium.ScreenSpaceEventType.LEFT_DOWN);
handler.setInputAction(function () {
  moveActive = true;
}, Cesium.ScreenSpaceEventType.PINCH_START);

handler.setInputAction(move, Cesium.ScreenSpaceEventType.MOUSE_MOVE);
handler.setInputAction(move, Cesium.ScreenSpaceEventType.PINCH_MOVE);

handler.setInputAction(function () {
  moveActive = false;
}, Cesium.ScreenSpaceEventType.LEFT_UP);
handler.setInputAction(function () {
  moveActive = false;
}, Cesium.ScreenSpaceEventType.PINCH_END);






};
