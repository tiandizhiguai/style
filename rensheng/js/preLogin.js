function checkLoginName(loginName){
	if(loginName == ""){
		$("#check_user").empty().append("请输入登陆名");
		return false;
	}
	
	$.post('//www.rensheng.com/json/loginNameExists',{'loginName': loginName},function(data){
		if(!data){
			$("#check_user").empty().append("该登陆名不存在");
			return false;
		}
	}, "json");
	
	return true;
}

function checkPassword(passwd){
	if(passwd == ""){
		$("#check_passwd").empty().append("请输入密码");
		return false;
	}
	return true;
}

$(function(){
	//验证用户名
	$("#loginName").blur(function(){
		checkLoginName($(this).val());
	}).click(function(){
	    $("#check_user").empty();
	});
	
	//验证密码
	$("#passwd").blur(function(){
		checkPassword($(this).val());
	}).click(function(){
	    $("#check_passwd").empty();
	});
	
	//登陆
    $("#pre_login_btn").click(function(){
	    if(checkLoginName($("#loginName").val()) && checkPassword($("#passwd").val())){
		    $(".pre_login_form").submit();
		}
	});
});