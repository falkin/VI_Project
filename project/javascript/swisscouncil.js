google.load('visualization', '1', {
	packages : ['table']
});
//google.setOnLoadCallback(drawTable);

// GLOBAL VARIABLES

var filterListSearch = false;
var table = null;
var council = null;
var insteadFinal;
var insteadSp;
var allValuesinstead = 0;
var markers;
var lenghtTableSelection = 0;
var tableSelectedListID = 0;

function displayInstead(tableSelection, data) {

	lenghtTableSelection = tableSelection.length - 1;
	var idCouncil = tableSelection[0].row;
	var nameSelected = data.getValue(idCouncil, 0) + " " + data.getValue(idCouncil, 1) + " - ";
	var instead = council.searchInstead(data.getValue(idCouncil, 2));
	insteadSp = instead.split(",");
	insteadFinal = insteadSp[0];
	tableSelectedListID = 0;
	$('.moreInformationOne').animate({
		opacity : "0"
	}, 600, function() {
		council.updateMoreInformations(data.getValue(idCouncil, 2), "One");
		$(".moreInformationOne").css("display", "");

	});
	loadMap(insteadFinal, nameSelected, data);

}

function addLocation(position, nameSelected, data) {
	var pos = parseFloat(position.toString().split(",")[0].replace("(", ""));
	var pos2 = parseFloat(position.toString().split(",")[1].replace(")", ""));
	markers[tableSelectedListID] = {
		latLng : [pos, pos2],
		name : nameSelected + "Lieu d'origine: " + insteadFinal
	};
	var cityAreaData = [];
	allValuesinstead++;
	tableSelectedListID++;
	map.removeAllMarkers();
	if (allValuesinstead == insteadSp.length) {

		if (lenghtTableSelection == 0) {
			map.addMarkers(markers, cityAreaData);
			allValuesinstead = 0;
			markers = new Array();
			tableSelectedListID = 0;
		} else {
			if (lenghtTableSelection == 1) {
				$('.moreInformationTwo').animate({
					opacity : "0"
				}, 600, function() {
					council.updateMoreInformations(data.getValue(idCouncil, 2), "Two");
					$(".moreInformationTwo").css("display", "");

				});
			} else if (lenghtTableSelection == 2) {
				$('.moreInformationTree').animate({
					opacity : "0"
				}, 600, function() {
					council.updateMoreInformations(data.getValue(idCouncil, 2), "Tree");
					$(".moreInformationTree").css("display", "");
				});
			}
			var idCouncil = table.getSelection()[lenghtTableSelection].row;
			var nameSelected = data.getValue(idCouncil, 0) + " " + data.getValue(idCouncil, 1) + " - ";
			var instead = council.searchInstead(idCouncil);
			insteadSp = instead.split(",");
			insteadFinal = insteadSp[0];
			allValuesinstead = 0;
			lenghtTableSelection--;
			loadMap(insteadFinal, nameSelected, data);

		}
	} else {
		insteadFinal = insteadSp[allValuesinstead];
		loadMap(insteadFinal, nameSelected, data);
	}
}

