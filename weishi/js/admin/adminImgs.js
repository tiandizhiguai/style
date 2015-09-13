var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

$(function(){
	
	//删除
	$(".pre_delete_img_action").click(function(){
		if(confirm("确认删除？")){
		    var $id = $(this).attr("imgId");
			var $name = $(this).attr("imgName");
		    adminContxtFunc("http://www.malasong.com/img/deleteImg?id="+$id+"&name="+$name);
		}
	});
	
	var $toId = $(".to_id").val();
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   adminContxtFunc("http://www.malasong.com/img/adminImgs?types=secondary&pageSize=10&pageNo="+$prePage+"&toId="+$toId);
		}else{
		    $("#pre_page").class("disabled");
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    adminContxtFunc("http://www.malasong.com/img/adminImgs?types=secondary&pageSize=10&pageNo="+$nextPage+"&toId="+$toId);
		}else{
		    $("#next_page").class("disabled");
		}
	});
});