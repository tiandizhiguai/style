$(function(){
    $(".product_item").each(function(){
	    var thisObj = $(this);
	    thisObj.mouseover(function(){
		    thisObj.addClass("product_hover");
		});
		
		thisObj.mouseout(function(){
		    thisObj.removeClass("product_hover");
		});
	});
});