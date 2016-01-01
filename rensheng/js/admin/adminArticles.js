var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

$(function(){
	//修改
	$(".pre_edit_action").click(function(){
	    var $id = $(this).attr("id");
		adminContxtFunc("//www.rensheng.com/article/preAddArticle?id="+$id);
	});
	
	//删除
	$(".pre_delete_action").click(function(){
		if(confirm("确认删除？")){
		    var $id = $(this).attr("id");
		    adminContxtFunc("//www.rensheng.com/article/delete?id="+$id);
		}
	});
	
	var $userId = $(".userId").val();
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   adminContxtFunc("//www.rensheng.com/article/adminArticles?pageSize=10&pageNo="+$prePage+"&userId="+$userId);
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
		    adminContxtFunc("//www.rensheng.com/article/adminArticles?pageSize=10&pageNo="+$nextPage+"&userId="+$userId);
		}
	});
});