/*var editor;
KindEditor.ready(function(K) {
	K.each({
		'plug-align' : {
			name : '对齐方式',
			method : {
				'justifyleft' : '左对齐',
				'justifycenter' : '居中对齐',
				'justifyright' : '右对齐'
			}
		},
		'plug-order' : {
			name : '编号',
			method : {
				'insertorderedlist' : '数字编号',
				'insertunorderedlist' : '项目编号'
			}
		},
		'plug-indent' : {
			name : '缩进',
			method : {
				'indent' : '向右缩进',
				'outdent' : '向左缩进'
			}
		}
	},function( pluginName, pluginData ){
		var lang = {};
		lang[pluginName] = pluginData.name;
		KindEditor.lang( lang );
		KindEditor.plugin( pluginName, function(K) {
			var self = this;
			self.clickToolbar( pluginName, function() {
				var menu = self.createMenu({
						name : pluginName,
						width : pluginData.width || 100
					});
				K.each( pluginData.method, function( i, v ){
					menu.addItem({
						title : v,
						checked : false,
						iconClass : pluginName+'-'+i,
						click : function() {
							self.exec(i).hideMenu();
						}
					});
				})
			});
		});
	});
	editor = K.create('#text_content', {
		themeType : 'simple',
		items : [
			'bold','italic','underline','fontname','fontsize','forecolor','hilitecolor','plug-align','plug-order','plug-indent','link','image'
		],
		allowImageUpload:true,
		allowImageRemote:false
	});
});*/

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
});
