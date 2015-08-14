$(function(){

    //验证用户名
	$(".realName").blur(function(){
	    var $value = $(this).val();
		if($value == ""){
		    $("#check_name").append("请输入真实姓名");
		}
	}).click(function(){
	    $("#check_name").empty();
	});
	
	//验证身份证号
	$(".idNumber").blur(function(){
	    var $value = $(this).val();
		if($value == ""){
		    $("#check_idNumber").append("请输入身份证号");
		}
	}).click(function(){
	    $("#check_idNumber").empty();
	});
	
	//提交
    $("#pre_add_admin_btn").click(function(){
	    if($(".realName").val() != "" && $(".idNumber").val() != ""){
		    $(".pre_add_admin_form").submit();
		}
	});
});