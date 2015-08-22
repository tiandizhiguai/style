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
	$.post('http://www.malasong.com/json/getAllProvince',function(data){
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
	$.post('http://www.malasong.com/json/getCityList',{'provinceId': provinceId}, function(data){
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

function checkCompanyName($value){
    var $tipsObj = $("#check_name");
	if($value === ""){
		$tipsObj.empty().append("请输入公司名称");
		return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

function checkLegalPerson($value){
    var $tipsObj = $("#check_legal_persion");
	if($value === ""){
		$tipsObj.empty().append("请输入法人代表");
		return false;
	}
	if($value.length > 30){
		$tipsObj.empty().append("不能超过30个字符");
		return false;
	}
	return true;
}

function checkProvince($value){
	if($value == 0){
		$("#check_province").empty().append("请选择省份");
		return false;
	}
	return true;
}

function checkCity($value){
	if($value == 0){
		$("#check_province").empty().append("请选择城市");
		return false;
	}
	return true;
}

function checkDetailAddr($value){
    var $tipsObj = $("#check_detail_addr");
	if($value === ""){
		$tipsObj.empty().append("请输入详细地址");
		return false;
	}
	if($value.length > 100){
		$tipsObj.empty().append("不能超过100个字符");
		return false;
	}
	return true;
}

$(function(){
    
	//初始化省份和城市
	var $selectProvinceId = $(".province_id_value").val();
	getAllProvince($selectProvinceId);
	getProvinceCity($selectProvinceId);
	
	//选择省份联动城市
	$(".province_id_select").change(function(){
	    getProvinceCity($(this).val());
	});
	
	//验证公司名称
	$(".company_name").blur(function(){
	    checkCompanyName($(this).val());
	}).focus(function(){
	    $("#check_name").empty();
	});
	
	//验证法人代表
	$(".legal_persion").blur(function(){
	    checkLegalPerson($(this).val());
	}).focus(function(){
	    $("#check_legal_persion").empty();
	});
	
	//验证省份
	$(".province_id_select").blur(function(){
	    checkProvince($(this).val());
	}).focus(function(){
	    $("#check_province").empty();
	});
	
	//验证城市
	$(".city_id_select").blur(function(){
	    checkCity($(this).val());
	}).focus(function(){
	    $("#check_province").empty();
	});
	
	//验证详细地址
	$(".detail_addr").blur(function(){
	    checkDetailAddr($(this).val());
	}).focus(function(){
	    $("#check_detail_addr").empty();
	});
	
	//验证营业执照
	/*$(".file").blur(function(){
	    if($(this).val() === ""){
		    $("#check_file").append("请上传营业执照");
		}
	}).focus(function(){
	    $("#check_file").empty();
	});*/
	
	$("#edit_company_btn").click(function(){
	    if(checkCompanyName($(".company_name").val())
		    && checkLegalPerson($(".legal_persion").val())
			&& checkProvince($(".province_id_select").val())
			&& checkCity($(".province_id_city").val())
			&& checkDetailAddr($(".detail_addr").val())){
		    $(".edit_company_form").submit();
	    }
	});
});


