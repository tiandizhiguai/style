function checkEmail($emailValue){
    if($emailValue === ""){
	    return true;
	}
	var $emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	var $tipsObj = $("#check_email");
	if(!$emailReg.test($emailValue)){
		$tipsObj.empty().append("邮箱格式不正确");
		return false;
	}
	if($emailValue.length > 50){
		$tipsObj.empty().append("不能超过50个字符");
		return false;
	}
	return true;
}

function checkPhone($value){
	if($value === ""){
	    return true;
	}
	var $reg = /^0\d{2,3}-\d{7,8}(-\d{1,6})?$/;
	var $tipsObj = $("#check_phone");
	if(!$reg.test($value)){
		$tipsObj.empty().append("电话格式不正确");
		return false;
	}
	if($value.length > 20){
		$tipsObj.empty().append("不能超过20个字符");
		return false;
	}
	return true;
}

function checkMobilePhone($value){
	if($value === ""){
	    return true;
	}
	var $reg = /^1\d{10}$/;
	var $tipsObj = $("#check_mobile_phone");
	if(!$reg.test($value)){
		$tipsObj.empty().append("手机格式不正确");
		return false;
	}
	if($value.length > 15){
		$tipsObj.empty().append("不能超过15个字符");
		return false;
	}
	return true;
}

function checkQQ($value){
	if($value === ""){
	    return true;
	}
	var $reg = /[1-9][0-9]{4,}/;
	var $tipsObj = $("#check_qq");
	if(!$reg.test($value)){
		$tipsObj.empty().append("QQ格式不正确");
		return false;
	}
	if($value.length > 15){
		$tipsObj.empty().append("不能超过15个字符");
		return false;
	}
	return true;
}

function checkWeixin($value){
	if($value === ""){
	    return true;
	}
	var $reg = /^[a-zA-Z0-9_]+$/;
	var $tipsObj = $("#check_weixin");
	if(!$reg.test($value)){
		$tipsObj.empty().append("微信格式不正确");
		return false;
	}
	if($value.length > 50){
		$tipsObj.empty().append("不能超过50个字符");
		return false;
	}
	return true;
}

function checkOther($value){
	if($value === ""){
	    return true;
	}
	if($value.length > 100){
	    var $tipsObj = $("#check_other");
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

$(function(){
    //验证邮箱
	$(".email").blur(function(){
		checkEmail($(this).val());
	}).focus(function(){
	    $("#check_email").empty();
	});
	
	//验证电话
	$(".phone").blur(function(){
	    checkPhone($(this).val());
	}).focus(function(){
	    $("#check_phone").empty();
	});
	
	//验证手机
	$(".mobile_phone").blur(function(){
	    checkMobilePhone($(this).val());
	}).focus(function(){
	    $("#check_mobile_phone").empty();
	});
	
	//验证qq
	$(".qq").blur(function(){
	    checkQQ($(this).val());
	}).focus(function(){
	    $("#check_qq").empty();
	});
	
	//验证微信
	$(".weixin").blur(function(){
	    checkWeixin($(this).val());
	}).focus(function(){
	    $("#check_weixin").empty();
	});
	
	//验证其他
	$(".other").blur(function(){
	    checkOther($(this).val());
	}).focus(function(){
	    $("#check_other").empty();
	});
	
	//提交验证
	$("#edit_contact_btn").click(function(){
	    if(checkEmail($(".email").val()) 
			&& checkPhone($(".phone").val()) 
			&& checkMobilePhone($(".mobile_phone").val()) 
			&& checkQQ($(".qq").val()) 
			&& checkWeixin($(".weixin").val()) 
			&& checkOther($(".other").val())){  
	        $(".edit_contact_form").submit();
	    }
	});
	
});