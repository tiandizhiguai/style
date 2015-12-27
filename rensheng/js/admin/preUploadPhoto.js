function checkFiles($value){
	$("#check_files").empty();
    if($value == ""){
		$("#check_files").append("请上传jpg、jpeg、gif、png格式的图片");
	    return false;
	}
	var $reg = /.[jpg|jpeg|gif|png]$/;
	if(!$reg.test($value)){
		$("#check_files").append("请上传jpg、jpeg、gif、png格式的图片");
		return false;
	}
	return true;
}

$(function(){
	$(".files").on("change", function(){
		var name = $(this).val();
		checkFiles(name);
	});
	
	$("#pre_upload_btn").click(function(){
	    if(checkFiles($(".files").val())){
			$(".upload_form").submit();
		}
	});
});