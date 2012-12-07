google.load('visualization', '1', {
	packages : ['table']
});
//google.setOnLoadCallback(drawTable);
        
function drawTable(array) {

	var data = new google.visualization.DataTable();

	data.addColumn('string', '');
	data.addColumn('string', '');
	data.addColumn('string', '');
	data.addRows(array);
	var table = new google.visualization.Table(document.getElementById('informationList'));
	table.draw(data, {
		page : 'disable',
	});
	google.visualization.events.addListener(table, 'select', function selectHandler(table) {
		var selection = table.getSelection();
	});
	return data;
}

$(function() {
	// swiss map personalization
	map = new jvm.WorldMap({
		map : 'ch_merc_en',
		container : $('#map'),
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

	function loadcouncil(councillers) {
		var textInfoCouncil = "-";
		var councilstring = "";
		if ($('#BR').attr("checked") == "checked") {
			$('.BR').css("color", "#f33f52");
			textInfoCouncil = "Conseil fédéral";
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "BR";
		}
		else{
			$('.BR').css("color", "black");
		}
		if ($('#CN').attr("checked") == "checked") {
			$('.CN').css("color", "#f33f52");
			if(textInfoCouncil == "-"){
				textInfoCouncil = "Conseil national";
			}
			else{
				textInfoCouncil = textInfoCouncil+", national";
			}
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "CN";
		}
		else{
			$('.CN').css("color", "black");
		}
		if ($('#CE').attr("checked") == "checked") {
			$('.CE').css("color", "#f33f52");
			if(textInfoCouncil == "-"){
				textInfoCouncil = "Conseil des états";
			}
			else{
				textInfoCouncil = textInfoCouncil+", des états";
			}
			if (councilstring.length != 0) {
				councilstring += " ";
			}
			councilstring += "CE";
		}
		else{
			$('.CE').css("color", "black");
		}
		if($('#CE').attr("checked") == "checked" && $('#CN').attr("checked") == "checked" && $('#BR').attr("checked") == "checked" ){
			textInfoCouncil = "Tous";
		}
		$(".councilInfo .value").text(textInfoCouncil);
		var selectcouncillers = null;
		selectcouncillers = councillers.councilfilter(councilstring).byCanton();
		drawTable(councillers.toArray());
		loadMap(selectcouncillers);
	}


	$("#check").button();
	$("#format").buttonset();
	$("#udclogo").load('../img/UDC_fr_pant_5f.svg');
	var council = new Council();
	var councillers = council.getCouncillers().datefilter();
	var countCanton = councillers.byCanton();
	var smallestDate = council.smallestDate();
	
		 
	council.loadAllParty();
	$(".chzn-select").chosen({no_results_text: "Aucun partie corespondant !",max_selected_options: 2});
	
	
	  
	loadcouncil(councillers);
	//loadMap(countCanton);

	$('#choice input').change(function() {
		map.series.regions[0].elements["CH-JU"].element.properties["d]"] = null//["fill"]="rgb(255,255,255)";
		loadcouncil(councillers);
	});
	

	 $(".chzn-select").chosen().change( function() {
			
		   var str = "-";
	  	   $(".result-selected").each(function () {
	  	  	 	var parti = $(this).text().split("-");
	  	  	 	if(str !="-"){
               		 str +=  ", " +parti[0] ;
                }
                else{
                	str = parti[0];
                }
           });
           $(".partyInfo .value").text(str);
           
	});
	
	jQuery("#Slider1").slider({ from:Number(smallestDate), to:2012 ,round:0,format:{format:"####", locale:"us"}, 
	                            scale: [Number(smallestDate), '|',1900, '|', 1930, '|',1960, '|', 1990,  '|', 2012], 
	                            limits: false, step: 1, dimension: '', skin: "plastic", 
	                            onstatechange: function( value ){
								   var val = value.split(";");
								   
								   if(val[0] == val[1]){
								   		$(".yearInfo .value").text(val[0]);
								   }
								   else{
								   		$(".yearInfo .value").text('De '+val[0]+' à '+val[1]);
								   }
								}});
								

								
	
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

