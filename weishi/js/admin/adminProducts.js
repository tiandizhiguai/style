var adminContxtFunc = function(url, productId){
    var $adminContxt = $(".admin_right");
	$adminContxt.empty();
    $.ajax({
	  url: url,
	  data: productId,
	  context: document.body
	}).done(function(data) {
	  $adminContxt.append(data);
	});
}

$(function(){
	$(".pre_edit_product_action").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preEditProduct", $(this).attr("productId"));
	});
	
	$(".pre_delete_product_action").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/preEditProduct", $(this).attr("productId"));
	});
	
	$(".admin_imgs").click(function(){
		adminContxtFunc("http://www.malasong.com/admin/adminImgs", $(this).attr("productId"));
	});
});