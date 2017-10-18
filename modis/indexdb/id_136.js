// Blue-wide dynamic range vegetation index
// URL http://www.indexdatabase.de/db/si-single.php?rsindex_id=136=&sensor_id=14

let index = (0.1*B05-B09)/(0.1*B05+B09);
return colorBlend(index, [0, 0.2, 0.4, 0.6, 0.8, 1], [[0,0,0], [0.1,0.2,0.5], [0.25,0.4,0.5], [0.4,0.6,0.5], [0.75,0.8,0.5], [1,1,0.5]]);