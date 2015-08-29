var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

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
		adminContxtFunc("http://www.malasong.com/product/getAdminProducts?pageNo=1&pageSize=10&userId="+$userId);
	});
	$(".left_nav_item:eq(4)").click(function(){
		adminContxtFunc("http://www.malasong.com/product/preAddProduct?userId="+$userId);
	});
	$(".left_nav_item:eq(5)").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preEditPassword?userId="+$userId);
	});
});