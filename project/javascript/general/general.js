


$(document).ready(function(){
  var globalMenuActivate = 1;
  $(".btCover").click(function() {
  	if($('#footer').css("height") == "31px"){
  		$(".btCover").css("display","none");
	  	$(".btCover").css("margin-top","14px");
	  	$(".footerInner").css("display","none");
	  	$('#footer').animate({  height:"19px"},600, function() {
	     	$(".btCover").attr("onmouseover","tooltip.show('Montrer', 90);$('.btCover').css('background-image','url(\"../img/btshow_on.png\")');");
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
			    $(".btCover").attr("onmouseover","tooltip.show('Cacher', 90);$('.btCover').css('background-image','url(\"../img/btcover_on.png\")');");
			    $(".btCover").attr("onmouseout","tooltip.hide();$('.btCover').css('background-image','url(\"../img/btcover.png\")');");
			    $(".btCover").css("background-image","url('../img/btcover.png')");
			    $(".btCover").css("display","");
			    $(".footerInner").css("display","");
	  		});

  	}
  });
  
  $(".options").click(function() {
  	if($(".options").css("color") == "black"){
  		$(".options").css("color","#9d9d9d");
  		$(".filter").css("color","black");
  		$(".about").css("color","black");
  	}
  	else{
  		$(".options").css("color","black");
  	}
  	
  		openMore();
  });
    $(".filter").click(function() {
    	//alert($(".filter").css("color"));
    	if($(".filter").css("color") == "black"){
  			$(".filter").css("color","#9d9d9d");
  			$(".options").css("color","black");
  			$(".about").css("color","black");
	  	}
	  	else{
	  		$(".filter").css("color","black");
	  	}
  		openMore();
  });
  
    $(".about").click(function() {
    	if($(".about").css("color") == "black"){
  			$(".about").css("color","#9d9d9d");
  			$(".options").css("color","black");
  			$(".filter").css("color","black");
	  	}
	  	else{
	  		$(".about").css("color","black");
	  	}
  		openMore();
  });
  
    $(".btCover_header").click(function() {
  		$(".btCover_header").css("display","none");
	  	$(".btCover_header").css("margin-top","14px");
	  	$('#header').animate({  height:"46px"},600, function() {
	     	$(".btCover_header").attr("onmouseover","tooltip.show('Montrer', 90);$('.btCover_header').css('background-image','url(\"../img/btshow_on.png\")');");
	   		$(".btCover_header").attr("onmouseout","tooltip.hide();$('.btCover_header').css('background-image','url(\"../img/btshow.png\")');");
	   		$(".btCover_header").css("background-image","url('../img/btshow.png')");
	   	
	   		$(".innerBoder").css("max-height","-moz-calc(100% - 90px)");
	   		$(".innerBoder").css("height","-moz-calc(100% - 90px)");
	   		$(".innerBoder").css("max-height","-webkit-calc(100% - 90px)");
	   		$(".innerBoder").css("height","-webkit-calc(100% - 90px)");
	  });
  });
  $("#map").resizehandle();
});

function openMore(){

  		$(".btCover_header").css("background-image","");
	    $(".btCover_header").css("margin-top","0px");
        $(".innerBoder").css("max-height","-moz-calc(100% - 342px)");
	    $(".innerBoder").css("height","-moz-calc(100% - 342px)");
	    $(".innerBoder").css("max-height","-webkit-calc(100% - 342px)");
	    $(".innerBoder").css("height","-webkit-calc(100% - 342px)");		
	  	$('#header').animate({  height:"300px"},600, function() {
			 	$(".btCover_header").attr("onmouseover","tooltip.show('Cacher', 90);$('.btCover_header').css('background-image','url(\"../img/btshow_on.png\")');");
	   		$(".btCover_header").attr("onmouseout","tooltip.hide();$('.btCover_header').css('background-image','url(\"../img/btshow.png\")');");
	    $(".btCover_header").css("background-image","url('../img/btshow.png')");
			    $(".btCover_header").css("display","");
				
			   
});
};

jQuery.fn.resizehandle = function() {
  return this.each(function() {
    var me = jQuery(this);
    me.after(
       jQuery('<div class="resize"><div class="resizehandle"><div class="bt_resize" onmouseover="tooltip.show(\'Double clique \', 90);" onmouseout="tooltip.hide();"></div></div></div>')
      .bind('dblclick', function(e) {
        var h = me.width();
        var y = e.clientX+20;
         var hInfo = $("#information").width();
        var bigSize = e.clientX+h-y;
        var initScale = $(".jvectormap-container").children("svg").children("g").attr("transform");
        initScale = initScale.substring(6,11);
      
        var moveHandler = function(e) {
          me.width(Math.max(500,   e.clientX+h-y ));

          $("#information").width(Math.max(100,   hInfo+y-e.clientX ));
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