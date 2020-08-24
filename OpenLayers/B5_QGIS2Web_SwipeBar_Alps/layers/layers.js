var wms_layers = [];

var lyr_147_03a_alps_utm33_tm_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "147_03a_alps_utm33_tm",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/147_03a_alps_utm33_tm_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1182610.538104, 6010519.569208, 1521958.542219, 6156219.099651]
                            })
                        });
var lyr_147_03b_alps_radar_utm33_asar_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "147_03b_alps_radar_utm33_asar",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/147_03b_alps_radar_utm33_asar_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1182566.347968, 6010439.615033, 1522004.190383, 6156208.605901]
                            })
                        });

lyr_147_03a_alps_utm33_tm_0.setVisible(true);lyr_147_03b_alps_radar_utm33_asar_1.setVisible(true);
var layersList = [lyr_147_03a_alps_utm33_tm_0,lyr_147_03b_alps_radar_utm33_asar_1];
