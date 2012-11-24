$(function() {

	// swiss map personalization
	map = new jvm.WorldMap({
		map : 'ch_merc_en',
		container : $('#map'),
		backgroundColor : 'transparent',
		regionStyle : {
			initial : {
				fill : 'rgb(202,236,238)'
			},
			hover : {
				fill : '#000000',
				"fill-opacity" : 1
			}
		},
		series : {
			regions : [{
				attribute : 'fill'
			}]
		}
	});

	function loadMap(countCanton) {
		var max = 0;
		$.each(countCanton, function(index, value) {
			if (countCanton[index] > max)
				max = countCanton[index];
		});

		var colors = {}, key;

		for (key in map.regions) {
			var region = key.substring(3, 7);
			if (!( region in countCanton)) {
				countCanton[region] = 0;
			}
			if (max == 0) {
				max = 1;
			}
			var x = ((-180 * countCanton[region] / max) + 220) / 255;

			var color = hslToRgb(0.509, 0.501, x);
			var colorstring = "rgb(" + parseFloat(color[0]).toFixed(0) + "," + parseFloat(color[1]).toFixed(0) + "," + parseFloat(color[2]).toFixed(0) + ")";
			colors[key] = colorstring;
		}
		map.series.regions[0].setValues(colors);
	}


	$("#check").button();
	$("#format").buttonset();
	$("#udclogo").load('../img/UDC_fr_pant_5f.svg');
	var council = new Council();
	var councillers = council.getCouncillers().datefilter();
	var countCanton = councillers.byCanton();
	loadMap(countCanton);

	$('#choice input').change(function() {
		var selectcoucillers = [];
		if ($('#BR').attr("checked") == "checked") {
			selectcouncillers = selectcouncillers.concat(councillers.councilfilter("BR").byCanton());
		}
		if ($('#CN').attr("checked") == "checked") {
			selectcouncillers = selectcouncillers.concat(councillers.councilfilter("CN").byCanton());
		}
		loadMap(selectcoucillers);
	});
});

/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   Number  h       The hue
 * @param   Number  s       The saturation
 * @param   Number  l       The lightness
 * @return  Array           The RGB representation
 */
function hslToRgb(h, s, l) {
	var r, g, b;

	if (s == 0) {
		r = g = b = l;
		// achromatic
	} else {
		function hue2rgb(p, q, t) {
			if (t < 0)
				t += 1;
			if (t > 1)
				t -= 1;
			if (t < 1 / 6)
				return p + (q - p) * 6 * t;
			if (t < 1 / 2)
				return q;
			if (t < 2 / 3)
				return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		}

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [r * 255, g * 255, b * 255];
}