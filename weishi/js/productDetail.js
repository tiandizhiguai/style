var getProductCommnets = function(pageNoValue){
    var $productId = $("#product_id").val();
    $.get("http://www.malasong.com/productComment/getByProudctId",{pageSize:10, productId:$productId, pageNo: pageNoValue},function(data){
	    $("#product_comment").empty().append(data);
	});
}

$(function(){
    getProductCommnets(1);
});