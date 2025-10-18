var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_LULC2024_13Class_fixed_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LULC2024_13Class_fixed<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_0.png" /> Hutan Lahan Kering<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_1.png" /> Hutan Rawa<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_2.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_3.png" /> Lahan Terbuka<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_4.png" /> Pertambangan<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_5.png" /> Perkebunan Campuran<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_6.png" /> Permukiman<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_7.png" /> Pertanian Lahan Basah<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_8.png" /> Pertanian Lahan Kering<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_9.png" /> Rawa<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_10.png" /> Rumput<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_11.png" /> Semak Belukar<br />\
    <img src="styles/legend/LULC2024_13Class_fixed_1_12.png" /> Badan Air<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LULC2024_13Class_fixed_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11171300.000000, -308620.359583, 11632100.000000, 53500.627379]
        })
    });
var format_AOI_2 = new ol.format.GeoJSON();
var features_AOI_2 = format_AOI_2.readFeatures(json_AOI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AOI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AOI_2.addFeatures(features_AOI_2);
var lyr_AOI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AOI_2, 
                style: style_AOI_2,
                popuplayertitle: 'AOI',
                interactive: true,
                title: '<img src="styles/legend/AOI_2.png" /> AOI'
            });
var format_HPH_HA_Rimba_24_3 = new ol.format.GeoJSON();
var features_HPH_HA_Rimba_24_3 = format_HPH_HA_Rimba_24_3.readFeatures(json_HPH_HA_Rimba_24_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HPH_HA_Rimba_24_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPH_HA_Rimba_24_3.addFeatures(features_HPH_HA_Rimba_24_3);
var lyr_HPH_HA_Rimba_24_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPH_HA_Rimba_24_3, 
                style: style_HPH_HA_Rimba_24_3,
                popuplayertitle: 'HPH_HA_Rimba_24',
                interactive: true,
                title: '<img src="styles/legend/HPH_HA_Rimba_24_3.png" /> HPH_HA_Rimba_24'
            });
var format_HPH_RE_Rimba_24_4 = new ol.format.GeoJSON();
var features_HPH_RE_Rimba_24_4 = format_HPH_RE_Rimba_24_4.readFeatures(json_HPH_RE_Rimba_24_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HPH_RE_Rimba_24_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HPH_RE_Rimba_24_4.addFeatures(features_HPH_RE_Rimba_24_4);
var lyr_HPH_RE_Rimba_24_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HPH_RE_Rimba_24_4, 
                style: style_HPH_RE_Rimba_24_4,
                popuplayertitle: 'HPH_RE_Rimba_24',
                interactive: true,
                title: '<img src="styles/legend/HPH_RE_Rimba_24_4.png" /> HPH_RE_Rimba_24'
            });
var format_HTI_RIMBA_clip_5 = new ol.format.GeoJSON();
var features_HTI_RIMBA_clip_5 = format_HTI_RIMBA_clip_5.readFeatures(json_HTI_RIMBA_clip_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HTI_RIMBA_clip_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HTI_RIMBA_clip_5.addFeatures(features_HTI_RIMBA_clip_5);
var lyr_HTI_RIMBA_clip_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HTI_RIMBA_clip_5, 
                style: style_HTI_RIMBA_clip_5,
                popuplayertitle: 'HTI_RIMBA_clip',
                interactive: true,
                title: '<img src="styles/legend/HTI_RIMBA_clip_5.png" /> HTI_RIMBA_clip'
            });
var format_IUP_clipped_6 = new ol.format.GeoJSON();
var features_IUP_clipped_6 = format_IUP_clipped_6.readFeatures(json_IUP_clipped_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IUP_clipped_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IUP_clipped_6.addFeatures(features_IUP_clipped_6);
var lyr_IUP_clipped_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IUP_clipped_6, 
                style: style_IUP_clipped_6,
                popuplayertitle: 'IUP_clipped',
                interactive: true,
                title: '<img src="styles/legend/IUP_clipped_6.png" /> IUP_clipped'
            });
var format_HGU_clipped_7 = new ol.format.GeoJSON();
var features_HGU_clipped_7 = format_HGU_clipped_7.readFeatures(json_HGU_clipped_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HGU_clipped_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HGU_clipped_7.addFeatures(features_HGU_clipped_7);
var lyr_HGU_clipped_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HGU_clipped_7, 
                style: style_HGU_clipped_7,
                popuplayertitle: 'HGU_clipped',
                interactive: true,
                title: '<img src="styles/legend/HGU_clipped_7.png" /> HGU_clipped'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_LULC2024_13Class_fixed_1.setVisible(true);lyr_AOI_2.setVisible(true);lyr_HPH_HA_Rimba_24_3.setVisible(true);lyr_HPH_RE_Rimba_24_4.setVisible(true);lyr_HTI_RIMBA_clip_5.setVisible(true);lyr_IUP_clipped_6.setVisible(true);lyr_HGU_clipped_7.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_LULC2024_13Class_fixed_1,lyr_AOI_2,lyr_HPH_HA_Rimba_24_3,lyr_HPH_RE_Rimba_24_4,lyr_HTI_RIMBA_clip_5,lyr_IUP_clipped_6,lyr_HGU_clipped_7];
