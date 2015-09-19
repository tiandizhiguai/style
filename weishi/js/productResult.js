$(function(){
    $(".product_item").each(function(){
	    var thisObj = $(this);
	    thisObj.mouseover(function(){
		    thisObj.addClass("product_hover");
		});
		
		thisObj.mouseout(function(){
		    thisObj.removeClass("product_hover");
		});
	});
	
	var $pageNo = parseInt($(".page_no").val());
	var $totalPage = parseInt($(".total_page").val());
	
	$("#pre_page").click(function(){
		var $prePage = 1;
		if($pageNo > 1){
		   $prePage = $pageNo - 1;
		   $("#submit_page_no").val($prePage);
		   $("#index_form").attr("action", "http://www.malasong.com/index").submit();
		}else{
		    $("#pre_page").class("disabled");
		}
	});
	
	$("#next_page").click(function(){
		if($pageNo < $totalPage){
		    var $nextPage = $pageNo + 1;
			$("#submit_page_no").val($nextPage);
			$("#index_form").attr("action", "http://www.malasong.com/index").submit();
		}else{
		    $("#next_page").class("disabled");
		}
	});
});