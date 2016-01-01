$(function(){
	// 初始化轮播
	$("#myCarousel").carousel();
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   $("#submit_page_no").val($prePage);
		   $("#index_form").attr("action", "//www.rensheng.com/index").submit();
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
			$("#submit_page_no").val($nextPage);
			$("#index_form").attr("action", "//www.rensheng.com/index").submit();
		}
	});
});