lyr_AOI_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_HPH_HA_Rimba_24_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'namaobj': 'namaobj', 'jenis': 'jenis', 'kegiatan': 'kegiatan', 'kode_prov': 'kode_prov', 'no_sk': 'no_sk', 'tgl_sk': 'tgl_sk', 'sk_awal': 'sk_awal', });
lyr_HPH_RE_Rimba_24_4.set('fieldAliases', {'objectid': 'objectid', 'namobj': 'namobj', 'remark': 'remark', 'metadata': 'metadata', 'kdprv': 'kdprv', 'lssk': 'lssk', 'no_sk': 'no_sk', 'tgl_sk': 'tgl_sk', });
lyr_HTI_RIMBA_clip_5.set('fieldAliases', {'kode_prov': 'kode_prov', 'nama_ht': 'nama_ht', 'status_sk': 'status_sk', 'no_sk': 'no_sk', 'tgl_sk': 'tgl_sk', 'luas_sk': 'luas_sk', 'jenis_sk': 'jenis_sk', 'stat_milik': 'stat_milik', 'sertif_pk': 'sertif_pk', 'ht_id': 'ht_id', });
lyr_IUP_clipped_6.set('fieldAliases', {'objectid': 'objectid', 'issuer': 'issuer', 'prov': 'prov', 'idprov': 'idprov', 'kab': 'kab', 'idkab': 'idkab', 'island': 'island', 'nmoprt': 'nmoprt', 'tipopr': 'tipopr', 'adoprt': 'adoprt', 'phoprt': 'phoprt', 'skblok': 'skblok', 'tiptmb': 'tiptmb', 'datstr': 'datstr', 'datend': 'datend', 'lublok': 'lublok', 'status': 'status', 'locate': 'locate', 'idcmd': 'idcmd', 'clascmd': 'clascmd', 'commdt': 'commdt', 'idblok': 'idblok', 'remark': 'remark', 'srs_id': 'srs_id', 'fcode': 'fcode', 'datcrte': 'datcrte', });
lyr_HGU_clipped_7.set('fieldAliases', {'persilid': 'persilid', 'nib': 'nib', });
lyr_AOI_2.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_HPH_HA_Rimba_24_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'namaobj': 'TextEdit', 'jenis': 'TextEdit', 'kegiatan': 'TextEdit', 'kode_prov': 'TextEdit', 'no_sk': 'TextEdit', 'tgl_sk': 'TextEdit', 'sk_awal': 'TextEdit', });
lyr_HPH_RE_Rimba_24_4.set('fieldImages', {'objectid': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'metadata': 'TextEdit', 'kdprv': 'TextEdit', 'lssk': 'TextEdit', 'no_sk': 'TextEdit', 'tgl_sk': 'TextEdit', });
lyr_HTI_RIMBA_clip_5.set('fieldImages', {'kode_prov': 'TextEdit', 'nama_ht': 'TextEdit', 'status_sk': 'TextEdit', 'no_sk': 'TextEdit', 'tgl_sk': 'DateTime', 'luas_sk': 'TextEdit', 'jenis_sk': 'TextEdit', 'stat_milik': 'TextEdit', 'sertif_pk': 'TextEdit', 'ht_id': 'TextEdit', });
lyr_IUP_clipped_6.set('fieldImages', {'objectid': 'TextEdit', 'issuer': 'TextEdit', 'prov': 'TextEdit', 'idprov': 'TextEdit', 'kab': 'TextEdit', 'idkab': 'TextEdit', 'island': 'TextEdit', 'nmoprt': 'TextEdit', 'tipopr': 'TextEdit', 'adoprt': 'TextEdit', 'phoprt': 'TextEdit', 'skblok': 'TextEdit', 'tiptmb': 'TextEdit', 'datstr': 'TextEdit', 'datend': 'TextEdit', 'lublok': 'TextEdit', 'status': 'TextEdit', 'locate': 'TextEdit', 'idcmd': 'TextEdit', 'clascmd': 'TextEdit', 'commdt': 'TextEdit', 'idblok': 'TextEdit', 'remark': 'TextEdit', 'srs_id': 'TextEdit', 'fcode': 'TextEdit', 'datcrte': 'TextEdit', });
lyr_HGU_clipped_7.set('fieldImages', {'persilid': 'TextEdit', 'nib': 'TextEdit', });
lyr_AOI_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_HPH_HA_Rimba_24_3.set('fieldLabels', {'OBJECTID': 'no label', 'namaobj': 'no label', 'jenis': 'no label', 'kegiatan': 'no label', 'kode_prov': 'no label', 'no_sk': 'no label', 'tgl_sk': 'no label', 'sk_awal': 'no label', });
lyr_HPH_RE_Rimba_24_4.set('fieldLabels', {'objectid': 'no label', 'namobj': 'no label', 'remark': 'no label', 'metadata': 'no label', 'kdprv': 'no label', 'lssk': 'no label', 'no_sk': 'no label', 'tgl_sk': 'no label', });
lyr_HTI_RIMBA_clip_5.set('fieldLabels', {'kode_prov': 'no label', 'nama_ht': 'no label', 'status_sk': 'no label', 'no_sk': 'no label', 'tgl_sk': 'no label', 'luas_sk': 'no label', 'jenis_sk': 'no label', 'stat_milik': 'no label', 'sertif_pk': 'no label', 'ht_id': 'no label', });
lyr_IUP_clipped_6.set('fieldLabels', {'objectid': 'no label', 'issuer': 'no label', 'prov': 'no label', 'idprov': 'no label', 'kab': 'no label', 'idkab': 'no label', 'island': 'no label', 'nmoprt': 'no label', 'tipopr': 'no label', 'adoprt': 'no label', 'phoprt': 'no label', 'skblok': 'no label', 'tiptmb': 'no label', 'datstr': 'no label', 'datend': 'no label', 'lublok': 'no label', 'status': 'no label', 'locate': 'no label', 'idcmd': 'no label', 'clascmd': 'no label', 'commdt': 'no label', 'idblok': 'no label', 'remark': 'no label', 'srs_id': 'no label', 'fcode': 'no label', 'datcrte': 'no label', });
lyr_HGU_clipped_7.set('fieldLabels', {'persilid': 'inline label - always visible', 'nib': 'no label', });
lyr_HGU_clipped_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});