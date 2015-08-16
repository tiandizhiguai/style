function StringBuilder(){
	this.init();
};
//初始化StringBuilder类
StringBuilder.prototype.init = function(){
	this.array = [];
};
//追加数据到StringBuilder类
StringBuilder.prototype.append = function(element){
	this.array.push(element);
};
//转换成String
StringBuilder.prototype.toString = function(){
	return this.array.join("");
};

$(function(){
	$("#edit_company_btn").click(function(){
		$(".edit_company_form").submit();
	});
	
	//获取省份和城市
	$(".provinceId").click(function(){
		$.post('http://www.malasong.com/json/getAllProvince',function(data){
		  if(data){
			  var context = new  StringBuilder();
			  for(var i = 0; i < data.length; i++){
			      context.append("<option value='");
				  context.append(data[i].provinceId);
				  context.append("'>");
				  context.append(data[i].provinceName);
				  context.append("</option>");
			  }
			  $(this).append(context.toString());
		  }
		}, "json");
	});
});


