$(function() {
	// swiss map personalization
	$('#map').vectorMap({
		map : 'ch_merc_en',
		backgroundColor : 'white',
		regionStyle : {
			initial : {
				fill : 'lightblue'
			},
			hover : {
				fill:'black',
				"fill-opacity" : 0.8
			}
		}
	});
}); 