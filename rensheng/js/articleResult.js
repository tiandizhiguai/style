function initArticleStatisData(){
	$(".praise_article").each(function(){
		var statuses = "赞&nbsp;";
		var size = $(this).attr("praised_size");
		var loginUserId = $(".login_user_id");
		var articleId = $(this).attr("article_id");
		var praised = $(this).attr("praised");
		if(loginUserId != "" && praised != "" & praised == true){
			statuses="取消赞&nbsp;";
		}
		var priseContent = new StringBuilder();
		priseContent.append(statuses);
		if(size == null || size == 0){
			priseContent.append(0);
		}else{
			priseContent.append(size);
		}
		priseContent.append("人赞");
		$(".praise_show_" + articleId).empty().append(priseContent.toString());
	});
}

$(function(){
	
	//初始化文章数据
	initArticleStatisData();
	
	// 初始化轮播
	$("#myCarousel").carousel();
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   $("#submit_page_no").val($prePage);
		   $("#index_form").attr("action", "//www.rensheng.com/index").submit();
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
			$("#submit_page_no").val($nextPage);
			$("#index_form").attr("action", "//www.rensheng.com/index").submit();
		}
	});
	
	$(".praise_article").click(function(){
		var loginUserId = $(".login_user_id").val();
		if(loginUserId == ""){
			window.location.href="//www.rensheng.com/user/preLogin";
			return;
		}
		
		var params = {"userId" : loginUserId, "articleId" : $(this).attr("articleId")};
		$.getJSON("//www.rensheng.com/json/praiseArticle",params,function(result){
			var statuses = "赞&nbsp;";
			var size = 0;
			if(result.data != null && result.data.statisData != null){
				if(result.data.statisData.praiseSize != null){
					size = result.data.statisData.praiseSize;
				}
				
				if(result.data.statisData.praised){
					statuses="取消赞&nbsp;";
				}
			}
			$(".praise_show").empty().append(statuses + size + "人赞");
		});
	});
});