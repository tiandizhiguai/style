function addComment(){
	$("#add_comment_btn").on("click", function(){
		var loginUserId = $(".login_user_id").val();
		var articleId = $("#article_id").val();
		if(!loginUserId || loginUserId == null || loginUserId == ""){
			window.location.href="//www.1huiwang.com/user/preLogin?redirectUri=/article/detail?id=" + articleId + "#footer";
			return;
		}
		
		//此处的editor对象在editor.js文件中定义
		var comment = editor.html();
		var params = {"articleId":articleId, "comment":comment, "userId" : loginUserId};
		$.post("//www.1huiwang.com/articleComment/addComment", params, function(data){
			$(".article_comment").empty().append(data);
			$(".check_comment").empty().append("评论成功");
		});
	});
}

$(function(){
	
	//添加评论
	addComment();
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	var $articleId  = $("#article_id").val();
	
	if($pageNo > 1){
		$("#pre_page").attr("href", "#article_comment");
	}
	if($pageNo < $totalPage){
		$("#next_page").attr("href", "#article_comment");
	}
	
	$("#pre_page").click(function(){
		var $prePage = $pageNo - 1;
		if($prePage > 0){
		   getCommnents($prePage);
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    getCommnents($nextPage);
		}
	});

});