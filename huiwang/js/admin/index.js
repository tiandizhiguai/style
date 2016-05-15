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
		adminContxtFunc("/article/preAddArticle");
	});
	$(".left_nav_item:eq(1)").click(function(){
		adminContxtFunc("/article/adminArticles?pageNo=1&pageSize=10&userId="+$userId);
	});
	$(".left_nav_item:eq(2)").click(function(){
		adminContxtFunc("/article/caredArticles?pageNo=1&pageSize=10&userId="+$userId);
	});
	$(".left_nav_item:eq(5)").click(function(){
		adminContxtFunc("/admin/preUploadPhoto?id="+$userId);
	});
	$(".left_nav_item:eq(6)").click(function(){
		adminContxtFunc("/admin/preEditAdmin?userId="+$userId);
	});
	$(".left_nav_item:eq(7)").click(function(){
		adminContxtFunc("/admin/preEditPassword?userId="+$userId);
	});
});