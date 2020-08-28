
function globus() {

//CZML Datei erstellen mit den Bildern der Zeitreihe und den zugehörigen Anzeigeintervallen
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
      id: "Ozon",
      name: "Ozon",
      availability: "2000-01-01T00:00:00Z/2001-01-01T00:00:00Z", //Zeitintervall der gesammten Zeitreihe
      rectangle: {
        coordinates: {
          wsenDegrees: [-180.0, -90.0, 180.0, 0.0], //Bilddimensionen
        },
        //height: 15000,
        fill: true,
        material: {
          image: {
            image: [
                              {
                                interval: "2000-01-01T00:00:00Z/2000-02-01T00:00:00Z", //Zeitintervall wann dieses Bild sichtbar ist
                                uri: "Bilddateien/01jan.png"
                              },
                              {
                                interval: "2000-02-01T00:00:00Z/2000-03-01T00:00:00Z",
                                uri: "Bilddateien/02feb.png"
                              },
                              {
                                interval: "2000-03-01T00:00:00Z/2000-04-01T00:00:00Z",
                                uri: "Bilddateien/03mar.png"
                              },
                              {
                                interval: "2000-04-01T00:00:00Z/2000-05-01T00:00:00Z",
                                uri: "Bilddateien/04apr.png"
                              },
                              {
                                interval: "2000-05-01T00:00:00Z/2000-06-01T00:00:00Z",
                                uri: "Bilddateien/05mai.png"
                              },
                              {
                                interval: "2000-06-01T00:00:00Z/2000-07-01T00:00:00Z",
                                uri: "Bilddateien/06juni.png"
                              },
                              {
                                interval: "2000-07-01T00:00:00Z/2000-08-01T00:00:00Z",
                                uri: "Bilddateien/07juli.png"
                              },
                              {
                                interval: "2000-08-01T00:00:00Z/2000-09-01T00:00:00Z",
                                uri: "Bilddateien/08aug.png"
                              },
                              {
                                interval: "2000-09-01T00:00:00Z/2000-10-01T00:00:00Z",
                                uri: "Bilddateien/09sep.png"
                              },
                              {
                                interval: "2000-10-01T00:00:00Z/2000-11-01T00:00:00Z",
                                uri: "Bilddateien/10okt.png"
                              },
                              {
                                interval: "2000-11-01T00:00:00Z/2000-12-01T00:00:00Z",
                                uri: "Bilddateien/11nov.png"
                              },
                              {
                                interval: "2000-12-01T00:00:00Z/2001-01-01T00:00:00Z",
                                uri: "Bilddateien/12dez.png"
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

//Cesium-Viewer erstellen
  var viewer = new Cesium.Viewer("cesiumContainer",{
    imageryProvider: new Cesium.TileMapServiceImageryProvider({
      url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII"), //Basemap
    }),
    fullscreenButton: false,
    timeline: true, //Zeitstrahl aktiviert
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

  //Zuvor erstellte CZML-Datei wird zur Szene hinzugefügt
  var dataSourcePromise = Cesium.CzmlDataSource.load(czml);
  viewer.dataSources.add(dataSourcePromise);
  viewer.zoomTo(dataSourcePromise);

  // Darstellung minimieren, da sich diese Objekte sonst zu schnell drehen würden
  var scene = viewer.scene;
  scene.skyBox.show = false; //keine Sterne im Hintergrund
  scene.sun.show = false; //keine Sonne
  scene.moon.show = false; //kein Mond
  //scene.skyAtmosphere.show = false;
  //viewer.scene.skyBox.show = false;
  scene.backgroundColor = Cesium.Color.BLACK; //Hintergrundfarbe
  viewer.scene.globe.baseColor = Cesium.Color.BLACK; //Globusfarbe


//Zeitfunktionalitäten hinzufügen
  var clockViewModel;
  var animationViewModel;
  clockViewModel = new Cesium.ClockViewModel(viewer.clock);
  animationViewModel = new Cesium.AnimationViewModel(clockViewModel);
  //nur Jahr und Monat auf dem Zeitstrahl anzeigen
    viewer.timeline.makeLabel = function(date) {
      var gregorianDate = Cesium.JulianDate.toGregorianDate(date);
      return gregorianDate.day+"/"+gregorianDate.month +"/"+gregorianDate.year;
    };

  viewer.clock.shouldAnimate = false; //Animation ist am Anfang gestoppt

//Funktionen der Buttons festlegen
var factor = 1;
  $("#pb-play").click(function(){
    animationViewModel.pauseViewModel.command();
    $("#pb-play span").toggleClass("glyphicon-pause glyphicon-play"); //Bei Play wird ein Pause-Button angezeigt
  })

  $("#pb-reset").click(function(){
    clockViewModel.currentTime = clockViewModel.startTime;
    factor = 1; //Geschwindigkeitsfaktor zurücksetzen
    clockViewModel.multiplier = 1300000; //standard speed
  })

  $("#pb-slow").click(function(){
    factor = factor + 0.5;
    clockViewModel.multiplier = clockViewModel.multiplier / factor; //Geschwindigkeit halbieren
  })

  $("#pb-fast").click(function(){
    factor = factor + 0.5;
    clockViewModel.multiplier = factor * clockViewModel.multiplier; //Geschwindigkeit verdoppeln
  })

//Liste der Monate welche Angezeigt werden können
  const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni","Juli", "August", "September", "Oktober", "November", "Dezember"];

//Bei jedem Tick der Zeit wird die aktuelle Zeit ausgelesen
  viewer.clock.onTick.addEventListener(function(event) {
    var jd = event.currentTime.dayNumber; //Tag-Nummer
    var millis = (jd - 2440587.5) * 86400000; //Umwandlung der Tag-Nummer in Millisekunden
    var dateLocal = new Date(millis); //Datum aus Millisekunden erstellen
    document.getElementById("showYear").innerHTML = monthNames[dateLocal.getMonth()]; //den monat des Datums auslesen un den ensprechenden Monat aus dem Array in der Aneige anzeigen
  });



};
