function checkFiles($value){
    if($value == ""){
	    return true;
	}
	var $reg = /.[jpg|bmp]$/;
	if(!$reg.test($value)){
		return false;
	}
	return true;
}

$(function(){
	$("#add_product_btn").click(function(){
	    var fileOk = "";
	    $(":input[name='files']").each(function(i,n){
		   if(!checkFiles(n.value)){
		      fileOk = "invalid";
			  return false;
		   }else if(n.value != ""){
		      fileOk = "notEmpty";
		   }
		});
		if(fileOk == "invalid" || fileOk == ""){
			$("#check_files").empty().append("请上传jpg或bmp格式的图片");
		}else{
		    $(".upload_img_form").submit();
		}
	});
});