$(document).ready(function() {

	$("#year").css("display", "none");
	$("#council").css("display", "none");
	$("#council").css("opacity", "0");
	$("#year").css("opacity", "0");

	var year = 0;
	var party = 1;
	var council = 0;
	var init = 0;
	
	var showFilter= "";
    var showedFilter = "party";
  
	$(".party").mouseout(function() {
		$(".party").css("color", "#f33f52");
	});
	$(".party").mouseover(function() {
		$(".party").css("color", "#f33f52");
	});
	
	$(".party").click(function() {

		if (party == 0) {
			$(".party").mouseout(function() {
				$(".party").css("color", "#f33f52");
			});
			$(".year").mouseover(function() {
				$(".year").css("color", "#f33f52");
			});
			$(".year").mouseout(function() {
				$(".year").css("color", "black");
			});
			$(".council").mouseover(function() {
				$(".council").css("color", "#f33f52");
			});
			$(".council").mouseout(function() {
				$(".council").css("color", "black");
			});
			$(".init").mouseover(function() {
				$(".init").css("color", "#f33f52");
			});
			$(".init").mouseout(function() {
				$(".init").css("color", "black");
			});
			$(".party").css("color", "#f33f52");
			$(".year").css("color", "black");
			$(".council").css("color", "black");
			$(".init").css("color", "black");
			year = 0;
			party = 1;
			council = 0;
			init = 0;
			showFilter = "party";
			changeFilter(showedFilter, showFilter);
			showedFilter = showFilter;
		}
	});

	$(".year").click(function() {

		if (year == 0) {
			$(".year").mouseout(function() {
				$(".year").css("color", "#f33f52");
			});
			$(".party").mouseover(function() {
				$(".party").css("color", "#f33f52");
			});
			$(".party").mouseout(function() {
				$(".party").css("color", "black");
			});
			$(".council").mouseover(function() {
				$(".council").css("color", "#f33f52");
			});
			$(".council").mouseout(function() {
				$(".council").css("color", "black");
			});
			$(".init").mouseover(function() {
				$(".init").css("color", "#f33f52");
			});
			$(".init").mouseout(function() {
				$(".init").css("color", "black");
			});
			$(".year").css("color", "#f33f52");
			$(".party").css("color", "black");
			$(".council").css("color", "black");
			$(".init").css("color", "black");
			year = 1;
			party = 0;
			council = 0;
			init = 0;
			showFilter = "year";
			changeFilter(showedFilter, showFilter);
			showedFilter = showFilter;
		}
	});

	$(".council").click(function() {

		if (council == 0) {
			$(".council").mouseout(function() {
				$(".council").css("color", "#f33f52");
			});
			$(".year").mouseover(function() {
				$(".year").css("color", "#f33f52");
			});
			$(".year").mouseout(function() {
				$(".year").css("color", "black");
			});
			$(".party").mouseover(function() {
				$(".party").css("color", "#f33f52");
			});
			$(".party").mouseout(function() {
				$(".party").css("color", "black");
			});
			$(".init").mouseover(function() {
				$(".init").css("color", "#f33f52");
			});
			$(".init").mouseout(function() {
				$(".init").css("color", "black");
			});
			$(".council").css("color", "#f33f52");
			$(".year").css("color", "black");
			$(".party").css("color", "black");
			$(".init").css("color", "black");
			year = 0;
			party = 0;
			council = 1;
			init = 0;
			showFilter = "council";
			changeFilter(showedFilter, showFilter);
			showedFilter = showFilter;
		}
	});
	



   $('span.init').confirm({
   	 msg:'Réinitaliser les filtres ?',
eventType:'click',
 timeout:4000,
  dialogShow:'fadeIn',
  dialogSpeed:'fast',
  buttons: {
  	
  	ok:'Confirmer',
    cancel:'Annuler',
    wrapper:'<button></button>',
    separator:''
  }  
});

	





});

function initFilter() {
	$('#CN').attr("checked", true);
	$('#BR').attr("checked", true);
	$('#CE').attr("checked", true);
	$('.CN').css("color", "#f33f52");
	$('.BR').css("color", "#f33f52");
	$('.CE').css("color", "#f33f52");
	$("#Slider1").slider("value","2000","2012");
    $("#Slider1").slider("value","2000","2012");	   
}


function changeFilter(showedFilter, showFilter) {

	if (showedFilter == "party") {
		showedFilter = showFilter;
		$('#party').animate({
			opacity : "0"
		}, 600, function() {
			$("#party").css("display", "none");
			if (showFilter == "year") {
				showFilterYear();
			} else if (showFilter == "council") {
				showFilterCouncil();
			} else if (showFilter == "init") {
				showFilterInit();
			}
		});
	} else if (showedFilter == "year") {
		showedFilter = showFilter;
		$('#year').animate({
			opacity : "0"
		}, 600, function() {
			$("#year").css("display", "none");
			if (showFilter == "party") {
				showFilterParty();
			} else if (showFilter == "council") {
				showFilterCouncil();
			} else if (showFilter == "init") {
				showFilterInit();
			}
		});
	} else if (showedFilter == "council") {
		showedFilter = showFilter;
		$('#council').animate({
			opacity : "0"
		}, 1000, function() {
			$("#council").css("display", "none");
			if (showFilter == "party") {
				showFilterParty();
			} else if (showFilter == "year") {
				showFilterYear();
			} else if (showFilter == "init") {
				showFilterInit();
			}
		});
	} else if (showedFilter == "init") {
		showedFilter = showFilter;
		$('#init').animate({
			opacity : "0"
		}, 1000, function() {
			$("#init").css("display", "none");
			if (showFilter == "party") {
				showFilterParty();
			} else if (showFilter == "year") {
				showFilterYear();
			} else if (showFilter == "counci") {
				showFilterCouncil();
			}
		});
	}
}

function showFilterYear() {
	$("#year").css("display", "");
	$('#year').animate({
		opacity : "1"
	}, 1000, function() {
	});
}

function showFilterCouncil() {
	$("#council").css("display", "");
	$('#council').animate({
		opacity : "1"
	}, 1000, function() {

	});
}

function showFilterParty() {
	$("#party").css("display", "");
	$('#party').animate({
		opacity : "1"
	}, 1000, function() {
	});
}

function showFilterInit() {

}