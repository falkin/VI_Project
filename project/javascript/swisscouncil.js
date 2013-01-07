google.load('visualization', '1', {
	packages : ['table', 'corechart']
});

function drawChart() {
	var VOTEFEMME = 1971;
	var dateBegin = council.getDateBegin();
	var dateEnd = council.getDateEnd();
	if (dateEnd < VOTEFEMME)
		$('#partyGraphe div:first').remove();
	else {
		var max = 0;
		var tab = council.WomanProportion();
		var chartArray = new Array();
		var data = new google.visualization.DataTable();
		data.addColumn('number', 'Année');
		for (party in tab) {
			if (party == "-")
				data.addColumn('number', 'Tous les partis');
			else
				data.addColumn('number', party);
			data.addColumn({type:'string', role:'tooltip'});	
		}
		var dateBegin = council.getDateBegin();
		if (dateBegin < VOTEFEMME)
			dateBegin = VOTEFEMME;
		var dateEnd = council.getDateEnd();
		for (var i = dateBegin; i <= dateEnd; i++) {
			var subTab = new Array();
			subTab.push(i);
			for (party in tab) {
				var value = tab[party][i];
				if (value > max)
					max = value;
				subTab.push(value);
				subTab.push(i+" - "+parseFloat(value*100).toFixed(2)+"% de femmes");
			}
			chartArray.push(subTab);
		}
		data.addRows(chartArray);
		
		//var data = google.visualization.arrayToDataTable(d);
		var colorarray = new Array();
		if (compareMode) {
			colorarray.push(hslToRgb(HUE_COMPARE1, SATURATION_COMPARE1, 1 - (220.0 / 255)));
			colorarray.push(hslToRgb(HUE_COMPARE2, SATURATION_COMPARE2, 1 - (220.0 / 255)));
		} else {
			colorarray.push(hslToRgb(HUE, SATURATION, 1 - (220.0 / 255)));
		}

		var options = {

			colors : colorarray,
			title : 'Pourcentage de femmes',
			titleTextStyle : {
				color : '#F33F52'
			},
			hAxis : {
				format : '####',
				title : 'Année',
				viewWindow : {
					max : dateEnd + 1,
					min : dateBegin - 1,
				},
				viewWindowMode : 'explicit'
			},
			vAxis : {
				format : '###,##%',
				title : "pourcentage [%]",
				minValue : 0,
				maxValue : max > 0.4 ? max : 0.4
			}
		};

		var chart = new google.visualization.ColumnChart(document.getElementById('partyGraphe'));
		chart.draw(data, options);
		$('#partyGraphe text').css("font-family", "Arimo");
		var test = $('#partyGraphe rect[width="715"]');
		test.css("fill-opacity", "0");
	}
}

//google.setOnLoadCallback(drawChart);

// GLOBAL VARIABLES
// colors for map
var HUE = 0.5;
var SATURATION = 0.5;
var HUE_COMPARE1 = 0.3;
var SATURATION_COMPARE1 = 0.5;
var HUE_COMPARE2 = 0.05;
var SATURATION_COMPARE2 = 0.5;

var compareMode = false;
var compareData;

var filterListSearch = false;
var table = null;
var councillers = null;
var council = null;
var insteadFinal;
var insteadSp;
var allValuesinstead = 0;
var markers;
var lenghtTableSelection = 0;
var tableSelectedListID = 0;
var selectcouncillers = null;
var selectedCanton;
var from;
var to;
var selectedFunction = null;

function initDisplay(){
	council.reload();
	council = new Council();
	councillers = council.getCouncillers().datefilter();
	loadcouncil(councillers,1);
}

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
	loaderMap(insteadFinal, nameSelected, data);

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
			loaderMap(insteadFinal, nameSelected, data);

		}
	} else {
		insteadFinal = insteadSp[allValuesinstead];
		loaderMap(insteadFinal, nameSelected, data);
	}
}

