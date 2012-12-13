


$(document).ready(function(){
	
		  		$(".moreInfo").css("display","none");
		  		$(".btCover_header").css("display","none");
  
  $("#helpParty").attr("onmouseover","tooltip.show('Aucun parti sélectionné = Tous les partis représentés sur la carte // Un parti sélectioné = Poucentage du parti // Deux partis sélectionés = Comparaison des partis', 400,'Long');");
  $("#helpParty").attr("onmouseout","tooltip.hide();");
  
  var globalMenuActivate = 0;
  var optionActivate = 0;
  var aboutActivate = 0;
  var filterMenuActivate = 0;
  var showMenu = "";
  var showedMenu = "filter";
  
  $(".btCover").click(function() {
  	if($('#footer').css("height") == "31px"){
  		$(".btCover").css("display","none");
	  	$(".btCover").css("margin-top","14px");
	  	$(".footerInner").css("display","none");
	  	$('#footer').animate({  height:"19px"},600, function() {
	     	$(".btCover").attr("onmouseover","tooltip.show('Montrer', 90,'');$('.btCover').css('background-image','url(\"../img/btshow_on.png\")');");
	   		$(".btCover").attr("onmouseout","tooltip.hide();$('.btCover').css('background-image','url(\"../img/btshow.png\")');");
	   		$(".btCover").css("background-image","url('../img/btshow.png')");
	   		$(".btCover").css("display","");
	  });
	
  	}
  	else{
  		$(".btCover").css("display","none");
  		$(".btCover").css("background-image","");
	    $(".btCover").css("margin-top","0px");
  		
	  	$('#footer').animate({  height:"31px"},600, function() {
			    $(".btCover").attr("onmouseover","tooltip.show('Cacher', 90,'');$('.btCover').css('background-image','url(\"../img/btcover_on.png\")');");
			    $(".btCover").attr("onmouseout","tooltip.hide();$('.btCover').css('background-image','url(\"../img/btcover.png\")');");
			    $(".btCover").css("background-image","url('../img/btcover.png')");
			    $(".btCover").css("display","");
			    $(".footerInner").css("display","");
	  		});

  	}
  });
  
  $(".options").click(function() {

     	if(optionActivate == 0){
     	    $(".options").mouseout(function() {
				 $(".options").css("color","#f33f52");
			 });
			 $(".filter").mouseover(function() {
				 $(".filter").css("color","#f33f52");
			 });
			 $(".filter").mouseout(function() {
				 $(".filter").css("color","black");
			 });
			 $(".about").mouseover(function() {
				 $(".about").css("color","#f33f52");
			 });
			 $(".about").mouseout(function() {
				 $(".about").css("color","black");
			 });
  			$(".about").css("color","black");
  			$(".options").css("color","#f33f52");
  			$(".filter").css("color","black"); 
  			aboutActivate = 0;
  			filterMenuActivate = 0;
  			optionActivate=1;
  			if(globalMenuActivate == 0){
  		  		openMore();		
  		  		globalMenuActivate =1;
  		  		  		  		if("options" == showedMenu) {showedMenu ="";}
  			}
  			showMenu = "options";
  			changeMenu(showedMenu,showMenu);
  			showedMenu = showMenu;
	  	}
	  	else{
	  		$(".options").css("color","black");
	  		$(".options").mouseover(function() {
				 $(".options").css("color","#f33f52");
			 });
			 $(".options").mouseout(function() {
				 $(".options").css("color","black");
			 });
	  		optionActivate = 0;
	  		globalMenuActivate =0;
			closeMore();
	  	}	
	  	
  });
    $(".filter").click(function() {
    	if(filterMenuActivate == 0){
    		$(".filter").mouseout(function() {
				 $(".filter").css("color","#f33f52");
			});
			$(".about").mouseover(function() {
				 $(".about").css("color","#f33f52");
			 });
			 $(".about").mouseout(function() {
				 $(".about").css("color","black");
			 });
			 $(".options").mouseover(function() {
				 $(".options").css("color","#f33f52");
			 });
			 $(".options").mouseout(function() {
				 $(".options").css("color","black");
			 });
  			$(".filter").css("color","#f33f52");
  			$(".options").css("color","black");
  			$(".about").css("color","black");
  			filterMenuActivate = 1;
  			aboutActivate = 0;
  			optionActivate=0;
  			if(globalMenuActivate == 0){
  		  		openMore();		
  		  		globalMenuActivate =1;
  		  		if("filter" == showedMenu) {showedMenu ="";}
  			}
  			showMenu = "filter";
  			changeMenu(showedMenu,showMenu);
  			showedMenu = showMenu;
	  	}
	  	else{
	  		$(".filter").css("color","black");
	  		$(".filter").mouseover(function() {
				 $(".filter").css("color","#f33f52");
			 });
			 $(".filter").mouseout(function() {
				 $(".filter").css("color","black");
			 });
	  		filterMenuActivate = 0;
	  		globalMenuActivate =0;
			closeMore();
	  	}	
  });
  		
    $(".about").click(function() {
    	
    	
     	if(aboutActivate == 0){
     	    $(".about").mouseout(function() {
				 $(".about").css("color","#f33f52");
			 });
			 $(".filter").mouseover(function() {
				 $(".filter").css("color","#f33f52");
			 });
			 $(".filter").mouseout(function() {
				 $(".filter").css("color","black");
			 });
			 $(".options").mouseover(function() {
				 $(".options").css("color","#f33f52");
			 });
			 $(".options").mouseout(function() {
				 $(".options").css("color","black");
			 });
  			$(".about").css("color","#f33f52");
  			$(".options").css("color","black");
  			$(".filter").css("color","black"); 
  			aboutActivate = 1;
  			filterMenuActivate = 0;
  			optionActivate=0;
  			if(globalMenuActivate == 0){
  		  		openMore();		
  		  		globalMenuActivate =1;
  		  		if("about" == showedMenu) {showedMenu ="";}
  			}
  			showMenu = "about";
  			changeMenu(showedMenu,showMenu);
  			showedMenu = showMenu;
	  	}
	  	else{
	  		$(".about").css("color","black");
	  		$(".about").mouseover(function() {
				 $(".about").css("color","#f33f52");
			 });
			 $(".about").mouseout(function() {
				 $(".about").css("color","black");
			 });
	  		aboutActivate = 0;
	  		globalMenuActivate =0;
			closeMore();
	  	}	
	  	
  });
  
  
    $(".btCover_header").click(function() {
    		globalMenuActivate =0;	
    		optionActivate = 0;
		    aboutActivate = 0;
  			filterMenuActivate = 0;
  			 $(".about").css("color","black");
  			$(".options").css("color","black");
  			$(".filter").css("color","black");
  			$(".about").mouseover(function() {
				 $(".about").css("color","#f33f52");
			 });
			 $(".about").mouseout(function() {
				 $(".about").css("color","black");
			 });
			 	 $(".filter").mouseover(function() {
				 $(".filter").css("color","#f33f52");
			 });
			 $(".filter").mouseout(function() {
				 $(".filter").css("color","black");
			 });
			 $(".options").mouseover(function() {
				 $(".options").css("color","#f33f52");
			 });
			 $(".options").mouseout(function() {
				 $(".options").css("color","black");
			 });
  			closeMore();
  });
});


