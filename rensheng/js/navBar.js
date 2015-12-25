$(function(){
    $(".nav_bar_item").each(function(){
	    var thisObj = $(this);
	    thisObj.mouseover(function(){
		    thisObj.addClass("bar_hover");
		});
		
		thisObj.mouseout(function(){
		    thisObj.removeClass("bar_hover");
		});
	});
});