var editor;
KindEditor.ready(function(K) {
	editor = K.create('#text_content', {
		width : '530px',
		minWidth : '530px',
		resizeType : 1,
		allowPreviewEmoticons : false,
		allowImageUpload:true,
		allowImageRemote:false,
		items : [
			'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
			'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
			'insertunorderedlist', '|', 'emoticons', 'image', 'link'],
		uploadJson : '//www.1huiwang.com/json/uploadArticleImg',
		allowFileManager : false
	});
	
	//@用户，补全用户
	/*if(editor){
		var editBodyObj = $(editor.edit.iframe.get().contentWindow.document);
		editBodyObj.keyup(function(event){
			event = event || window.event;
			var keyCode = event.keyCode || event.which || event.charCode;
			var content = editor.text();
			var inputChar = content.charAt(content.length - 1);
			if(keyCode == 16 && inputChar == '@'){
				$(".autocomplete").removeClass("hidden");
			}else if(inputChar != '@'){
				$(".autocomplete").addClass("hidden").val("");
			}
		}).click(function(){
			$(".autocomplete").addClass("hidden").val("");
		});
	}*/
});

//@用户，补全用户
/*$(function() {
	
	var beginRealName = $(".autocomplete").val();
	
	$(".autocomplete").keyup(function(event){
		if(event.keyCode == 8 && beginRealName == ""){
			$(this).addClass("hidden");
			return;
		}
		
		beginRealName = $(this).val();
		if(beginRealName.length < 2){
			return;
		}
		
		$.getJSON( "//www.1huiwang.com/json/autocompleteuser", {beginRealName : beginRealName}, function(result){
			var datas = result.data;
			if(result.hasError || !datas){
				return;
			}
			
			var autocompleteDatas = [];
			for(var i in datas){
				var realName = datas[i].realName;
				var loginName = datas[i].loginName;

				var realNameItem = {};
				realNameItem.label = realName;
				realNameItem.value = "<a userid='tian' href='@" + loginName + "'>@" + realName + "</a>&nbsp;";
				var loginNameItem = {};
				loginNameItem.label = loginName;
				loginNameItem.value = "<a userid='tian' href='@" + loginName + "'>@" + loginName + "</a>&nbsp;";;
				
				autocompleteDatas.push(realNameItem);
				autocompleteDatas.push(loginNameItem);
			}
			
			$(".autocomplete").autocomplete({
				source: autocompleteDatas,
				select: function(event, ui) {
					var content = editor.html();
					var content = content.substring(0, content.length - 1);
					debugger;
					editor.html(content + ui.item.value);
					$(".autocomplete").addClass("hidden").val("");
					return false;
				}
			});
		});
	});
});*/