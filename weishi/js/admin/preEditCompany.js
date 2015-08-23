function checkCompanyName($value){
    var $tipsObj = $("#check_name");
	if($value === ""){
		$tipsObj.empty().append("请输入公司名称");
		return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

function checkLegalPerson($value){
    var $tipsObj = $("#check_legal_persion");
	if($value === ""){
		$tipsObj.empty().append("请输入法人代表");
		return false;
	}
	if($value.length > 30){
		$tipsObj.empty().append("不能超过30个字符");
		return false;
	}
	return true;
}

function checkProvince($value){
	if($value == 0){
		$("#check_province").empty().append("请选择省份");
		return false;
	}
	return true;
}

function checkCity($value){
	if($value == 0){
		$("#check_province").empty().append("请选择城市");
		return false;
	}
	return true;
}

function checkDetailAddr($value){
    var $tipsObj = $("#check_detail_addr");
	if($value === ""){
		$tipsObj.empty().append("请输入详细地址");
		return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

function checkFiles($value){
	var $tipsObj = $("#check_files");
	if($value === ""){
	    return true;
	}
	var $reg = /.[jpg|bmp]$/;
	if(!$reg.test($value)){
		$tipsObj.empty().append("请上传jpg或bmp格式的图片");
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
	
	//验证公司名称
	$(".company_name").blur(function(){
	    checkCompanyName($(this).val());
	}).focus(function(){
	    $("#check_name").empty();
	});
	
	//验证法人代表
	$(".legal_persion").blur(function(){
	    checkLegalPerson($(this).val());
	}).focus(function(){
	    $("#check_legal_persion").empty();
	});
	
	//验证省份
	$(".province_id_select").blur(function(){
	    checkProvince($(this).val());
	}).focus(function(){
	    $("#check_province").empty();
	});
	
	//验证城市
	$(".city_id_select").blur(function(){
	    checkCity($(this).val());
	}).focus(function(){
	    $("#check_province").empty();
	});
	
	//验证详细地址
	$(".detail_addr").blur(function(){
	    checkDetailAddr($(this).val());
	}).focus(function(){
	    $("#check_detail_addr").empty();
	});
	
	//验证营业执照
	$(".files").blur(function(){
	    checkFiles($(this).val());
	}).focus(function(){
	    $("#check_files").empty();
	});
	
	$("#edit_company_btn").click(function(){
	    if(checkCompanyName($(".company_name").val())
		    && checkLegalPerson($(".legal_persion").val())
			&& checkProvince($(".province_id_select").val())
			&& checkCity($(".province_id_city").val())
			&& checkDetailAddr($(".detail_addr").val())
			&& checkFiles($(".files").val())){
		    $(".edit_company_form").submit();
	    }
	});
});