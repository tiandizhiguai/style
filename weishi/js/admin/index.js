$(function(){
    $(".left_nav_item").each(function(){
	    var $thisObj = $(this);
	    $thisObj.click(function(){
		    $thisObj.addClass('left_nav_click').siblings().removeClass('left_nav_click');
		});
	});
	
	$(".left_nav_item:eq(0)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preAddAdmin");
	});
	$(".left_nav_item:eq(1)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preEditCompany");
	});
	$(".left_nav_item:eq(2)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preEditContact");
	});
	$(".left_nav_item:eq(3)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/adminProducts");
	});
	$(".left_nav_item:eq(4)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preAddProduct");
	});
});

var adminContxtFunc = function(url){
    var $adminContxt = $(".admin_right");
	$adminContxt.empty();
    $.ajax({
	  url: url,
	  data: {userId: $(".userId").val()},
	  context: document.body
	}).done(function(data) {
	  $adminContxt.append(data);
	});
}