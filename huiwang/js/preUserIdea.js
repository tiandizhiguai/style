function checkContent(content){
	if(content == ""){
		$("#check_cotent").empty().append("请输入反馈内容");
		return false;
	}
	
	if(content.length > 500){
		$("#check_cotent").empty().append("不能超过500字");
		return false;
	}
	
	return true;
}

$(function(){
	
	$("#content").blur(function(){
		checkContent($(this).val());
	}).click(function(){
	    $("#check_cotent").empty();
	});
	
    $("#user_idea_btn").click(function(){
	    if(checkContent($("#content").val())){
		    $.post('//www.1huiwang.com/json/addUserIdea',{'content': $("#content").val()},function(data){
				if(!data.hasError){
					$("#check_cotent").empty().append("感谢您的反馈，我们会尽快处理");
					$("#content").val("");
				}
			}, "json");
		}
	});
});