ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32611").setExtent([629430.547033, 3966668.173816, 704122.422109, 4040486.923892]);
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
var lyr_clip_AA_LT05_L1TP_039035_19860606_20161004_01_T1_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_AA_LT05_L1TP_039035_19860606_20161004_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_AA_LT05_L1TP_039035_19860606_20161004_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20000527_20160918_01_T1_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20000527_20160918_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20000527_20160918_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20010615_20160918_01_T1_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20010615_20160918_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20010615_20160918_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20020618_20160916_01_T1_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20020618_20160916_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20020618_20160916_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20030621_20160915_01_T1_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20030621_20160915_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20030621_20160915_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20040607_20160913_01_T1_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20040607_20160913_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20040607_20160913_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20050626_20160912_01_T1_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20050626_20160912_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20050626_20160912_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20060528_20160911_01_T1_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20060528_20160911_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20060528_20160911_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20070616_20160908_01_T1_9 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20070616_20160908_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20070616_20160908_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20080618_20160906_01_T1_10 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20080618_20160906_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20080618_20160906_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20090621_20160905_01_T1_11 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20090621_20160905_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20090621_20160905_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20100624_20160901_01_T1_12 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20100624_20160901_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20100624_20160901_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_20110627_20160831_01_T1_13 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_20110627_20160831_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_20110627_20160831_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19870609_20161003_01_T1_14 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19870609_20161003_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19870609_20161003_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19880526_20161003_01_T1_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19880526_20161003_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19880526_20161003_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19890630_20161001_01_T1_16 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19890630_20161001_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19890630_20161001_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19900601_20161002_01_T1_17 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19900601_20161002_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19900601_20161002_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19910620_20161001_01_T1_18 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19910620_20161001_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19910620_20161001_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19930711_20160927_01_T1_19 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19930711_20160927_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19930711_20160927_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19940612_20160928_01_T1_20 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19940612_20160928_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19940612_20160928_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19950701_20160926_01_T1_21 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19950701_20160926_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19950701_20160926_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19960617_20160924_01_T1_22 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19960617_20160924_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19960617_20160924_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19970620_20160923_01_T1_23 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19970620_20160923_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19970620_20160923_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19980623_20160923_01_T1_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19980623_20160923_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19980623_20160923_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LT05_L1TP_039035_19990626_20160919_01_T1_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LT05_L1TP_039035_19990626_20160919_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LT05_L1TP_039035_19990626_20160919_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20130616_20170309_01_T1_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20130616_20170309_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20130616_20170309_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20140619_20170304_01_T1_27 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20140619_20170304_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20140619_20170304_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20150622_20180131_01_T1_28 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20150622_20180131_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20150622_20180131_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20160624_20180201_01_T1_29 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20160624_20180201_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20160624_20180201_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20170627_20170714_01_T1_30 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20170627_20170714_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20170627_20170714_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20180614_20180703_01_T1_31 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20180614_20180703_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20180614_20180703_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20190617_20190620_01_T1_32 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20190617_20190620_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20190617_20190620_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_LC08_L1TP_039035_20200619_20200626_01_T1_33 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_LC08_L1TP_039035_20200619_20200626_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_LC08_L1TP_039035_20200619_20200626_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });
var lyr_clip_EE_LC08_L1TP_039035_20200705_20200708_01_T1_34 = new ol.layer.Image({
                            opacity: 1,
                            title: "clip_EE_LC08_L1TP_039035_20200705_20200708_01_T1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/JPGclip_EE_LC08_L1TP_039035_20200705_20200708_01_T1.jpg",
    attributions: ' ',
                                projection: 'EPSG:32611',
                                alwaysInRange: true,
                                imageExtent: [624915.000000, 3970935.000000, 710235.000000, 4036035.000000]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_clip_AA_LT05_L1TP_039035_19860606_20161004_01_T1_1.setVisible(false);lyr_clip_LT05_L1TP_039035_20000527_20160918_01_T1_2.setVisible(false);lyr_clip_LT05_L1TP_039035_20010615_20160918_01_T1_3.setVisible(false);lyr_clip_LT05_L1TP_039035_20020618_20160916_01_T1_4.setVisible(false);lyr_clip_LT05_L1TP_039035_20030621_20160915_01_T1_5.setVisible(false);lyr_clip_LT05_L1TP_039035_20040607_20160913_01_T1_6.setVisible(false);lyr_clip_LT05_L1TP_039035_20050626_20160912_01_T1_7.setVisible(false);lyr_clip_LT05_L1TP_039035_20060528_20160911_01_T1_8.setVisible(false);lyr_clip_LT05_L1TP_039035_20070616_20160908_01_T1_9.setVisible(false);lyr_clip_LT05_L1TP_039035_20080618_20160906_01_T1_10.setVisible(false);lyr_clip_LT05_L1TP_039035_20090621_20160905_01_T1_11.setVisible(false);lyr_clip_LT05_L1TP_039035_20100624_20160901_01_T1_12.setVisible(false);lyr_clip_LT05_L1TP_039035_20110627_20160831_01_T1_13.setVisible(false);lyr_clip_LT05_L1TP_039035_19870609_20161003_01_T1_14.setVisible(false);lyr_clip_LT05_L1TP_039035_19880526_20161003_01_T1_15.setVisible(false);lyr_clip_LT05_L1TP_039035_19890630_20161001_01_T1_16.setVisible(false);lyr_clip_LT05_L1TP_039035_19900601_20161002_01_T1_17.setVisible(false);lyr_clip_LT05_L1TP_039035_19910620_20161001_01_T1_18.setVisible(false);lyr_clip_LT05_L1TP_039035_19930711_20160927_01_T1_19.setVisible(false);lyr_clip_LT05_L1TP_039035_19940612_20160928_01_T1_20.setVisible(false);lyr_clip_LT05_L1TP_039035_19950701_20160926_01_T1_21.setVisible(false);lyr_clip_LT05_L1TP_039035_19960617_20160924_01_T1_22.setVisible(false);lyr_clip_LT05_L1TP_039035_19970620_20160923_01_T1_23.setVisible(false);lyr_clip_LT05_L1TP_039035_19980623_20160923_01_T1_24.setVisible(false);lyr_clip_LT05_L1TP_039035_19990626_20160919_01_T1_25.setVisible(false);lyr_clip_LC08_L1TP_039035_20130616_20170309_01_T1_26.setVisible(false);lyr_clip_LC08_L1TP_039035_20140619_20170304_01_T1_27.setVisible(false);lyr_clip_LC08_L1TP_039035_20150622_20180131_01_T1_28.setVisible(false);lyr_clip_LC08_L1TP_039035_20160624_20180201_01_T1_29.setVisible(false);lyr_clip_LC08_L1TP_039035_20170627_20170714_01_T1_30.setVisible(false);lyr_clip_LC08_L1TP_039035_20180614_20180703_01_T1_31.setVisible(false);lyr_clip_LC08_L1TP_039035_20190617_20190620_01_T1_32.setVisible(false);lyr_clip_LC08_L1TP_039035_20200619_20200626_01_T1_33.setVisible(false);lyr_clip_EE_LC08_L1TP_039035_20200705_20200708_01_T1_34.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_clip_AA_LT05_L1TP_039035_19860606_20161004_01_T1_1,lyr_clip_LT05_L1TP_039035_20000527_20160918_01_T1_2,lyr_clip_LT05_L1TP_039035_20010615_20160918_01_T1_3,lyr_clip_LT05_L1TP_039035_20020618_20160916_01_T1_4,lyr_clip_LT05_L1TP_039035_20030621_20160915_01_T1_5,lyr_clip_LT05_L1TP_039035_20040607_20160913_01_T1_6,lyr_clip_LT05_L1TP_039035_20050626_20160912_01_T1_7,lyr_clip_LT05_L1TP_039035_20060528_20160911_01_T1_8,lyr_clip_LT05_L1TP_039035_20070616_20160908_01_T1_9,lyr_clip_LT05_L1TP_039035_20080618_20160906_01_T1_10,lyr_clip_LT05_L1TP_039035_20090621_20160905_01_T1_11,lyr_clip_LT05_L1TP_039035_20100624_20160901_01_T1_12,lyr_clip_LT05_L1TP_039035_20110627_20160831_01_T1_13,lyr_clip_LT05_L1TP_039035_19870609_20161003_01_T1_14,lyr_clip_LT05_L1TP_039035_19880526_20161003_01_T1_15,lyr_clip_LT05_L1TP_039035_19890630_20161001_01_T1_16,lyr_clip_LT05_L1TP_039035_19900601_20161002_01_T1_17,lyr_clip_LT05_L1TP_039035_19910620_20161001_01_T1_18,lyr_clip_LT05_L1TP_039035_19930711_20160927_01_T1_19,lyr_clip_LT05_L1TP_039035_19940612_20160928_01_T1_20,lyr_clip_LT05_L1TP_039035_19950701_20160926_01_T1_21,lyr_clip_LT05_L1TP_039035_19960617_20160924_01_T1_22,lyr_clip_LT05_L1TP_039035_19970620_20160923_01_T1_23,lyr_clip_LT05_L1TP_039035_19980623_20160923_01_T1_24,lyr_clip_LT05_L1TP_039035_19990626_20160919_01_T1_25,lyr_clip_LC08_L1TP_039035_20130616_20170309_01_T1_26,lyr_clip_LC08_L1TP_039035_20140619_20170304_01_T1_27,lyr_clip_LC08_L1TP_039035_20150622_20180131_01_T1_28,lyr_clip_LC08_L1TP_039035_20160624_20180201_01_T1_29,lyr_clip_LC08_L1TP_039035_20170627_20170714_01_T1_30,lyr_clip_LC08_L1TP_039035_20180614_20180703_01_T1_31,lyr_clip_LC08_L1TP_039035_20190617_20190620_01_T1_32,lyr_clip_LC08_L1TP_039035_20200619_20200626_01_T1_33,lyr_clip_EE_LC08_L1TP_039035_20200705_20200708_01_T1_34];
