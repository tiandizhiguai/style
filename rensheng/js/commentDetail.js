var getProductCommnets = function(pageNoValue){
    var $productId = $("#product_id").val();
    $.get("//www.rensheng.com/productComment/getComments",{pageSize:10, productId:$productId, pageNo: pageNoValue},function(data){
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

	$(".add_comment_btn").click(function(){
	    //只有登录的用户才能评论
	    var $loginUserId = $(".login_user_id").val();
		if(!$loginUserId || $!loginUserId === ""){
		    location.href = "//www.rensheng.com/user/preLogin";
			return;
		}
	
	    var $productId = $("#product_id").val();
		var $comment = $(".comment");
		if($comment.val() == ""){
		    $(".check_comment").empty().append("请输入内容");
		}else if($comment.val().length > 200){
		    $(".check_comment").empty().append("不能多于200字");
		}else {
		    $.post("//www.rensheng.com/productComment/addComment",{productId:$productId,userId:$loginUserId,comment:$comment.val()},function(data){
				$("#product_comment").empty().append(data);
				$(".check_comment").empty().append("评论成功");
			});
		}
	});
});