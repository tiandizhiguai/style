$(function(){

    //验证用户名
	$("#loginName").blur(function(){
	    var $value = $(this).val();
		if($value == ""){
		    $("#check_user").append("请输入登陆名");
		}else{
		    $.post('http://www.malasong.com/json/getUser',{loginName: $value},function(data){
			  if(data.loginName.toLowerCase() == $value.toLowerCase()){
				  $("#check_user").append("该登陆名已经存在");
			  }
			}, "json");
		}
	}).click(function(){
	    $("#check_user").empty();
	});
	
	//验证密码一致性
	$("#passwd").blur(function(){
	    var $passwd = $(this).val();
		if($passwd == ""){
		    $("#check_passwd").empty();
		    $("#check_passwd").append("请输入密码");
		}
	}).click(function(){
	    $("#check_passwd").empty();
	});
	
	$("#rePasswd").blur(function(){
	    var $rePasswd = $(this).val();
		if($rePasswd == ""){
		    $("#check_repasswd").empty();
		    $("#check_repasswd").append("请输入重复密码");
		}else if($rePasswd != $("#passwd").val()){
		    $("#check_repasswd").empty();
		    $("#check_repasswd").append("两次密码不一致");
		}
	}).click(function(){
		$("#check_repasswd").empty();
	});
	
	//提交注册
    $("#pre_register_btn").click(function(){
	    if($("#loginName").val() != "" && $("#passwd").val() != "" && $("#rePasswd").val() != ""){
		    $(".pre_register_form").submit();
		}
	});
});