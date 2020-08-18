var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Slopes_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Slopes",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Slopes_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11843848.089092, 4810026.516292, -11840702.896077, 4814763.638764]
                            })
                        });
var lyr_SatelliteImage_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Satellite Image",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SatelliteImage_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11843846.771864, 4810025.234843, -11840701.579865, 4814762.356323]
                            })
                        });
						
						
						
var format_ContourLines_3 = new ol.format.GeoJSON();
var features_ContourLines_3 = format_ContourLines_3.readFeatures(json_ContourLines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ContourLines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ContourLines_3.addFeatures(features_ContourLines_3);
var lyr_ContourLines_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ContourLines_3, 
                style: style_ContourLines_3,
                interactive: true,
                title: '<img src="styles/legend/ContourLines_3.png" /> Contour Lines'
            });
			
			
			
			
var format_Skilift_4 = new ol.format.GeoJSON();
var features_Skilift_4 = format_Skilift_4.readFeatures(json_Skilift_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skilift_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skilift_4.addFeatures(features_Skilift_4);
var lyr_Skilift_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Skilift_4, 
                style: style_Skilift_4,
                interactive: true,
                title: '<img src="styles/legend/Skilift_4.png" /> Ski lift'
            });
var format_Tourism_5 = new ol.format.GeoJSON();
var features_Tourism_5 = format_Tourism_5.readFeatures(json_Tourism_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tourism_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tourism_5.addFeatures(features_Tourism_5);
var lyr_Tourism_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tourism_5, 
                style: style_Tourism_5,
                interactive: true,
    title: 'Tourism<br />\
    <img src="styles/legend/Tourism_5_0.png" /> Gastronomy<br />\
    <img src="styles/legend/Tourism_5_1.png" /> Hotel<br />'
        });
var format_Skirundifficulty_6 = new ol.format.GeoJSON();
var features_Skirundifficulty_6 = format_Skirundifficulty_6.readFeatures(json_Skirundifficulty_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Skirundifficulty_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skirundifficulty_6.addFeatures(features_Skirundifficulty_6);
var lyr_Skirundifficulty_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Skirundifficulty_6, 
                style: style_Skirundifficulty_6,
                interactive: true,
    title: 'Ski run difficulty<br />\
    <img src="styles/legend/Skirundifficulty_6_0.png" /> easiest<br />\
    <img src="styles/legend/Skirundifficulty_6_1.png" /> more difficult<br />\
    <img src="styles/legend/Skirundifficulty_6_2.png" /> most difficult<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Slopes_1.setVisible(true);lyr_SatelliteImage_2.setVisible(true);lyr_ContourLines_3.setVisible(true);lyr_Skilift_4.setVisible(true);lyr_Tourism_5.setVisible(true);lyr_Skirundifficulty_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SatelliteImage_2,lyr_Slopes_1,lyr_ContourLines_3,lyr_Skilift_4,lyr_Tourism_5,lyr_Skirundifficulty_6];
lyr_ContourLines_3.set('fieldAliases', {'CONTOUR': 'CONTOUR', 'KLASSE': 'KLASSE', 'CLASSE': 'CLASSE', });
lyr_Skilift_4.set('fieldAliases', {'TYPE': 'TYPE', 'KLASSE': 'KLASSE', 'CLASSE': 'CLASSE', });
lyr_Tourism_5.set('fieldAliases', {'ID': 'ID', 'TYPE': 'TYPE', 'KLASSE': 'KLASSE', 'CLASSE': 'CLASSE', });
lyr_Skirundifficulty_6.set('fieldAliases', {'DEGREE_OF_': 'DEGREE_OF_', 'KLASSE': 'KLASSE', 'CLASSE': 'CLASSE', });
lyr_ContourLines_3.set('fieldImages', {'CONTOUR': 'TextEdit', 'KLASSE': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_Skilift_4.set('fieldImages', {'TYPE': 'TextEdit', 'KLASSE': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_Tourism_5.set('fieldImages', {'ID': 'Range', 'TYPE': 'TextEdit', 'KLASSE': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_Skirundifficulty_6.set('fieldImages', {'DEGREE_OF_': 'TextEdit', 'KLASSE': 'TextEdit', 'CLASSE': 'TextEdit', });
lyr_ContourLines_3.set('fieldLabels', {'CONTOUR': 'inline label', 'KLASSE': 'no label', 'CLASSE': 'no label', });
lyr_Skilift_4.set('fieldLabels', {'TYPE': 'no label', 'KLASSE': 'no label', 'CLASSE': 'no label', });
lyr_Tourism_5.set('fieldLabels', {'ID': 'no label', 'TYPE': 'no label', 'KLASSE': 'no label', 'CLASSE': 'no label', });
lyr_Skirundifficulty_6.set('fieldLabels', {'DEGREE_OF_': 'no label', 'KLASSE': 'no label', 'CLASSE': 'no label', });
lyr_Skirundifficulty_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});