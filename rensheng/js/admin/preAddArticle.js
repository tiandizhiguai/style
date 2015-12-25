function checkTitle($value){
    var $tipsObj = $("#check_title");
	if($value === ""){
		$tipsObj.empty().append("请输入文章标题");
		return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

function checkContent($value){
    var $tipsObj = $("#check_content");
	if($value === ""){
		$tipsObj.empty().append("请输入文章内容");
		return false;
	}
	if($value.length < 100){
		$tipsObj.empty().append("不能少于100字");
		return false;
	}
	if($value.length > 5000){
		$tipsObj.empty().append("不能多于5000字");
		return false;
	}
	return true;
}

function initTopic(topicId){
	$.get("/json/getTopics",function(data){
		var options = new StringBuilder();
		for(var i = 0; i < data.length; i++){
			options.append("<option value='");
		    options.append(data[i].id);
		    options.append("'");
			if(topicId == data[i].id){
				options.append(" selected");
			}
		    options.append(">");
		    options.append(data[i].name);
		    options.append("</option>");
		}
	    $(".topic_id_select").empty().append(options.toString());
	},"json");
}

$(function(){
	
	//初始化话题
	var topicId = $("#topic_id").val();
	initTopic(topicId);
	
	$(".title").blur(function(){
	    checkTitle($(this).val());
	}).focus(function(){
	    $("#check_title").empty();
	});
	
	$(".content").blur(function(){
		checkContent($(this).val());
	}).focus(function(){
		$("#check_content").empty();
	});
	
	$("#pre_add_btn").click(function(){
	    if(checkTitle($(".title").val())
		    && checkContent($(".content").val())){
		    $(".add_form").submit();
	    }
	});
});