function checkLoginName(loginName){
	if(loginName == ""){
		$("#check_user").empty().append("请输入登陆名");
		return false;
	}
	
	var reg = /^\w+$/;
	if(!reg.test(loginName)){
		$("#check_user").empty().append("只能包含字母、数字及下划线");
		return false;
	}
	
	if(loginName.length > 50){
		$("#check_user").empty().append("最多包含50个字符");
		return false;
	}
	
	$.post('//www.1huiwang.com/json/loginNameExists',{'loginName': loginName},function(data){
		if(data){
			$("#check_user").empty().append("该登陆名已经存在");
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

function checkRePassword(passwd){
	if(passwd == ""){
		$("#check_repasswd").empty().append("请输入重复密码");
		return false;
	}
	if(passwd != $("#passwd").val()){
		$("#check_repasswd").empty().append("两次密码不一致");
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
	
	//验证密码一致性
	$("#passwd").blur(function(){
		checkPassword($(this).val());
	}).click(function(){
	    $("#check_passwd").empty();
	});
	
	$("#rePasswd").blur(function(){
		checkRePassword($(this).val());
	}).click(function(){
		$("#check_repasswd").empty();
	});
	
	//提交注册
    $("#pre_register_btn").click(function(){
	    if(checkLoginName($("#loginName").val()) && checkPassword($("#passwd").val()) && checkRePassword($("#rePasswd").val())){
		    $(".pre_register_form").submit();
		}
	});
});