function checkName($value){
    var $tipsObj = $("#check_name");
	if($value === ""){
		$tipsObj.empty().append("请输入真实姓名");
		return false;
	}
	if($value.length > 30){
		$tipsObj.empty().append("不能超过30个字符");
		return false;
	}
	return true;
}

function checkIdNumber($value){
    var $tipsObj = $("#check_idNumber");
    if($value === ""){
	    $tipsObj.empty().append("请输入身份证");
	    return false;
	}
	var $reg = /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/;
	if(!$reg.test($value)){
		$tipsObj.empty().append("身份证格式不正确");
		return false;
	}
	if($value.length > 30){
		$tipsObj.empty().append("不能超过30个字符");
		return false;
	}
	return true;
}

$(function(){

    //初始化省份和城市
	var $selectProvinceId = $(".province_id_value").val();
	getAllProvince($selectProvinceId);
	getProvinceCity($selectProvinceId);
	
	//选择省份联动城市
	$(".province_id_select").change(function(){
	    getProvinceCity($(this).val());
	});

    //验证用户名
	$(".realName").blur(function(){
	    checkName($(this).val());
	}).click(function(){
	    $("#check_name").empty();
	});
	
	//验证身份证号
	$(".idNumber").blur(function(){
	     checkIdNumber($(this).val());
	}).click(function(){
	    $("#check_idNumber").empty();
	});
	
	//提交
    $("#pre_add_admin_btn").click(function(){
	    if(checkName($(".realName").val()) && checkIdNumber($(".idNumber").val())){
		    $(".pre_add_admin_form").submit();
		}
	});
});