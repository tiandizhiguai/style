var getProductCommnets = function(pageNoValue){
    var $productId = $("#product_id").val();
    $.get("http://www.malasong.com/productComment/getComments",{pageSize:10, productId:$productId, pageNo: pageNoValue},function(data){
	    $("#product_comment").empty().append(data);
	});
}

var getContact = function(){
    var $companyId = $("#company_id").val();
    $.get("http://www.malasong.com/contact/getContact",{companyId:$companyId},function(data){
	    $("#product_contact").empty().append(data);
	});
}

$(function(){
    getProductCommnets(1);
	getContact();
});