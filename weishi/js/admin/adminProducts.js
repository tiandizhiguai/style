var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

$(function(){
	//修改
	$(".pre_edit_product_action").click(function(){
	    var $productId = $(this).attr("productId");
		adminContxtFunc("http://www.malasong.com/product/preEditProduct?id="+$productId);
	});
	
	//删除
	$(".pre_delete_product_action").click(function(){
		if(confirm("确认删除？")){
		    var $productId = $(this).attr("productId");
		    adminContxtFunc("http://www.malasong.com/product/deleteProduct?id="+$productId);
		}
	});
	
	//图片管理
	$(".admin_imgs").click(function(){
	    var $productId = $(this).attr("productId");
		adminContxtFunc("http://www.malasong.com/product/adminImgs?id="+$productId);
	});
	
	var $userId = $(".userId").val();
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   adminContxtFunc("http://www.malasong.com/product/getAdminProducts?pageSize=10&pageNo="+$prePage+"&userId="+$userId);
		}else{
		    $("#pre_page").class("disabled");
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    adminContxtFunc("http://www.malasong.com/product/getAdminProducts?pageSize=10&pageNo="+$nextPage+"&userId="+$userId);
		}else{
		    $("#next_page").class("disabled");
		}
	});
});