var getProductCommnets = function(pageNoValue){
    var $productId = $("#product_id").val();
    $.get("http://www.malasong.com/productComment/getByProudctId",{pageSize:10, productId:$productId, pageNo: pageNoValue},function(data){
	    $("#product_comment").empty().append(data);
	});
}

$(function(){
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   getProductCommnets($prePage);
		}else{
		    $("#pre_page").class("disabled");
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    getProductCommnets($nextPage);
		}else{
		    $("#next_page").class("disabled");
		}
	});
});