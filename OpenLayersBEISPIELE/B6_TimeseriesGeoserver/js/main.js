
      // Set up the layers
      var layers = [
        new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
        new ol.layer.Tile({
          source: new ol.source.TileWMS({
            url: 'http://localhost:8080/geoserver/timeseries/wms',
            params: {'LAYERS': 'timeseries:LasVegas_timeseries'}
          })
        })
      ];
	
      var map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
          // Defining the location in Lat Lon
          center:  ol.proj.transform([-115.147018,36.166151], 'EPSG:4326', 'EPSG:3857'),
          zoom: 11
        })
      });

      // Define the available dates
      var dates = [
      '1986-06-06T00:00:00.000Z',
      '1987-06-09T00:00:00.000Z',
      '1988-05-26T00:00:00.000Z',
      '1989-06-30T00:00:00.000Z',
      '1990-06-01T00:00:00.000Z',
      '1991-06-20T00:00:00.000Z',
      '1993-07-11T00:00:00.000Z',
      '1994-06-12T00:00:00.000Z',
      '1995-07-01T00:00:00.000Z',
      '1996-06-17T00:00:00.000Z',
      '1997-06-20T00:00:00.000Z',
      '1998-06-23T00:00:00.000Z',
      '1999-06-26T00:00:00.000Z',
      '2000-05-27T00:00:00.000Z',
      '2001-06-15T00:00:00.000Z',
      '2002-06-18T00:00:00.000Z',
      '2003-06-21T00:00:00.000Z',
      '2004-06-07T00:00:00.000Z',
      '2005-06-26T00:00:00.000Z',
      '2006-05-28T00:00:00.000Z',
      '2007-06-16T00:00:00.000Z',
      '2008-06-18T00:00:00.000Z',
      '2009-06-21T00:00:00.000Z',
      '2010-06-24T00:00:00.000Z',
      '2011-06-27T00:00:00.000Z',
      '2013-06-16T00:00:00.000Z',
      '2014-06-19T00:00:00.000Z',
      '2015-06-22T00:00:00.000Z',
      '2016-06-24T00:00:00.000Z',
      '2017-06-27T00:00:00.000Z',
      '2018-06-14T00:00:00.000Z',
      '2019-06-17T00:00:00.000Z',
      '2020-06-19T00:00:00.000Z',
      '2020-07-05T00:00:00.000Z']

      //Set the number of stops in the slider
      var sliderRange = document.getElementById("myRange");
      sliderRange.max = dates.length-1;

      //The displayed date is set to corresponding array index of the value of the slider
      var dateValue = document.getElementById("date_value");
      dateValue.innerHTML = dates[sliderRange.value].slice(0,10);
      layers[1].getSource().updateParams({'TIME': dates[sliderRange.value]});

      // Update the current slider value (each time you drag the slider handle)
      sliderRange.oninput = function() {
      dateValue.innerHTML = dates[this.value].slice(0,10);
      layers[1].getSource().updateParams({'TIME': dates[this.value]});
      };