function changeMenu(showedMenu,showMenu){

	if(showedMenu =="filter"){
		showedMenu = showMenu;
		$('.filterContent').animate({  opacity:"0"},600, function() {
		   $(".filterContent").css("display","none");
		   if(showMenu =="about"){ showAbout(); }
		   else if(showMenu =="options"){showOptions(); }
		});
	}
	else 	if(showedMenu =="options"){
		showedMenu = showMenu;
		$('.optionsContent').animate({  opacity:"0"},600, function() {
		   $(".optionsContent").css("display","none");
		   if(showMenu =="about"){ showAbout(); }
		   else if(showMenu =="filter"){showFilter(); }
		});
	}
	
   else 	if(showedMenu =="about"){
 	 	showedMenu = showMenu;
		$('.aboutContent').animate({  opacity:"0"},1000, function() {
	  		$(".aboutContent").css("display","none");
	  	   if(showMenu =="filter"){ showFilter(); }
		   else if(showMenu =="options"){showOptions(); }
		});
	}
	else{
		   if(showMenu =="filter"){ showFilter(); }
		   else if(showMenu =="options"){showOptions(); }
		   else if(showMenu =="about"){showAbout(); }
	}
}

function showFilter(){
	$(".filterContent").css("display","");
	$('.filterContent').animate({  opacity:"1"},1000, function() {
	});
}

