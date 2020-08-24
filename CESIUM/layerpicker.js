
function  globus(){


//imagery base layers
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
var viewer = new Cesium.Viewer('cesiumContainer', {



//CesiumViewer Properties
			fullscreenButton: false,
			timeline: false,
			animation: false,
			infoBox: true,
			navigationInstructionsInitiallyVisible: false,
			sceneModePicker: true,
			baseLayerPicker: false,
      imageryProviderViewModels: imageryViewModels, //
			homeButton: true,
			selectionIndicator: false,
			navigationHelpButton: false,
			geocoder: false,
	    requestRenderMode: false,

});
//add base layer picker
var baseLayerPicker = new Cesium.BaseLayerPicker('baseLayerPickerContainer', {
globe: viewer.scene,
imageryProviderViewModels: imageryViewModels
});







}
