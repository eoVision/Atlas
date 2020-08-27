//ANMERKUNG: Damit die in den Inforboxen enthaltenen Links funktionieren muss eine Änderung in der Cesium.js-Datei getätigt werden.
//Folgende Code-Passage muss gelöscht werden, damit Skripte in der über den Link augerufenen Seite ausgeführt werden dürfen und die Seiten somit richtig funktionieren:
// c.setAttribute(“sandbox”, “allow-same-origin allow-popups allow-forms”),

function  globus(){

  var west = 10.0;
  var south = 36.0;
  var east = 30.0;
  var north = 48.0;
  var rectangle = Cesium.Rectangle.fromDegrees(-55, -27, 23, 54);
  Cesium.Camera.DEFAULT_VIEW_FACTOR = 1.0;
  Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;


//CesiumViewer
var viewer = new Cesium.Viewer('cesiumContainer', {
//basemap
imageryProvider: new Cesium.UrlTemplateImageryProvider({
    url: 'https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2019_3857/default/g/{z}/{y}/{x}.jpg'
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
});

//___________________________________________________________
var element = document.getElementById('cesiumContainer');
var scene = viewer.scene;
var handler;

//__RECTANGLES_ENTITIES__________________________________________________________

var alps_rectangle = viewer.entities.add({
  name: "Alpen",
  description: '<img width="100%" style="float:left; margin: 0 1em 1em 0;"\
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Silvretta_Panorama_wiki_mg-k.jpg/1920px-Silvretta_Panorama_wiki_mg-k.jpg"/>\
  <p>\
    Dies ist eine Beschreibung.\
  </p>\
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\
  </p>\
  <p>\
    <a target="_blank" href="http://www.google.de">Anwendung starten</a>\
  </p>', //HTML
  rectangle: {
    coordinates: Cesium.Rectangle.fromDegrees(5.623442313,45.41767801,13.671979258,48.295864634), //west(-180;180),south(-90;90),east(-180;180),north(-90;90)
    fill:true,
    material: Cesium.Color.RED.withAlpha(0.5),
  },
});


//_____________________________________________________________
////Point
var rio = viewer.entities.add({
        name : "Rio De Janeiro",
        description: '<h1>Beschreibung</h1>\
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>\
        <a target="_blank" href="http://www.google.de">Link</a>',
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


}
