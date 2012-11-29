$(document).ready(function(){
	  var showPeople; 
	  var radioMapType;
	  
	  
	  if($(".switch").css("left") == "-1px"){
	  		showPeople=1;
	  		$(".texteBtShow").css("color","#b2daa1");
	  		$(".texteBtShow").text("On");
	 
	  }
	  else{
	  	   showPeople=0;
	  	   $(".texteBtShow").css("color","#daa7a1");
	  	   $(".texteBtShow").text("Off");
	  }
	
	   radioMapType = $(".radioMapType").attr("value");
	   $(".testMe").click(function() {
	  	 if($(".switch").css("left") == "-1px"){
	  		showPeople=0;
	  		$(".texteBtShow").css("color","#daa7a1");
	  		 $(".texteBtShow").text("Off");
	  }
	  else{
	  	   showPeople=1;
	  	   $(".texteBtShow").css("color","#b2daa1");
	  	  $(".texteBtShow").text("On");
	 
	  }
	  });
	  
	   $(".radioMapTypeOne").click(function() {
	  		 radioMapType = $(".radioMapTypeOne").attr("value");
	  });
	  	   $(".radioMapTypeTwo").click(function() {
	  		 radioMapType = $(".radioMapTypeTwo").attr("value");
	  });
	  	   $(".radioMapTypeThree").click(function() {
	  		 radioMapType = $(".radioMapTypeThree").attr("value");
	  });
});