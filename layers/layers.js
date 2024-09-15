ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:9141").setExtent([7495451.108205, 4711644.201168, 7554716.089483, 4741422.377602]);
var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Zonat_Kadastrale_Prishitne_1 = new ol.format.GeoJSON();
var features_Zonat_Kadastrale_Prishitne_1 = format_Zonat_Kadastrale_Prishitne_1.readFeatures(json_Zonat_Kadastrale_Prishitne_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Zonat_Kadastrale_Prishitne_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonat_Kadastrale_Prishitne_1.addFeatures(features_Zonat_Kadastrale_Prishitne_1);
var lyr_Zonat_Kadastrale_Prishitne_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonat_Kadastrale_Prishitne_1, minResolution:8.401339845678589,

                style: style_Zonat_Kadastrale_Prishitne_1,
                popuplayertitle: "Zonat_Kadastrale_Prishitne",
                interactive: true,
                title: '<img src="styles/legend/Zonat_Kadastrale_Prishitne_1.png" /> Zonat_Kadastrale_Prishitne'
            });
var format_PikatTuristike_2 = new ol.format.GeoJSON();
var features_PikatTuristike_2 = format_PikatTuristike_2.readFeatures(json_PikatTuristike_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_PikatTuristike_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PikatTuristike_2.addFeatures(features_PikatTuristike_2);
var lyr_PikatTuristike_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PikatTuristike_2, 
                style: style_PikatTuristike_2,
                popuplayertitle: "PikatTuristike",
                interactive: true,
                title: '<img src="styles/legend/PikatTuristike_2.png" /> PikatTuristike'
            });
var format_Kufiri_Komunal_Prishitne_3 = new ol.format.GeoJSON();
var features_Kufiri_Komunal_Prishitne_3 = format_Kufiri_Komunal_Prishitne_3.readFeatures(json_Kufiri_Komunal_Prishitne_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:9141'});
var jsonSource_Kufiri_Komunal_Prishitne_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kufiri_Komunal_Prishitne_3.addFeatures(features_Kufiri_Komunal_Prishitne_3);
var lyr_Kufiri_Komunal_Prishitne_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kufiri_Komunal_Prishitne_3, 
                style: style_Kufiri_Komunal_Prishitne_3,
                popuplayertitle: "Kufiri_Komunal_Prishitne",
                interactive: true,
                title: '<img src="styles/legend/Kufiri_Komunal_Prishitne_3.png" /> Kufiri_Komunal_Prishitne'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_Zonat_Kadastrale_Prishitne_1.setVisible(true);lyr_PikatTuristike_2.setVisible(true);lyr_Kufiri_Komunal_Prishitne_3.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_Zonat_Kadastrale_Prishitne_1,lyr_PikatTuristike_2,lyr_Kufiri_Komunal_Prishitne_3];
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldAliases', {'CadastreZo': 'CadastreZo', 'CadastreZ0': 'CadastreZ0', 'CadastreZ1': 'CadastreZ1', 'CadastreZ2': 'CadastreZ2', 'CadastreZ3': 'CadastreZ3', 'CadastreZ4': 'CadastreZ4', 'Municipali': 'Municipali', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_PikatTuristike_2.set('fieldAliases', {'id': 'id', 'Emri': 'Emri', 'Kategoria': 'Kategoria', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldAliases', {'Municipali': 'Municipali', 'Municipal0': 'Municipal0', 'Municipal1': 'Municipal1', 'Municipal2': 'Municipal2', 'Municipal3': 'Municipal3', 'StateId': 'StateId', });
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldImages', {'CadastreZo': 'TextEdit', 'CadastreZ0': 'TextEdit', 'CadastreZ1': 'TextEdit', 'CadastreZ2': 'TextEdit', 'CadastreZ3': 'TextEdit', 'CadastreZ4': 'TextEdit', 'Municipali': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': 'TextEdit', 'auxiliary_storage_labeling_lineanchorclipping': 'TextEdit', 'auxiliary_storage_labeling_lineanchortype': 'TextEdit', 'auxiliary_storage_labeling_lineanchortextpoint': 'TextEdit', });
lyr_PikatTuristike_2.set('fieldImages', {'id': 'TextEdit', 'Emri': 'TextEdit', 'Kategoria': 'TextEdit', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldImages', {'Municipali': 'TextEdit', 'Municipal0': 'TextEdit', 'Municipal1': 'TextEdit', 'Municipal2': 'TextEdit', 'Municipal3': 'TextEdit', 'StateId': 'TextEdit', });
lyr_Zonat_Kadastrale_Prishitne_1.set('fieldLabels', {'CadastreZo': 'no label', 'CadastreZ0': 'no label', 'CadastreZ1': 'no label', 'CadastreZ2': 'no label', 'CadastreZ3': 'no label', 'CadastreZ4': 'no label', 'Municipali': 'no label', 'auxiliary_storage_labeling_lineanchorpercent': 'no label', 'auxiliary_storage_labeling_lineanchorclipping': 'no label', 'auxiliary_storage_labeling_lineanchortype': 'no label', 'auxiliary_storage_labeling_lineanchortextpoint': 'no label', });
lyr_PikatTuristike_2.set('fieldLabels', {'id': 'no label', 'Emri': 'no label', 'Kategoria': 'no label', });
lyr_Kufiri_Komunal_Prishitne_3.set('fieldLabels', {'Municipali': 'inline label - always visible', 'Municipal0': 'inline label - always visible', 'Municipal1': 'inline label - always visible', 'Municipal2': 'inline label - always visible', 'Municipal3': 'inline label - always visible', 'StateId': 'inline label - always visible', });
lyr_Kufiri_Komunal_Prishitne_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});