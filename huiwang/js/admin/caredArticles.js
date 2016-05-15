var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

$(function(){
	
	var $userId = $(".userId").val();
	
	//取消关注
	$(".cancel_cared_action").click(function(){
		if(confirm("确认取消关注？")){
		    var $articleId = $(this).attr("article_id");
		    adminContxtFunc("//www.1huiwang.com/article/careArticle?articleId="+$articleId + "&userId=" + $userId + "&cared=" + true);
		}
	});
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   adminContxtFunc("//www.1huiwang.com/article/caredArticles?pageSize=10&pageNo="+$prePage+"&userId="+$userId);
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    adminContxtFunc("//www.1huiwang.com/article/caredArticles?pageSize=10&pageNo="+$nextPage+"&userId="+$userId);
		}
	});
});