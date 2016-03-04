function initArticleStatisData(){
	
	//赞数据
	$(".praise_article").each(function(){
		var statuses = "赞&nbsp;";
		var size = $(this).attr("praised_size");
		var loginUserId = $(".login_user_id").val();
		var articleId = $(this).attr("article_id");
		var praised = $(this).attr("praised");
		if(loginUserId != "" && praised != "" & praised == "true"){
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
	
	//关注数据
	$("[class^=care_article]").each(function(){
		var statuses = "<strong>+</strong>添加关注";
		var size = $(this).attr("praised_size");
		var loginUserId = $(".login_user_id").val();
		var articleId = $(this).attr("article_id");
		var cared = $(this).attr("cared");
		if(loginUserId != "" && cared != "" & cared == "true"){
			statuses="取消关注";
		}
		$(".care_article_" + articleId).empty().append(statuses);
	});
}

function paraiseAndCare(){
	$(".praise_article").click(function(){
		
		//先登录，才能赞
		var loginUserId = $(".login_user_id").val();
		if(loginUserId == ""){
			window.location.href="//www.1huiwang.com/user/preLogin";
			return;
		}
		
		var praiseObj = $(this);
		var praised = praiseObj.attr("praised");
		var articleId = praiseObj.attr("article_id");
		var params = {"userId" : loginUserId, "articleId" : articleId, "praised" : praised};
		$.getJSON("//www.1huiwang.com/json/praiseArticle",params,function(result){
			var statuses = "";
			var size = 0;
			if(result.data != null){
				size = result.data;
				if(praised == "true"){
					statuses="赞&nbsp;";
					praiseObj.attr("praised", "false");
				}else{
					statuses="取消赞&nbsp;";
					praiseObj.attr("praised", "true");
				}
				$(".praise_show_" + articleId).empty().append(statuses + size + "人赞");
			}
		});
	});
	
	$("[class^=care_article]").click(function(){
		var praiseObj = $(this);
		
		//先登录，才能关注
		var loginUserId = $(".login_user_id").val();
		if(loginUserId == ""){
			window.location.href="//www.1huiwang.com/user/preLogin";
			return;
		}
		
		var cared = praiseObj.attr("cared");
		var articleId = praiseObj.attr("article_id");
		var params = {"userId" : loginUserId, "articleId" : articleId, "cared" : cared};
		$.getJSON("//www.1huiwang.com/json/careArticle",params,function(result){
			var statuses = "";
			if(result.data != null){
				if(cared == "true"){
					statuses="<strong>+</strong>添加关注";
					praiseObj.attr("cared", "false");
				}else{
					statuses="取消关注";
					praiseObj.attr("cared", "true");
				}
				$(".care_article_" + articleId).empty().append(statuses);
			}
		});
	});
}

var getCommnents = function(pageNoValue){
	var articleIdValue = $("#article_id").val();
    $.get("//www.1huiwang.com/articleComment/getComments",{pageSize:10, articleId:articleIdValue, pageNo: pageNoValue},function(data){
	    $(".article_comment").empty().append(data);
	});
}

$(function(){
	
	//初始化文章数据
	initArticleStatisData();
	
	// 初始化轮播
	$("#myCarousel").carousel();
	
	//赞、关注
	paraiseAndCare();
	
	//加载评论
	getCommnents(1);
});