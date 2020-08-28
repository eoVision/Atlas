
function  globus(){
      //CesiumViewer
      var viewer = new Cesium.Viewer('cesiumContainer', {
      //basemap
      imageryProvider: new Cesium.OpenStreetMapImageryProvider({
        url:'//a.tile.openstreetmap.org/',
      }),
      //CesiumViewer Properties/*
      			fullscreenButton: false,
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
      var scene = viewer.scene;

      var imageryLayers = viewer.imageryLayers;

      //Viewmodel für Knockout.js
      var viewModel = {
        layers: [],
      };
      Cesium.knockout.track(viewModel);


      ///Hillshade zur Karte hinzufügen
      var hillshade = new Cesium.WebMapServiceImageryProvider({
            url:
              "https://ows.terrestris.de/osm/service?",
            layers: "SRTM30-Hillshade",
            parameters: {
              transparent: "true",
              format: "image/png",
            },
      })
      var srtm = imageryLayers.addImageryProvider(hillshade)
      //Layereinstellungen
      srtm.alpha = 0.5;
      srtm.show = true;
      srtm.name = "SRTM30-Hillshade";


      Cesium.knockout.track(srtm, ["alpha", "show", "name"]);
      viewModel.layers.push(srtm);




      //WEATHER RADAR
      var source = new Cesium.WebMapServiceImageryProvider({
            url:
              "https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?",
            layers: "nexrad-n0r",
            credit: "Radar data courtesy Iowa Environmental Mesonet",
            parameters: {
              transparent: "true",
              format: "image/png",
            },
      })

      var weather = imageryLayers.addImageryProvider(source)
          weather.alpha = 0.8;
          weather.show = true;
          weather.name = "US Weather Radar";
        Cesium.knockout.track(weather, ["alpha", "show", "name"]);
        viewModel.layers.push(weather);


      //Bind the viewModel to the DOM elements of the UI that call for it.
      var toolbar = document.getElementById("toolbar");
      Cesium.knockout.applyBindings(viewModel, toolbar);


}
