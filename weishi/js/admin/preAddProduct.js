function checkTitle($value){
    var $tipsObj = $("#check_title");
    if($value === ""){
	    $tipsObj.empty().append("请输入标题");
	    return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

function checkPrice($value){
    var $tipsObj = $("#check_price");
	if($value === ""){
	    $tipsObj.empty().append("请输入价格");
	    return false;
	}
	var $reg = /^[0-9]+(.[0-9]{1,4})?$/;
	if(!$reg.test($value)){
		$tipsObj.empty().append("价格格式不正确");
		return false;
	}
	return true;
}

function checkBeginQuantity($value){
	var $tipsObj = $("#check_begin_quantity");
	if($value === ""){
	    $tipsObj.empty().append("请输入起订量");
	    return false;
	}
	var $reg = /\d+$/;
	if(!$reg.test($value)){
		$tipsObj.empty().append("格式不正确");
		return false;
	}
	if($value > 900000000){
		$tipsObj.empty().append("数字太大");
		return false;
	}
	return true;
}

function checkUnit($value){
	var $tipsObj = $("#check_unit");
	if($value === ""){
	    $tipsObj.empty().append("请输入单位");
	    return false;
	}
	if($value.length > 10){
		$tipsObj.empty().append("单位过长");
		return false;
	}
	return true;
}

function checkDescription($value){
	var $tipsObj = $("#check_description");
	if($value === ""){
	    return true;
	}
	if($value.length > 500){
		$tipsObj.empty().append("描述不能大于500字");
		return false;
	}
	return true;
}

function checkFiles($value){
	var $tipsObj = $("#check_files");
	if($value === ""){
	    $tipsObj.empty().append("请上传主图");
	    return false;
	}
	var $reg = /.[jpg|bmp]$/;
	if(!$reg.test($value)){
		$tipsObj.empty().append("请上传jpg或bmp格式的图片");
		return false;
	}
	return true;
}

$(function(){
    //验证标题
	$(".title").blur(function(){
		checkTitle($(this).val());
	}).focus(function(){
	    $("#check_title").empty();
	});
	
	//验证价格
	$(".price").blur(function(){
	    checkPrice($(this).val());
	}).focus(function(){
	    $("#check_price").empty();
	});
	
	//验证单位
	$(".unit").blur(function(){
	    checkUnit($(this).val());
	}).focus(function(){
	    $("#check_unit").empty();
	});
	
	//验证起订量
	$(".begin_quantity").blur(function(){
	    checkBeginQuantity($(this).val());
	}).focus(function(){
	    $("#check_begin_quantity").empty();
	});
	
	//验证描述
	$(".description").blur(function(){
	    checkDescription($(this).val());
	}).focus(function(){
	    $("#check_description").empty();
	});
	
	//验证文件
	$(".files").blur(function(){
	    checkFiles($(this).val());
	}).focus(function(){
	    $("#check_files").empty();
	});
	
	//提交验证
	$("#add_product_btn").click(function(){
	    if(checkTitle($(".title").val()) 
			&& checkPrice($(".price").val()) 
			&& checkDescription($(".description").val()) 
			&& checkUnit($(".unit").val()) 
			&& checkBeginQuantity($(".begin_quantity").val()) 
			&& checkFiles($(".files").val())){
	        $(".add_product_form").submit();
	    }
	});
	
	$("#add_file_btn").click(function(){
	    
	});
});