$(function(){
    $(".left_nav_item").each(function(){
	    var $thisObj = $(this);
	    $thisObj.click(function(){
		    $thisObj.addClass('left_nav_click').siblings().removeClass('left_nav_click');
		});
	});
	
	var $userId = $(".userId").val();
	$(".left_nav_item:eq(0)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preAddAdmin?userId="+$userId);
	});
	$(".left_nav_item:eq(1)").click(function(){
		adminContxtFunc("http://www.malasong.com/company/preEditCompany?userId="+$userId);
	});
	$(".left_nav_item:eq(2)").click(function(){
		adminContxtFunc("http://www.malasong.com/contact/preEditContact?userId="+$userId);
	});
	$(".left_nav_item:eq(3)").click(function(){
		adminContxtFunc("http://www.malasong.com/product/getProducts?userId="+$userId);
	});
	$(".left_nav_item:eq(4)").click(function(){
		adminContxtFunc("http://www.malasong.com/product/preAddProduct?userId="+$userId);
	});
});

var adminContxtFunc = function(url){
    var $adminContxt = $(".admin_right");
	$adminContxt.empty();
    $.get(url,function(data){
	    $adminContxt.append(data);
	},"html");
}