$(document).ready(function() {
	var showPeople;
	var radioMapType = 1;

	if ($(".switch").css("left") == "-1px") {
		showPeople = 1;
		$(".switch").css("background", "#b2daa1");
		$(".texteBtShow").css("color", "#b2daa1");
		$(".texteBtShow").text("On");

	} else {
		showPeople = 0;
		$(".switch").css("background", "#daa7a1");
		$(".texteBtShow").css("color", "#daa7a1");
		$(".texteBtShow").text("Off");
	}

	radioMapType = $(".radioMapType").attr("value");
	$(".testMe").click(function() {
		if ($(".switch").css("left") == "-1px") {
			showPeople = 0;
			$(".switch").css("background", "#daa7a1");
			$(".texteBtShow").css("color", "#daa7a1");
			$(".texteBtShow").text("Off");
		} else {
			showPeople = 1;
			$(".switch").css("background", "#b2daa1");
			$(".texteBtShow").css("color", "#b2daa1");
			$(".texteBtShow").text("On");

		}
	});
	if ($('.radioMapTypeOne').attr("checked") == "checked") {
		radioMapType = $(".radioMapTypeOne").attr("value");
		$('.prct').css("color", "#f33f52");
	} else {
		$('.prct').css("color", "black");
	}

	if ($('.radioMapTypeTwo').attr("checked") == "checked") {
		radioMapType = $(".radioMapTypeTwo").attr("value");
		$('.comp').css("color", "#f33f52");
	} else {
		$('.comp').css("color", "black");
	}

	if ($('.radioMapTypeThree').attr("checked") == "checked") {
		radioMapType = $(".radioMapTypeThree").attr("value");
		$('.pos').css("color", "#f33f52");
	} else {
		$('.pos').css("color", "black");
	}
	$(".radioMapTypeOne").click(function() {
		radioMapType = $(".radioMapTypeOne").attr("value");
		$('.prct').css("color", "#f33f52");
		$('.comp').css("color", "black");
		$('.pos').css("color", "black");
	});
	$(".radioMapTypeTwo").click(function() {
		radioMapType = $(".radioMapTypeTwo").attr("value");
		$('.comp').css("color", "#f33f52");
		$('.prct').css("color", "black");
		$('.pos').css("color", "black");
	});
	$(".radioMapTypeThree").click(function() {
		radioMapType = $(".radioMapTypeThree").attr("value");
		$('.pos').css("color", "#f33f52");
		$('.comp').css("color", "black");
		$('.prct').css("color", "black");
	});
}); 