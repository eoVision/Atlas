
function  globus(){



//CesiumViewer
var viewer = new Cesium.Viewer('cesiumContainer', {
//basemap
imageryProvider: new Cesium.OpenStreetMapImageryProvider({ //Basemap
  //url: 'http://tile.stamen.com/watercolor',
  url:'//a.tile.openstreetmap.org/',
}),

//CesiumViewer Properties/*
			fullscreenButton: true,
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

//_____Variablen definieren______________________________________________________
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;

//__RECTANGLES_ENTITIES__________________________________________________________

var alps_rectangle = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(5.623442313,45.41767801,13.671979258,48.295864634), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.RED.withAlpha(0.5), //rot mit Transparenz
  },
});
alps_rectangle.linkForPick = '../../OpenLayers/B5_QGIS2Web_SwipeBar_Alps/index.html'; //link bei Klick


var rectangle2 = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-12.1282332,17.0652138,11.3125519,27.2619378), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.GOLD.withAlpha(0.5),
    outline: true,
    outlineWidth: 2, //kein Effekt ?
    height: 0, //height muss definiert sein um sowhl fill, als auch outline anzeigen zu können
    outlineColor: Cesium.Color.GOLD,
  },
});
rectangle2.linkForPick = '../../OpenLayers/B3_QGIS2Web_SwipeGitterKoodinaten/index.html';

var rectangle3 = viewer.entities.add({
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(-115.61611761,34.8601178,-109.654276,36.4614242), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    outline: true,
    outlineWidth: 5,
    height: 0,
    fill: false,
    outlineColor: Cesium.Color.HOTPINK,
  },
});
rectangle3.linkForPick = '../../OpenLayers/B2_QGIS2Web_Timeline_LasVegas/index.html';


//___3D Models________________________________________________________
var map_pin = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(100, 20, 0.0),
    model:{
      uri: "3DSymbole/map_pin/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 1000000,
    },
    label : {
        text : 'label',
        font : '10pt sans-serif',
        style: Cesium.LabelStyle.FILL_AND_OUTLINE,
        outlineWidth : 2,
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
        pixelOffset : new Cesium.Cartesian2(10, 30)
    }
});
map_pin.linkForPick = 'https://www.google.de';

var pin_free = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(12.329, 48.146, -60000.0),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(Cesium.Cartesian3.fromDegrees(12.329, 48.146, -60000.0), new Cesium.HeadingPitchRoll(180,0,0)),
    model:{
      uri: "3DSymbole/pin_free_model/scene.gltf",
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
pin_free.linkForPick = 'https://www.google.de';

var lowpoly_pin = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(180, 20, 10000.0),
    model:{
      uri: "3DSymbole/lowpoly_pin/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
});
lowpoly_pin.linkForPick = 'https://www.google.de';

var flag = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-90, 20, 10000.0),
    model:{
      uri: "3DSymbole/flag_in_the_wind/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 200000,
    },
});
flag.linkForPick = 'https://www.google.de';

var map_pin_a = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(-90, 0, 0.0),
    model:{
      uri: "3DSymbole/map_pin_animation/scene.gltf",
      minimumPixelSize: 128,
      maximumScale: 60000,
    },
});
map_pin_a.linkForPick = 'https://www.google.de';


//_____________________________________________________________
////Point
var rio = viewer.entities.add({
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
    rio.linkForPick = 'https://google.de';

    ////Point
    var bra = viewer.entities.add({
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
        bra.linkForPick = 'https://google.de';



//link-handler for polygons, planes, 3D models, points etc.
viewer.screenSpaceEventHandler.setInputAction(function(mouse) {
        var pickedObject = viewer.scene.pick(mouse.position);
        if (Cesium.defined(pickedObject) && Cesium.defined(pickedObject.id.linkForPick)) {
            window.open(pickedObject.id.linkForPick, "_self"); //bei Klick wird der Link des Objekts geöffnet
        }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK); //bei Linksklick


// Cursor ädert sich wenn der Mauszeiger über einem Objekt ist
handler = new Cesium.ScreenSpaceEventHandler(scene.canvas);
handler.setInputAction(function(movement) {
    var pickedObject = scene.pick(movement.endPosition);
    if (Cesium.defined(pickedObject)) {
        element.style.cursor = 'pointer';
    } else {
        element.style.cursor = 'default';
    }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE); // wenn die Maus bewegt wird

}
