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
	
	//评论数据
	$("[class^=comment_article]").each(function(){
		var size = $(this).attr("comment_size");
		if(size == null || size == 0){
			size = 0;
		}
		var statuses = size + "条评论";
		var articleId = $(this).attr("article_id");
		$(".comment_article_" + articleId).empty().append(statuses);
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

/*function getUrlRequest(){
	var url = location.search; //获取url中"?"符后的字串
	var paramArray = new Array();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var theRequest = new Object();
		if (str.indexOf("&") != -1) {
			strs = str.split("&");
			for (var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		} else {
			var key = str.substring(0,str.indexOf("="));
			var value = str.substr(str.indexOf("=")+1);
			theRequest[key] = decodeURI(value);
		}
	}
	paramArray.push(theRequest);
	return paramArray;
}*/

$(function(){
	
	//初始化文章数据
	initArticleStatisData();
	
	// 初始化轮播
	$("#myCarousel").carousel();
	
	//赞、关注
	paraiseAndCare();
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	var topicId = getQueryString("topicId");
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   $("#submit_page_no").val($prePage);
		   $(".hidden_param:first").attr("name","topicId").attr("value", topicId);
		   $("#index_form").attr("action", window.location.href).submit();
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
			$("#submit_page_no").val($nextPage);
			$(".hidden_param:first").attr("name","topicId").attr("value", topicId);
			$("#index_form").attr("action", window.location.href).submit();
		}
	});
	
	
});