function drawTable(array, refresh) {

	var data = new google.visualization.DataTable();

	data.addColumn('string', '');
	data.addColumn('string', '');
	data.addColumn('number', '');

	var val = new Array();
	var valSplit = $(".inputePeopleLong").val().split(" ");
	for (var x = 0; x < valSplit.length; x++) {
		if (valSplit[x] != "")
			val[x] = new RegExp(valSplit[x], "i");
	}
	if (filterListSearch == true && $(".inputePeopleLong").val() != "") {
		var selectedcouncilarray = new Array();
		var b = 0;
		for (var i = 0; i < array.length; i++) {
			for (var x = 0; x < val.length; x++) {

				if ((array[i][0].toString().match(val[x]) != null || array[i][1].toString().match(val[x]) != null || array[i][2].f.match(val[x]) != null) && val != "") {
					selectedcouncilarray[b] = array[i];
					b = b + 1;
					break;
				}
			}
		}
		$(".typeTotal .value").text(selectedcouncilarray.length + " personnes");
		data.addRows(selectedcouncilarray);
	} else {
		$(".typeTotal .value").text(array.length + " personnes");
		data.addRows(array);
	}
	if (refresh == 0) {
		table = new google.visualization.Table(document.getElementById('informationList'));

		table.draw(data, {
			showRowNumber : false
		}, {
			page : 'disable',
		});
		google.visualization.events.addListener(table, 'select', function() {
			$('.moreInformationOne').animate({
				opacity : "0"
			}, 600);
			$('.moreInformationTwo').animate({
				opacity : "0"
			}, 600);
			$('.moreInformationTree').animate({
				opacity : "0"
			}, 600);
			$(".moreInformationOne").css("display", "none");
			$(".moreInformationTwo").css("display", "none");
			$(".moreInformationTree").css("display", "none");
			if ((table.getSelection()).length >= 4) {

			}
			if ((table.getSelection()).length > 0 && (table.getSelection()).length < 4) {
				displayInstead(table.getSelection(), data);
			} else if ((table.getSelection()).length == 0) {
				map.removeAllMarkers();
				nameSelected = null;

			}

		});
	} else if (refresh == 1) {
		table = new google.visualization.Table(document.getElementById('tableListPeople'));
		table.draw(data, {
			showRowNumber : false
		}, {
			page : 'disable',
		});
		google.visualization.events.addListener(table, 'select', function() {
			$('.moreInformationOne').animate({
				opacity : "0"
			}, 600);
			$('.moreInformationTwo').animate({
				opacity : "0"
			}, 600);
			$('.moreInformationTree').animate({
				opacity : "0"
			}, 600);
			$(".moreInformationOne").css("display", "none");
			$(".moreInformationTwo").css("display", "none");
			$(".moreInformationTree").css("display", "none");
			if ((table.getSelection()).length >= 4) {

			}

			if ((table.getSelection()).length > 0 && (table.getSelection()).length < 4) {
				displayInstead(table.getSelection(), data);
			} else if ((table.getSelection()).length == 0) {
				map.removeAllMarkers();
				nameSelected = null;
			}

		});
	}
	return data;
}

