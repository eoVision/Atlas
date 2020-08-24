

function globus() {


  var czml = [
    {
      id: "document",
      name: "Ozon",
      version: "1.0",
      clock: {
        interval: "2000-01-01T00:00:00Z/2001-01-01T00:00:00Z", //Zeitstrahl Interval
        currentTime: "2000-01-01T00:00:00Z", //Startzeit
        multiplier: 1300000, //Geschwindigkeit
    },
    },
    {
      id: "textureRectangle",
      name: "Ozon",
      availability: "2000-01-01T00:00:00Z/2001-01-01T00:00:00Z",
      rectangle: {
        coordinates: {
          wsenDegrees: [-180.0, -90.0, 180.0, 0.0],
        },
        //height: 15000,
        fill: true,
        material: {
          image: {
            image: [
                              {
                                interval: "2000-01-01T00:00:00Z/2000-02-01T00:00:00Z", //Zeitintervall wann dieses Bild sichtbar ist
                                uri: "../ozon/01jan.png"
                              },
                              {
                                interval: "2000-02-01T00:00:00Z/2000-03-01T00:00:00Z",
                                uri: "../ozon/02feb.png"
                              },
                              {
                                interval: "2000-03-01T00:00:00Z/2000-04-01T00:00:00Z",
                                uri: "../ozon/03mar.png"
                              },
                              {
                                interval: "2000-04-01T00:00:00Z/2000-05-01T00:00:00Z",
                                uri: "../ozon/04apr.png"
                              },
                              {
                                interval: "2000-05-01T00:00:00Z/2000-06-01T00:00:00Z",
                                uri: "../ozon/05mai.png"
                              },
                              {
                                interval: "2000-06-01T00:00:00Z/2000-07-01T00:00:00Z",
                                uri: "../ozon/06juni.png"
                              },
                              {
                                interval: "2000-07-01T00:00:00Z/2000-08-01T00:00:00Z",
                                uri: "../ozon/07juli.png"
                              },
                              {
                                interval: "2000-08-01T00:00:00Z/2000-09-01T00:00:00Z",
                                uri: "../ozon/08aug.png"
                              },
                              {
                                interval: "2000-09-01T00:00:00Z/2000-10-01T00:00:00Z",
                                uri: "../ozon/09sep.png"
                              },
                              {
                                interval: "2000-10-01T00:00:00Z/2000-11-01T00:00:00Z",
                                uri: "../ozon/10okt.png"
                              },
                              {
                                interval: "2000-11-01T00:00:00Z/2000-12-01T00:00:00Z",
                                uri: "../ozon/11nov.png"
                              },
                              {
                                interval: "2000-12-01T00:00:00Z/2001-01-01T00:00:00Z",
                                uri: "../ozon/12dez.png"
                              },
                            ],
            color: {
              rgba: [255, 255, 255, 200],
            },
          },
        },
      },
    },
  ];

  var viewer = new Cesium.Viewer("cesiumContainer",{
    imageryProvider: new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"),
    }),
    fullscreenButton: false,
    timeline: true,
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
    shouldAnimate: true,
  });
  var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSourcePromise);
  viewer.zoomTo(dataSourcePromise);

  // Darstellung
  var scene = viewer.scene;
  scene.skyBox.show = false;
  scene.sun.show = false;
  scene.moon.show = false;
  //scene.skyAtmosphere.show = false;
  //viewer.scene.skyBox.show = false;
  scene.backgroundColor = Cesium.Color.BLACK;
  viewer.scene.globe.baseColor = Cesium.Color.BLACK;



  var clockViewModel;
  var animationViewModel;
  clockViewModel = new Cesium.ClockViewModel(viewer.clock);
  animationViewModel = new Cesium.AnimationViewModel(clockViewModel);
  //nur Jahr und Monat auf dem Zeitstrahl anzeigen
    viewer.timeline.makeLabel = function(date) {
      var gregorianDate = Cesium.JulianDate.toGregorianDate(date);
      return gregorianDate.day+"/"+gregorianDate.month +"/"+gregorianDate.year;
    };

  viewer.clock.shouldAnimate = false;

var factor = 1;
  $("#pb-play").click(function(){
    animationViewModel.pauseViewModel.command();
    $("#pb-play span").toggleClass("glyphicon-pause glyphicon-play");
  })

  $("#pb-reset").click(function(){
    clockViewModel.currentTime = clockViewModel.startTime;
    factor = 1;
    clockViewModel.multiplier = 1300000; //standard speed
  })

  $("#pb-slow").click(function(){
    factor = factor + 0.5;
    clockViewModel.multiplier = clockViewModel.multiplier / factor;
  })

  $("#pb-fast").click(function(){
    factor = factor + 0.5;
    clockViewModel.multiplier = factor * clockViewModel.multiplier;
  })

  const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni","Juli", "August", "September", "Oktober", "November", "Dezember"];

  viewer.clock.onTick.addEventListener(function(event) {
    var jd = event.currentTime.dayNumber;
    var millis = (jd - 2440587.5) * 86400000;
    var dateLocal = new Date(millis);
    //month = dateLocal.getMonth();
    document.getElementById("showYear").innerHTML = monthNames[dateLocal.getMonth()];
  });



};
