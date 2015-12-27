function checkOldPassword(passwd){
	if(passwd == ""){
		$("#check_old_password").empty().append("请输入原始密码");
		return false;
	}else{
		$.getJSON(
			'//www.rensheng.com/json/checkPassword',
			{loginName: $(".loginName").val(), "passwd" : passwd},
			function(data){
				if(!data){
					$("#check_old_password").empty().append("密码不正确");
					return false;
				}
			}
		);
	}
	return true;
}

function checkNewPassword(passwd){
    if(passwd == ""){
		$("#check_passwd").empty().append("请输入新密码");
		return false;
	}
	return true;
}

function checkRePassword(passwd){
	if(passwd == ""){
		$("#check_re_password").empty().append("请输入确认密码");
		return false;
	}else if(passwd != $(".passwd").val()){
		$("#check_re_password").empty().append("两次密码不一致");
		return false;
	}
	return true;
}

$(function(){

    //验证旧密码
	$(".old_password").blur(function(){
	    checkOldPassword($(this).val());
	}).focus(function(){
	    $("#check_old_password").empty();
	});
	
	$(".passwd").blur(function(){
	    checkNewPassword($(this).val());
	}).focus(function(){
	    $("#check_passwd").empty();
	});
	
	//验证密码一致性
	$(".re_password").blur(function(){
	    checkRePassword($(this).val());
	}).focus(function(){
		$("#check_re_password").empty();
	});
	
	//提交
    $("#pre_edit_password_btn").click(function(){
	    if(checkOldPassword($(".old_password").val())
		    && checkNewPassword($(".passwd").val()) 
			&& checkRePassword($(".re_password").val())){
		    $(".pre_edit_password_form").submit();
		}
	});
});