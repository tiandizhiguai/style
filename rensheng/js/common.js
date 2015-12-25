function StringBuilder(args)    
{    
    this._strings = [];    
    this._isBuild=false;//是否创建
    this._string="";    //创建后的字符串
    for(var i=0;i<arguments.length ;i++){
        this._strings.push(arguments[0]);
    }    
}    

StringBuilder.prototype.append = function(str)    
{    
    this._strings.push(str);    
    this._isBuild=false ;
    return this;    
}

StringBuilder.prototype.toString = function()    
{   
    if(!this._isBuild){
        this._string=this._strings.join("");
    } 
    return this._string;
}    
   
//返回长度
StringBuilder.prototype.length = function()    
{    
    if(!this._isBuild){
        this._string=this._strings.join("");
    }
    return this._string.length;
}    
   
// 删除最后几个字符
StringBuilder.prototype.del = function(lastNum)    
{    
    var len = this.length();    
    var str = this.toString();
    this._string= str.slice(0,len-lastNum);
    this._strings = [];
    this._strings.push(this._string);
    this.isBuild=true ;
    return this ;
}

//获取省份
function getAllProvince(selectProvinceId){
	$.post('/json/getAllProvince',function(data){
	  if(data){
		  var context = new  StringBuilder();
		  for(var i = 0; i < data.length; i++){
			  context.append("<option value='");
			  context.append(data[i].id);
			  context.append("'");
			  if(selectProvinceId == data[i].id){
			      context.append(" selected");
			  }
			  context.append(">");
			  context.append(data[i].name);
			  context.append("</option>");
		  }
		  $(".province_id_select").append(context.toString());
	  }
	}, "json");
}

//获取城市
function getProvinceCity(provinceId){
	$.post('/json/getCities',{'provinceId': provinceId}, function(data){
	  if(data){
		  var $selectCityId = $(".city_id_value").val();
		  var context = new  StringBuilder();
		  for(var i = 0; i < data.length; i++){
			  context.append("<option value='");
			  context.append(data[i].id);
			  context.append("'");
			  if($selectCityId == data[i].id){
			      context.append(" selected");
			  }
			  context.append(">");
			  context.append(data[i].name);
			  context.append("</option>");
		  }
		  $(".city_id_select").empty().append(context.toString());
	  }
	}, "json");
}