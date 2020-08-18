var wms_layers = [];


        var lyr_StamenTerrain_0 = new ol.layer.Tile({
            'title': 'Stamen Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/terrain/{z}/{x}/{y}.png'
            })
        });
var lyr_SchattenreliefausSdosten_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Schattenrelief aus Südosten",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SchattenreliefausSdosten_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1350042.946944, 5952629.627400, 1370558.526519, 5984850.668262]
                            })
                        });
var lyr_SchattenreliefausNordwesten_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Schattenrelief aus Nordwesten",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SchattenreliefausNordwesten_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1350042.946944, 5952629.627400, 1370558.526519, 5984850.668262]
                            })
                        });
var lyr_Hangneigungsmodell_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Hangneigungsmodell",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Hangneigungsmodell_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1350042.946944, 5952629.627400, 1370558.526519, 5984850.668262]
                            })
                        });
var lyr_Satellitenbild_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Satellitenbild",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Satellitenbild_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1350042.946944, 5952653.538970, 1370558.214471, 5984850.668262]
                            })
                        });

lyr_StamenTerrain_0.setVisible(true);lyr_SchattenreliefausSdosten_1.setVisible(true);lyr_SchattenreliefausNordwesten_2.setVisible(true);lyr_Hangneigungsmodell_3.setVisible(false);lyr_Satellitenbild_4.setVisible(false);
var layersList = [lyr_StamenTerrain_0,lyr_SchattenreliefausSdosten_1,lyr_SchattenreliefausNordwesten_2,lyr_Hangneigungsmodell_3,lyr_Satellitenbild_4];
