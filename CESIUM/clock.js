function globus() {
  // Create a clock that loops on Christmas day 2013 and runs in 1000x real time.
  var clock = new Cesium.Clock({
    startTime: Cesium.JulianDate.fromIso8601("2013-12-25"),
    currentTime: Cesium.JulianDate.fromIso8601("2013-12-25"),
    stopTime: Cesium.JulianDate.fromIso8601("2013-12-26"),
    clockRange: Cesium.ClockRange.LOOP_STOP, // loop when we hit the end time
    clockStep: Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER,
    multiplier: 1000, // how much time to advance each tick
    shouldAnimate: true, // Animation on by default
  });

  var viewer = new Cesium.Viewer("cesiumContainer", {
    clockViewModel: new Cesium.ClockViewModel(clock),
    timeline: false,
    animation: false,
  });

  viewer.scene.globe.enableLighting = true;







};