function drawTable(array, refresh) {

	var data = new google.visualization.DataTable();

	data.addColumn('string', '');
	data.addColumn('string', '');
	data.addColumn('number', '');

	$(".typeTotal .value").text(array.length + " personnes");
	var val = new Array();
	var valSplit = $(".inputePeopleLong").val().split(" ");
	for (var x = 0; x < valSplit.length; x++) {
		if (valSplit[x] != "")
			val[x] = new RegExp(valSplit[x], "i");
	}
	if (selectedCanton != null && selectedCanton.length > 0) {
		var selectedcouncilarray = new Array();
		var b = 0;
		for (var i = 0; i < array.length; i++) {
			for (var x = 0; x < selectedCanton.length; x++) {

				if ((array[i][2].f.match(selectedCanton[x]) != null)) {
					selectedcouncilarray[b] = array[i];
					b = b + 1;
					break;
				}
			}
		}
		array = selectedcouncilarray;
		//data.addRows(selectedcouncilarray);
	}

	if (filterListSearch && $(".inputePeopleLong").val() != "") {
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

		//data.addRows(selectedcouncilarray);
		array = selectedcouncilarray;
	}
	singlePersonArray = new Array();
	$.each(array, function(index, value) {
		if (index > 0 && value[0] == singlePersonArray[singlePersonArray.length-1][0] && value[1] == singlePersonArray[singlePersonArray.length-1][1])
			singlePersonArray[singlePersonArray.length - 1] = value;
		else {
			singlePersonArray.push(value);
		}
		array = singlePersonArray;
	});
	data.addRows(array);

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

function loadMap(countCanton) {
	$('.jvectormap-container #legend').remove();

	if (compareMode) {
		compareData = {};
		var colors = {}, key, color;
		for (key in map.regions) {
			compareData[key] = {};
			var region = key.substring(3, 7);
			var totalForRegion = 0;
			if ( region in countCanton) {
				var party;
				for (party in countCanton[region]) {
					totalForRegion += countCanton[region][party];
				}
				for (party in countCanton[region]) {
					compareData[key][party] = countCanton[region][party] / totalForRegion;
				}
				var percent = countCanton[region][party] / totalForRegion;
				if (percent == 0.5) {
					color = "rgb(100,100,100)";
				}
				if (percent < 0.5) {
					var x = ((360 * percent) + 40) / 255;
					color = hslToRgb(HUE_COMPARE1, SATURATION_COMPARE1, x);
				} else if (percent > 0.5) {
					var x = ((360 * (1.0 - percent)) + 40) / 255;
					color = hslToRgb(HUE_COMPARE2, SATURATION_COMPARE2, x);
				}
			} else {
				color = "rgb(200,200,200)";
			}
			colors[key] = color;
			compareData[key][0] = totalForRegion;
		}
		var key1 = council.getParty(0);
		var key2 = council.getParty(1);

		var x = 40.0 / 255;
		var mincolor = hslToRgb(HUE_COMPARE1, SATURATION_COMPARE1, 1 - x);
		var mincolor2 = hslToRgb(HUE_COMPARE2, SATURATION_COMPARE1, 1 - x);
		x = 130.0 / 255;
		var medcolor = hslToRgb(HUE_COMPARE1, SATURATION_COMPARE1, 1 - x);
		var medcolor2 = hslToRgb(HUE_COMPARE2, SATURATION_COMPARE1, 1 - x);
		x = 220.0 / 255;
		var maxcolor = hslToRgb(HUE_COMPARE1, SATURATION_COMPARE1, 1 - x);
		var maxcolor2 = hslToRgb(HUE_COMPARE2, SATURATION_COMPARE1, 1 - x);
		var mediumcolor = 'rgb(100,100,100)';
		$('.jvectormap-container').append("<div id=\"legend\" style=\"height:50px;width:210px;position:absolute;right:0px;bottom:-10px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:" + maxcolor + ";stop-opacity:1\" /><stop offset=\"10%\" style=\"stop-color:" + maxcolor + ";stop-opacity:1\" /><stop offset=\"25%\" style=\"stop-color:" + medcolor + ";stop-opacity:1\" /><stop offset=\"49%\" style=\"stop-color:" + mincolor + ";stop-opacity:1\" /><stop offset=\"50%\" style=\"stop-color:" + mediumcolor + ";stop-opacity:1\" /><stop offset=\"51%\" style=\"stop-color:" + mincolor2 + ";stop-opacity:1\" /><stop offset=\"75%\" style=\"stop-color:" + medcolor2 + ";stop-opacity:1\" /><stop offset=\"90%\" style=\"stop-color:" + maxcolor2 + ";stop-opacity:1\"/><stop offset=\"100%\" style=\"stop-color:" + maxcolor2 + ";stop-opacity:1\"/></linearGradient></defs><rect width=\"180\" height=\"15\" fill=\"url(#grad1)\" x=\"12\" y=\"15\"/><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"16\" y=\"40\">" + "100%" + "</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"60\" y=\"40\">" + key1 + "</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"103\" y=\"40\">" + "50%" + "</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"150\" y=\"40\">" + key2 + "</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"196\" y=\"40\">" + "100%" + "</text></svg></div>");

	} else {
		var max = 0;
		$.each(countCanton, function(index, value) {
			if (countCanton[index] > max)
				max = countCanton[index];
		});

		var colors = {}, key, color;
		for (key in map.regions) {
			var region = key.substring(3, 7);
			if (!( region in countCanton)) {
				countCanton[region] = 0;
			}
			if (countCanton[region] == 0) {
				color = "rgb(200,200,200)";
			}
			if (countCanton[region] > 0) {
				var x = ((-180 * countCanton[region] / max) + 220) / 255;
				color = hslToRgb(HUE, SATURATION, x);
			}
			colors[key] = color;
		}
		var maxcolor = hslToRgb(HUE, SATURATION, (40 / 255));
		var mediumcolor;
		if (max > 1)
			mediumcolor = hslToRgb(HUE, SATURATION, ((-180 * 0.5) + 220) / 255);
		else
			mediumcolor = maxcolor;
		var mincolor = hslToRgb(HUE, SATURATION, ((-180 * 1 / max) + 220) / 255);
		if (max > 0)
			$('.jvectormap-container').append("<div id=\"legend\" style=\"height:50px;width:200px;position:absolute;right:0px;bottom:-10px\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\"><stop offset=\"0%\" style=\"stop-color:" + mincolor + ";stop-opacity:1\" /><stop offset=\"10%\" style=\"stop-color:" + mincolor + ";stop-opacity:1\" /><stop offset=\"50%\" style=\"stop-color:" + mediumcolor + ";stop-opacity:1\" /><stop offset=\"90%\" style=\"stop-color:" + maxcolor + ";stop-opacity:1\"/><stop offset=\"100%\" style=\"stop-color:" + maxcolor + ";stop-opacity:1\"/></linearGradient></defs><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"90\" y=\"10\">Nombre de personnes</text><rect width=\"180\" height=\"15\" fill=\"url(#grad1)\" x=\"2\" y=\"15\"/><text fill=\"black\" font-size=\"8\" font-family=\"Verdana\" y=\"40\">1</text><text style=\"text-anchor:middle\" fill=\"black\" font-size=\"8\" font-family=\"Verdana\" x=\"180\" y=\"40\">" + max + "</text></svg></div>");

	}
	map.series.regions[0].setValues(colors);
	map.removeAllMarkers();

}

function loadcouncil(councillers, refresh) {
	var textInfoCouncil = "-";
	var councilstring = "";
	if ($('#BR').attr("checked") == "checked") {
		$('.BR').css("color", "#f33f52");
		textInfoCouncil = "Conseil Fédéral";
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
			textInfoCouncil = "Conseil National";
		} else {
			textInfoCouncil = textInfoCouncil + ", National";
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
			textInfoCouncil = "Conseil des Etats";
		} else {
			textInfoCouncil = textInfoCouncil + ", des Etats";
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

	selectcouncillers = councillers.setCouncil(councilstring).byCanton();
	drawTable(councillers.toArray(), refresh);
	loadMap(selectcouncillers);
	drawChart();
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
				fill : 'rgb(200,200,200)'
			},
			hover : {
				//fill : '#000000',
				stroke : 'black',
				"stroke-width" : 2,
				"stroke-opacity" : 1,
				"fill-opacity" : 1
			},
			selected : {
				fill : '#F33F52'
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
		onRegionLabelShow : function(e, el, code) {
			var nbpersonne;
			if (compareMode) {
				nbpersonne = compareData[code][0];
			} else {
				var region = code.substring(3, 7);
				nbpersonne = selectcouncillers[region];
			}
			el.html("<b>" + el.html() + "</b><br/>" + nbpersonne + " personne");
			if (nbpersonne > 1)
				el.html(el.html() + "s");
			if (compareMode) {
				for (key in compareData[code]) {
					if (key != 0)
						el.html(el.html() + "<br/>" + key + " - " + parseFloat(compareData[code][key] * 100).toFixed(1) + "%");
				}
			}
		},
		onRegionSelected : function(e, code, isSelected, selectedRegionCode) {
			selectedFunction = setTimeout(function() {
				$.each(selectedRegionCode, function(index, value) {
					selectedRegionCode[index] = value.substring(3, 7);
				});
				selectedCanton = selectedRegionCode;
				drawTable(councillers.toArray(), 1);
			}, 1);
		}
	});

	$("#check").button();
	$("#format").buttonset();
	council = new Council();
	councillers = council.getCouncillers().datefilter();
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
		setTimeout(function() {
			var str = "-";
			if ($(".result-selected").children().length > 1)
				compareMode = true;
			else
				compareMode = false;
			$(".result-selected").each(function() {
				var parti = $(this).text().split("-");
				if (str != "-") {
					str += ", " + parti[0].slice(0, -1);
				} else {
					str = parti[0].slice(0, -1);
				}
			});
			if($(".result-selected").children().length == 2)
			$('.typeInfo .value').text("Comparaison de partis");
			else if($(".result-selected").children().length == 1)
				$('.typeInfo .value').text("Statistiques du parti");
			else if($(".result-selected").children().length == 0)
				$('.typeInfo .value').text("Statistiques de tous les partis");
			$(".partyInfo .value").text(str);
			selectcouncillers = councillers.setParty(str).byCanton();
			drawTable(councillers.toArray(), 1);
			loadMap(selectcouncillers);
			drawChart();
		}, 100);
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
			from = parseInt(this.getValue().substring(0, 4));
			to = parseInt(this.getValue().substring(5, 9));
			selectcouncillers = councillers.setDate(from, to).byCanton();
			drawTable(councillers.toArray(), 1);
			loadMap(selectcouncillers);
			drawChart();
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
 * @return  string           The RGB representation
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