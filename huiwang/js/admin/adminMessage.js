var adminContxtFunc = function(url){
    $.get(url,function(data){
	    $(".admin_right").empty().append(data);
	},"html");
}

$(function(){
	//修改
	$(".unread_message").click(function(){
	    var id = $(this).attr("id");
		$.getJSON(
			'//www.1huiwang.com/json/updateCommentMessage',
			{"id": id, "status" : "read"},
			function(data){
				if(data && !data.hasError){
					$("#message_" + id).removeClass("font_wight");
					$("#status_" + id).text("已读");
				}
			}
		);
	});
});