function showOptions(){
	$(".optionsContent").css("display","");
	$('.optionsContent').animate({  opacity:"1"},1000, function() {
	 	 
	});
}

function showAbout(){
	$(".aboutContent").css("display","");
	$('.aboutContent').animate({  opacity:"1"},1000, function() {	 	 
	});
}



function closeMore(){	
		$(".content").animate({  marginTop:"46px"},500);		
  		$(".moreInfo").css("display","none");
  		$(".btCover_header").css("display","none");
	  	$('#header').animate({  height:"46px"},600, function() {
	   		$(".innerBoder").css("max-height","-moz-calc(100% - 90px)");
	   		$(".innerBoder").css("height","-moz-calc(100% - 90px)");
	   		$(".innerBoder").css("max-height","-webkit-calc(100% - 90px)");
	   		$(".innerBoder").css("height","-webkit-calc(100% - 90px)");
	  });
};

function openMore(){

 			$(".content").animate({  marginTop:"300px"},500);		
  		$("._header").css("background-image","");
        $(".innerBoder").css("max-height","-moz-calc(100% - 342px)");
	    $(".innerBoder").css("height","-moz-calc(100% - 342px)");
	    $(".innerBoder").css("max-height","-webkit-calc(100% - 342px)");
	    $(".innerBoder").css("height","-webkit-calc(100% - 342px)");		
	  	$('#header').animate({  height:"300px"},600, function() {
		 	$(".btCover_header").attr("onmouseover","tooltip.show('Cacher', 90,'');$('.btCover_header').css('background-image','url(\"../img/btshow_on.png\")');");
	   		$(".btCover_header").attr("onmouseout","tooltip.hide();$('.btCover_header').css('background-image','url(\"../img/btshow.png\")');");
	        $(".btCover_header").css("background-image","url('../img/btshow.png')");
		    $(".btCover_header").css("display","");
			$(".moreInfo").css("display","");		     
			   
});
};

jQuery.fn.resizehandle = function() {
  return this.each(function() {
    var me = jQuery(this);
    me.after(
       jQuery('<div class="resize"><div class="resizehandle"><div class="bt_resize" onmouseover="tooltip.show(\'Double clique \', 90,\'\');" onmouseout="tooltip.hide();"></div></div></div>')
      .bind('dblclick', function(e) {
        var h = me.width();
        var y = e.clientX+20;
         var hInfo = $("#information").width();
        var bigSize = e.clientX+h-y;
        var initScale = $(".jvectormap-container").children("svg").children("g").attr("transform");
        initScale = initScale.substring(6,11);
      
        var moveHandler = function(e) {
          me.width(Math.max(500,   e.clientX+h-y ));

          $("#information").width(Math.max(100,   hInfo+y-e.clientX));
          $(".jvectormap-container").children("svg").width(Math.max(20,   e.clientX+h-y));
          var a = $(".jvectormap-container").children("svg").children("g").attr("transform");
          var b = a;
		  a = a.substring(6,a.search("tran")-2);
		  var newValue =  ((e.clientX+h-(y+40))/bigSize)*initScale;
		  var b=b.replace(a,newValue); 
		   $(".jvectormap-container").children("svg").children("g").attr("transform",b);
      	  
        };
        var upHandler = function(e) {
          jQuery('html')
          .unbind('mouseup',upHandler)
          .unbind('mousemove', moveHandler);
         
          var percentWMap = ((me.width()/$(".content").width())*100);
          var percentWInfo = (($("#information").width()/$(".content").width()))*100;
           me.width(percentWMap+"%");
           	$("#information").width(percentWInfo+"%");
        };
         jQuery('html').bind('mouseup',upHandler);
         jQuery('html').bind('mousemove', moveHandler);
        
       
      })
    );
  });
}