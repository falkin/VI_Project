
      
$(document).ready(function (){
	
      
		$("#informationList").mCustomScrollbar({
		  set_width:"100%", 
		  set_height:500, 
		  horizontalScroll:false, 
		  scrollInertia:550, 
		  scrollEasing:"easeOutCirc", 
		  mouseWheel:"auto", 
		  autoDraggerLength:true, 
		  scrollButtons:{ 
		    enable:true, 
		    scrollType:"continuous", 
		    scrollSpeed:20, 
		    scrollAmount:40 
		  },
		  advanced:{
		  	updateOnContentResize: true,
		    updateOnBrowserResize:true, 
		    autoExpandHorizontalScroll:false, 
		    autoScrollOnFocus:true,
		
		  },
		  callbacks:{
		    onScrollStart:function(){}, 
		    onScroll:function(){}, 
		    onTotalScroll:function(){}, 
		    onTotalScrollBack:function(){}, 
		    onTotalScrollOffset:0, 
		    whileScrolling:false, 
		    whileScrollingInterval:30 
		  }
		});
				
	 $('.mCSB_container').attr("id","tableListPeople");		
	 

});	
