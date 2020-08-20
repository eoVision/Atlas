
//Der Array "layersList" wird vom Plugin QGIS2web automatisch erstellt und enthält alle Layer des Projektes.
//Es wird auf die Satellitenbilder im Array zugegriffen und jedem Bild ein Zeitstempel ".time" hinzugefügt.
//Dieser Zeitstempel ist in Millisekunden angegeben, z.B. 518392800000 = 5. Juni 1986  ,folgende Webseite kann ein Datum in Millisekunden umwandeln: https://currentmillis.com/
//Die Angabe in Millisekunden wird benötigt um zu bestimmen zu welchem Zeitpunkt auf dem Zeitstrahl diese eingeblendet werden.

//LayerList[0] ist die OSM Basemap und benötigt keinen Zeitstempel
 layersList[0].desc = "OpenStreetMap";
 //jedem Satellitenbild der Zeitreihe wird ein Datum zugewiesen(manuell)
 layersList[1].time = 518392800000; 	//layersList[1].desc = 1986; 
 layersList[2].time = 959378400000; 	//layersList[2].desc = 2000;
 layersList[3].time = 992556000000; 	//layersList[3].desc = 2001;
 layersList[4].time = 1024351200000; 	//layersList[4].desc = 2002;
 layersList[5].time = 1056146400000; 	//layersList[5].desc = 2003;
 layersList[6].time = 1086559200000; 	//layersList[6].desc = 2004;
 layersList[7].time = 1119736800000; 	//layersList[7].desc = 2005;
 layersList[8].time = 1148767200000; 	//layersList[8].desc = 2006;
 layersList[9].time = 1181944800000; 	//layersList[9].desc = 2007;
 layersList[10].time = 1213740000000; 	//layersList[10].desc = 2008;
 layersList[11].time = 1245535200000; 	//layersList[11].desc = 2009;
 layersList[12].time = 1277330400000; 	//layersList[12].desc = 2010;
 layersList[13].time = 1309125600000; 	//layersList[13].desc = 2011;
 layersList[14].time = 549928800000; 	//layersList[14].desc = 1987;
 layersList[15].time = 580600800000; 	//layersList[15].desc = 1988;
 layersList[16].time = 615160800000; 	//layersList[16].desc = 1989;
 layersList[17].time = 644191200000; 	//layersList[17].desc = 1990;
 layersList[18].time = 677368800000; 	//layersList[18].desc = 1991;
 layersList[19].time = 742341600000; 	//layersList[19].desc = 1993;
 layersList[20].time = 771372000000; 	//layersList[20].desc = 1994;
 layersList[21].time = 804549600000; 	//layersList[21].desc = 1995;
 layersList[22].time = 834962400000; 	//layersList[22].desc = 1996;
 layersList[23].time = 866757600000; 	//layersList[23].desc = 1997;
 layersList[24].time = 898552800000; 	//layersList[24].desc = 1998;
 layersList[25].time = 930348000000; 	//layersList[25].desc = 1999;
 layersList[26].time = 1371333600000; 	//layersList[26].desc = 2013;
 layersList[27].time = 1403128800000; 	//layersList[27].desc = 2014;
 layersList[28].time = 1434924000000; 	//layersList[28].desc = 2015;
 layersList[29].time = 1466719200000; 	//layersList[29].desc = 2016;
 layersList[30].time = 1498514400000; 	//layersList[30].desc = 2017;
 layersList[31].time = 1528927200000; 	//layersList[31].desc = 2018;
 layersList[32].time = 1560722400000; 	//layersList[32].desc = 2019;
 layersList[33].time = 1592517600000; 	//layersList[33].desc = 2020;
 layersList[34].time = 1593900000000; 	//layersList[34].desc = 2021;
 
//Hier wird die Timeline definiert:
// Create Timeline control 
  var tline = new ol.control.Timeline({
    className: 'ol-pointer',
    features: [{
      text: 1987,
	 //Start und Enddatum des der Zeitreihe
      date: new Date('1987/01/01'),
      endDate: new Date('2020/01/01')
    }],
	//Der Intervall welcher im Zeitstrahl angezeigt wird, 'years' beschriftet lediglich die Jahre
    graduation: 'year', // 'day', 'month'
	//Start und Enddatum des Zeitstrahls
    minDate: new Date('1987/01/01'),
    maxDate: new Date('2022/01/01'),
    getHTML: function(f){ return ""; },
    getFeatureDate: function(f){ return f.date; },
    endFeatureDate: function(f) { return f.endDate }
  });
  map.addControl (tline);
  // Set the date when ready
  setTimeout(function(){ tline.setDate('1987'); });
  tline.addButton ({
    className: "go",
    title: "GO!",
    handleClick: function() {
    	go();
    }
  });
  
  //Einstellungen wann welches Bild angezeigt wird
 // Show features on scroll
  tline.on('scroll', function(e){
    var d = tline.roundDate(e.date, 'day')
	$('.dateStart').text(d.toLocaleDateString(undefined, {year: 'numeric', month: 'short', day: 'numeric'}));
    // SET RASTER VISBILITY
	layersList.forEach(function makeinvisible(ff){
	var dt = ff.time - e.date;
	//if time difference is greater than ~ 1 year
      if (Math.abs(dt) > 31670000000 ) {
	  //invisible
        ff.setVisible();
      } else {
	  //visible
		ff.setVisible(true);
      }
	});
  });

  
  // Run on the timeline
  var running = false;
  var start = new Date('1987');
  var end = new Date('2021');
  function go(next) {
    var date = tline.getDate();
    if (running) clearTimeout(running);
    if (!next) {
      // stop
      if (date>start && date<end && running) {
        running = false;
        tline.element.classList.remove('running');
        return;
      }
      if (date > end) {
        date = start;
      }
    }
    if (date > end) {
      tline.element.classList.remove('running');
      return;
    }
    if (date < start) {
      date = start;
    }
    // Zeitschritte der Animation 
    date = new Date(date.getTime() + 31670000000 );
    tline.setDate(date, { anim:false });
    // Geschwindigkeit der Animation
    tline.element.classList.add('running');
    running = setTimeout(function() { go(true); }, 500);
  }
