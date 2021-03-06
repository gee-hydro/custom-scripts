//VERSION=3
// Leaf Water Content Index  (abbrv. LWCI)
//
// General formula: log(1-(NIR-MIDIR))/(-log(1-(NIR-MIDIR)))
//
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=168&rsindex_id=129

// Initialize parameters
let MIDIR = 0.367;

let index = Math.log(1.0 - (B05 - MIDIR)) / (-Math.log(1.0 - (B05 - MIDIR)));
let min = 0.013900000000000001;
let max = 0.7861;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

var underflow_color = [1, 1, 1];
var low_color = [208/255, 88/255, 126/255];
var high_color = [241/255, 234/255, 200/255];
var overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);
