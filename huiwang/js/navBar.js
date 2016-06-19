$(function(){
    $(".nav_bar_item a").on('click',function(){
        $(".nav_bar_item").each(function(){
			$(this).removeClass("bar_hover");
		});
		$(this).addClass("bar_hover");
	});
});