$(function(){
	//验证用户名
	$("#loginName").blur(function(){
	    var $value = $(this).val();
		if($value == ""){
		    $("#check_user").append("请输入登陆名");
		}else{
		    $.post('http://www.malasong.com/json/getUser',{loginName: $value},function(data){
			    if(data.loginName != $value)
			    $("#check_user").append("该登陆名不存在");
			}, "json");
		}
	}).click(function(){
	    $("#check_user").empty();
	});
	
	//验证密码
	$("#passwd").blur(function(){
	    var $passwd = $(this).val();
		if($passwd == ""){
		    $("#check_passwd").append("请输入密码");
		}
	}).click(function(){
	    $("#check_passwd").empty();
	});
	
	//提交注册
    $("#pre_login_btn").click(function(){
	    if($("#loginName").val() != "" && $("#passwd").val() != ""){
		    $(".pre_login_form").submit();
		}
	});
});