$(function() {
	markers = new Array();
	// swiss map personalization
	map = new jvm.WorldMap({
		map : 'ch_merc_en',
		container : $('#map'),
		regionsSelectable : true,

		backgroundColor : 'rgba(0,0,0,0)',
		zoomOnScroll : false,

		regionStyle : {
			initial : {
				fill : 'rgb(202,236,238)'
			},
			hover : {
				//fill : '#000000',
				stroke : 'black',
				"stroke-width" : 2,
				"stroke-opacity" : 1,
				"fill-opacity" : 1
			}
		},
		markerStyle : {
			initial : {
				fill : '#f33f52',
			},
			selected : {
				fill : '#f33f52'
			}
		},
		series : {
			regions : [{
				attribute : 'fill'
			}],
			markers : [{
				attribute : 'r',
				scale : [5, 15]

			}]
		},
	});

	function loadMap(countCanton) {
		var max = 0;
		$.each(countCanton, function(index, value) {
			if (countCanton[index] > max)
				max = countCanton[index];
		});

		var colors = {}, key;
		var H=0.5;
		var S=0.5;
		for (key in map.regions) {
			var region = key.substring(3, 7);
			if (!( region in countCanton)) {
				countCanton[region] = 0;
			}
			if (countCanton[region]==0) {
			var color = "rgb(200,200,200)";
			}
			else{
			var x = ((-180 * countCanton[region] / max) + 220) / 255;
			var color = hslToRgb(H, S, x);
			}
			colors[key] = color;
		}
		var maxcolor=hslToRgb(H, S,(40 / 255));
		var mediumcolor;
		if(max>1)
		mediumcolor = hslToRgb(H, S,((-180 * 0.5) + 220) / 255);
		else
		mediumcolor=maxcolor;
		var mincolor=hslToRgb(H, S,((-180 * 1 / max) + 220) / 255);
			
		map.series.regions[0].setValues(colors);
		
		$('.jvectormap-container #legend').remove();
		if(max>0)
		$('.jvectormap-container').append("<div id=\"legend\" style=\"height:50px;width:200px;position:absolute;right:0px;bottom:0px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:"+mincolor+";stop-opacity:1\" /><stop offset=\"10%\" style=\"stop-color:"+mincolor+";stop-opacity:1\" /><stop offset=\"50%\" style=\"stop-color:"+mediumcolor+";stop-opacity:1\" /><stop offset=\"90%\" style=\"stop-color:"+maxcolor+";stop-opacity:1\"/><stop offset=\"100%\" style=\"stop-color:"+maxcolor+";stop-opacity:1\"/></linearGradient></defs><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"90\" y=\"10\">Nombre de personnes</text><rect width=\"180\" height=\"15\" fill=\"url(#grad1)\" x=\"2\" y=\"15\"/><text fill=\"black\" font-size=\"8\" font-family=\"Verdana\" y=\"40\">1</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"180\" y=\"40\">"+max+"</text></svg></div>");
		//$('#map svg').append('<defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style="stop-color:rgb(202, 235, 237);stop-opacity:1" /><stop offset="100%" style="stop-color:rgb(19,57,60);stop-opacity:1"/></linearGradient></defs><rect width="200" height="15" fill="url(#grad1)" x="2"/><text fill="black" font-size="8" font-family="Verdana" y="25">1</text><text style="text-anchor:middle" fill="black" font-size="8" font-family="Verdana" x="200"y="25"></text>');
	}

	function loadcouncil(councillers, refresh) {
		var textInfoCouncil = "-";
		var councilstring = "";
		if ($('#BR').attr("checked") == "checked") {
			$('.BR').css("color", "#f33f52");
			textInfoCouncil = "Conseil fédéral";
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "BR";
		} else {
			$('.BR').css("color", "black");
		}
		if ($('#CN').attr("checked") == "checked") {
			$('.CN').css("color", "#f33f52");
			if (textInfoCouncil == "-") {
				textInfoCouncil = "Conseil national";
			} else {
				textInfoCouncil = textInfoCouncil + ", national";
			}
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "CN";
		} else {
			$('.CN').css("color", "black");
		}
		if ($('#CE').attr("checked") == "checked") {
			$('.CE').css("color", "#f33f52");
			if (textInfoCouncil == "-") {
				textInfoCouncil = "Conseil des états";
			} else {
				textInfoCouncil = textInfoCouncil + ", des états";
			}
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "CE";
		} else {
			$('.CE').css("color", "black");
		}
		if ($('#CE').attr("checked") == "checked" && $('#CN').attr("checked") == "checked" && $('#BR').attr("checked") == "checked") {
			textInfoCouncil = "Tous";
		}
		$(".councilInfo .value").text(textInfoCouncil);
		var selectcouncillers = null;
		selectcouncillers = councillers.setCouncil(councilstring).byCanton();
		drawTable(councillers.toArray(), refresh);
		loadMap(selectcouncillers);

	}


	$("#check").button();
	$("#format").buttonset();
	$("#udclogo").load('../img/UDC_fr_pant_5f.svg');
	council = new Council();
	var councillers = council.getCouncillers().datefilter();
	var countCanton = councillers.byCanton();
	var smallestDate = council.smallestDate();

	council.loadAllParty();
	$(".chzn-select").chosen({
		no_results_text : "Aucun parti corespondant !",
		max_selected_options : 2
	});

	loadcouncil(councillers, 0);
	//loadMap(countCanton);

	$(".inputePeopleLong").keyup(function(event) {
		map.removeAllMarkers();
		if ($(".inputePeopleLong").val() != "" && $(".inputePeopleLong").val() != "Rechercher une personne dans la liste") {
			filterListSearch = true;
		} else {
			filterListSearch = false;
		}
		loadcouncil(councillers, 1);
	});

	$('#choice input').change(function() {
		map.series.regions[0].elements["CH-JU"].element.properties["d]"] = null//["fill"]="rgb(255,255,255)";
		loadcouncil(councillers, 1);
	});

	//selection du parti
	$(".chzn-select").chosen().change(function() {
		var str = "-";
		$(".result-selected").each(function() {
			var parti = $(this).text().split("-");
			if (str != "-") {
				str += ", " + parti[0].slice(0, -1);
			} else {
				str = parti[0].slice(0, -1);
			}
		});
		$(".partyInfo .value").text(str);
		selectcouncillers = councillers.setParty(str).byCanton();
		drawTable(councillers.toArray(), 1);
		loadMap(selectcouncillers);
	});

	jQuery("#Slider1").slider({
		from : Number(smallestDate),
		to : 2012,
		round : 0,
		format : {
			format : "####",
			locale : "us"
		},
		scale : [Number(smallestDate), '|', 1900, '|', 1930, '|', 1960, '|', 1990, '|', 2012],
		limits : false,
		step : 1,
		dimension : '',
		skin : "plastic",
		onstatechange : function(value) {
			var val = value.split(";");

			if (val[0] == val[1]) {
				$(".yearInfo .value").text(val[0]);
			} else {
				$(".yearInfo .value").text('De ' + val[0] + ' à ' + val[1]);
			}
		},
		callback : function(value) {
			var d = this;
			var from = parseInt(this.getValue().substring(0, 4));
			var to = parseInt(this.getValue().substring(5, 9));
			selectcouncillers = councillers.setDate(from, to).byCanton();
			drawTable(councillers.toArray(), 1);
			loadMap(selectcouncillers);
		}
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
	var color = [parseFloat(r * 255).toFixed(0), parseFloat(g * 255).toFixed(0), parseFloat(b * 255).toFixed(0)];
	return "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";

}