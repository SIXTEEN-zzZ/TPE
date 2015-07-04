var _SelectCity={};
var _Car={};
var _car1={};
var _car2={};
var _car3={};
var _car4={};
function getcityinfo1(c_id)
{
	var regx = new RegExp("\\|("+c_id+"),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*)\\|","g");
	var matched = regx.exec(_citylist);
	if(matched){
		var obj={};
		obj.c_id=matched[1];
		obj.c_name=matched[2];
		obj.id_360=matched[3];
		obj.id_csy=matched[4];
		obj.jh_city_code=matched[5];
		obj.province_id_csy=matched[6];
		obj.c_pcode=matched[7];
		obj.p_name=matched[8];
		obj.p_short_name=matched[9];
		obj.c_short_name=matched[10];
		obj.engineno=matched[11];
		obj.classno=matched[12];
		obj.registno=matched[13];
		obj.engineno_text=obj.engineno==0?'':obj.engineno==-1?'请输入完整的发动机号码':"请输入发动机号码后"+obj.engineno+"位";
		obj.classno_text=obj.classno==0?'':obj.classno==-1?'请输入完整的车架号码':"请输入车架号码后"+obj.classno+"位";
		return obj;
	}else
	{
		return null;
	}

}
function getcityinfo2(c_name)
{
	var regx = new RegExp("\\|([^,]*),("+c_name+"),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*)\\|","g");
	var matched = regx.exec(_citylist);
	if(matched){
		var obj={};
		obj.c_id=matched[1];
		obj.c_name=matched[2];
		obj.id_360=matched[3];
		obj.id_csy=matched[4];
		obj.jh_city_code=matched[5];
		obj.province_id_csy=matched[6];
		obj.c_pcode=matched[7];
		obj.p_name=matched[8];
		obj.p_short_name=matched[9];
		obj.c_short_name=matched[10];
		obj.engineno=matched[11];
		obj.classno=matched[12];
		obj.registno=matched[13];
		obj.engineno_text=obj.engineno==0?'':obj.engineno==-1?'请输入完整的发动机号码':"请输入发动机号码后"+obj.engineno+"位";
		obj.classno_text=obj.classno==0?'':obj.classno==-1?'请输入完整的车架号码':"请输入车架号码后"+obj.classno+"位";
		return obj;
	}else
	{
		return null;
	}

}
function getCityList(p_name)
{
	//var regx = new RegExp("\\|([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),([^,]+),("+p_name+"),([^,]+),([^,]+),([^,]+),([^,]+),([^,^\\|]+)","g");
	var regx = new RegExp("\\|([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),([^,]*),("+p_name+"),([^,]*),([^,]*),([^,]*),([^,]*),([^,^\\|]*)","g");
	var matched = _citylist.match(regx);
	var i=0;
	var objarr=new Array();
	for(i=0;i<matched.length;i++)
	{
		var obj={};
		var temp=matched[i].replace("|","");
		var templist=temp.split(",");
		obj.c_id=templist[0];
		obj.c_name=templist[1];
		obj.id_360=templist[2];
		obj.id_csy=templist[3];
		obj.jh_city_code=templist[4];
		obj.province_id_csy=templist[5];
		obj.c_pcode=templist[6];
		obj.p_name=templist[7];
		obj.p_short_name=templist[8];
		obj.c_short_name=templist[9];
		obj.engineno=templist[10];
		obj.classno=templist[11];
		obj.registno=templist[12];
		objarr[i]=obj;
	}
	return objarr;
}
function getCity(p_name)
{
	document.getElementById("selCity").disabled='';
	var i,j,k;
	//清空 城市 下拉选单
	document.all.selCity.length = 0 ;
	var citys=getCityList(p_name);
	for (i = 0;i <citys.length;i++)
	{
		document.all.selCity.options[document.all.selCity.length] = new Option(citys[i].c_name,citys[i].c_id);
	}
	//document.all.selCity.options[0].selected=true; 
	//updateAll();
}
function updatecityi(c_id)
{
	var info=getcityinfo1(c_id);
	_SelectCity=info==null?_SelectCity:info;
	if(document.getElementById("my_cphm").value==''||document.getElementById("my_cphm").value=='车牌号码后5位')
	{
		document.getElementById("selCity").value=_SelectCity.c_id;
		document.getElementById("my_jc_select1").value=_SelectCity.p_short_name;
		document.getElementById("my_jc_select2").value=_SelectCity.c_short_name;
	}
	updateParam();
}
function updatecityn(c_name)
{
	var info=getcityinfo2(c_name);
	_SelectCity=info==null?_SelectCity:info;
	if(document.getElementById("my_cphm").value==''||document.getElementById("my_cphm").value=='车牌号码后5位')
	{
		document.getElementById("selCity").value=_SelectCity.c_id;
		document.getElementById("my_jc_select1").value=_SelectCity.p_short_name;
		document.getElementById("my_jc_select2").value=_SelectCity.c_short_name;
	}
	updateParam();
}
function setSelProvince(p_name)
{
	var SelectProvince=document.getElementById("selProvince");
	jsSelectItemByValue(SelectProvince,p_name);
	getCity(p_name);
	updateAll();
}
// 设置select中text="paraText"的第一个Item为选中        
function jsSelectItemByValue(objSelect, objItemText) {            
    //判断是否存在        
    var isExit = false;
    for (var i = 0; i < objSelect.options.length; i++) {        
        if (objSelect.options[i].text == objItemText) {        
            objSelect.options[i].selected = true;        
            isExit = true;        
            break;        
        }        
    }      
}
function updateAll()
{
	var c_id=document.getElementById("selCity").value;
	updatecityi(c_id);
	//updateParam();
}
function updateParam()
{
	if(_SelectCity.engineno==-1)
	{
		if(document.getElementById("my_fdjh").value.length!=_SelectCity.engineno)
		document.getElementById("fadongjitr").style.visibility= "visible";
		document.getElementById("my_fdjh").value=document.getElementById("my_fdjh").value.length!=_SelectCity.engineno?'请输入完整的发动机号码':document.getElementById("my_fdjh").value;
		if(document.getElementById("my_fdjh").value.length!=_SelectCity.engineno)
		{document.getElementById("my_fdjh").style.color='#CCCCCC';}
		else
		{document.getElementById("my_fdjh").style.color='#000000';}
	}
	else if(_SelectCity.engineno>0)
	{
		document.getElementById("fadongjitr").style.visibility= "visible";
		document.getElementById("my_fdjh").value=document.getElementById("my_fdjh").value.length!=_SelectCity.engineno?"请输入发动机号码后"+_SelectCity.engineno+"位":document.getElementById("my_fdjh").value;
		if(document.getElementById("my_fdjh").value.length!=_SelectCity.engineno)
		{document.getElementById("my_fdjh").style.color='#CCCCCC';}
		else
		{document.getElementById("my_fdjh").style.color='#000000';}
	}else
	{
		document.getElementById("fadongjitr").style.visibility= "hidden";
	}
	if(_SelectCity.classno==-1)
	{
		document.getElementById("chejiatr").style.visibility="visible";
		document.getElementById("my_cjhm").value=document.getElementById("my_cjhm").value.length!=_SelectCity.classno?'请输入完整车架号码':document.getElementById("my_cjhm").value;
		if(document.getElementById("my_cjhm").value.length!=_SelectCity.classno)
		{document.getElementById("my_cjhm").style.color='#CCCCCC';}
		else
		{document.getElementById("my_cjhm").style.color='#000000';}
	}
	else if(_SelectCity.classno>0)
	{
		document.getElementById("chejiatr").style.visibility="visible";
		document.getElementById("my_cjhm").value=document.getElementById("my_cjhm").value.length!=_SelectCity.classno?"请输入车架号码后"+_SelectCity.classno+"位":document.getElementById("my_cjhm").value;
		if(document.getElementById("my_cjhm").value.length!=_SelectCity.classno)
		{document.getElementById("my_cjhm").style.color='#CCCCCC';}
		else
		{document.getElementById("my_cjhm").style.color='#000000';}
	}else
	{
		document.getElementById("chejiatr").style.visibility="hidden";
	}
	if(document.getElementById("my_cphm").value==''||document.getElementById("my_cphm").value=='车牌号码后5位')
	{
		document.getElementById("my_cphm").value="车牌号码后5位";
		document.getElementById("my_cphm").style.color='#CCCCCC';
	}else
	{
		document.getElementById("my_cphm").style.color='#000000';
	}
	 
}
function UpdateCar()
{
	_Car.pjc=document.getElementById("my_jc_select1").value;
	_Car.cjc=document.getElementById("my_jc_select2").value;
	_Car.cphm=document.getElementById("my_cphm").value;
	_Car.hpzl=document.getElementById("my_leixing").value;
	_Car.engine=document.getElementById("my_fdjh").value;
	_Car.classa=document.getElementById("my_cjhm").value;
	_Car.c_id=document.getElementById("selCity").value;
	_Car.p_name=document.getElementById("selProvince").value;
}

function CheckCar()
{
	UpdateCar();
	if(!isRightNo(_Car.pjc+_Car.cjc+_Car.cphm))
	{
		alert('车牌输入错误，请重新输入！');
		return false;
	}
	if(_SelectCity.engineno>0)
	{
		if(_SelectCity.engineno!=_Car.engine.length ||!isNumberAndChar(_Car.engine))
		{
			document.getElementById("tipenginebox").innerHTML='发动机号输入错误，请核对后重新输入！';
			document.getElementById("tipenginebox").style.display='block';
			document.getElementById("my_fdjh").focus();
			//alert(_SelectCity.engineno_text);
			return false;
		}
	}else if(_SelectCity.engineno==-1)
	{
		if(_Car.engine.length<4 ||!isNumberAndChar(_Car.engine)||_Car.engine==_SelectCity.engineno_text)
		{
			document.getElementById("tipenginebox").innerHTML='发动机号输入错误，请核对后重新输入！';
			document.getElementById("tipenginebox").style.display='block';
			document.getElementById("my_fdjh").focus();
			//alert(_SelectCity.engineno_text);
			return false;
		}
	}
	if(_SelectCity.classno>0)
	{
		if(_SelectCity.classno!=_Car.classa.length ||!isNumberAndChar(_Car.classa))
		{
			document.getElementById("tipclassbox").innerHTML='车架号输入错误，请核对后重新输入！';
			document.getElementById("tipclassbox").style.display='block';
			document.getElementById("my_cjhm").focus();
			//alert(_SelectCity.classno_text);
			return false;
		}
	}else if(_SelectCity.classno==-1)
	{
		if(_Car.classa.length<4 ||!isNumberAndChar(_Car.classa)||_Car.classa==_SelectCity.classno_text)
		{
			document.getElementById("tipclassbox").innerHTML='车架号输入错误，请核对后重新输入！';
			document.getElementById("tipclassbox").style.display='block';
			document.getElementById("my_cjhm").focus();
			//alert(_SelectCity.classno_text);
			return false;
		}
	}
	return true;
	
}
function isLicenseNo(str)
{
      return /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/.test(str);
}
function isRightNo(str)
{
	var v=/(^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)/;
	return str.search(v)==-1?false:true;
}
function isNumberAndChar(str)
{
	var b = /^[0-9a-zA-Z]*$/g;
	return b.test(str);
}
function Jtrim(str){//删除空格
      var p=/\s/g;
      str=str.replace(p,"");  
      return str;
} 
function quanjiao(obj)
{
    var str=obj.value;
    if (str.length>0)
    {
        for (var i = str.length-1; i >= 0; i--)
        {
            unicode=str.charCodeAt(i);
            if (unicode>65280 && unicode<65375)
            {
                alert("不能输入全角字符，请输入半角字符");
                obj.value=str.substr(0,i);
            }
        }
    }
}
function checkinput(obj)
{
	obj.value=Jtrim(obj.value);
	obj.value=obj.value.toUpperCase();
	if(obj.id=="my_cphm")return;
	if(obj.value.length>10)
	{
		if(obj.id=="my_cjhm")
		{
//			document.getElementById("classtext").style.display="none";
		}else
		{
//			document.getElementById("enginetext").style.display="none";
		}
	}else 
	{
		if(obj.id=="my_cjhm")
		{
//			document.getElementById("classtext").style.display="block";
		}else
		{
//			document.getElementById("enginetext").style.display="block";
		}
	}
	document.getElementById("tipenginebox").style.display='none';
	document.getElementById("tipclassbox").style.display='none';
}
function onFocusCphm(obj)
{
	if (obj.value =='车牌号码后5位'){obj.value =''; obj.style.color='#000000';}
}
function onFocusClass(obj)
{
	if (obj.value ==_SelectCity.classno_text){obj.value =''; obj.style.color='#000000';}
//	document.getElementById("classtext").innerHTML=_SelectCity.classno==-1?"请输入<span class='number'>完整</span>的车架号码":"请输入车架号码后<span class='number'>"+_SelectCity.classno+"</span>位";
//	document.getElementById("classtext").style.display='block';
	//$('#tipclassbox').style.display='none';
}
function onFocusEngine(obj)
{
	if (obj.value ==_SelectCity.engineno_text){obj.value =''; obj.style.color='#000000';}
//	document.getElementById("enginetext").innerHTML=_SelectCity.engineno==-1?"请输入<span class='number'>完整</span>的发动机号码":"请输入发动机号码后<span class='number'>"+_SelectCity.engineno+"</span>位";
//	document.getElementById("enginetext").style.display='block';
	//$('#tipenginebox').style.display='none';
}
function onblurCphm(obj)
{
	if (obj.value ==''){obj.value='车牌号码后5位';obj.style.color='#CCCCCC';}else if(obj.value!='车牌号码后5位'){obj.style.color='#000000';}
}
function onblurClass(obj)
{
	if (obj.value ==''){obj.value=_SelectCity.classno_text;obj.style.color='#CCCCCC';/*document.getElementById("classtext").style.display='none';*/}else if(obj.value!=_SelectCity.classno_text){obj.style.color='#000000';}
	document.getElementById("classtext").innerHTML=_SelectCity.classno==-1?"请输入<span class='number'>完整</span>的车架号码":"请输入车架号码后<span class='number'>"+_SelectCity.classno+"</span>位";
	//document.getElementById("classtext").style.display='none';
	document.getElementById("tipclassbox").style.display='none';
}
function onblurEngine(obj)
{
	if (obj.value ==''){obj.value=_SelectCity.engineno_text;obj.style.color='#CCCCCC';/*document.getElementById("enginetext").style.display='none';*/}else if(obj.value!=_SelectCity.engineno_text){obj.style.color='#000000';}
//	document.getElementById("enginetext").innerHTML=_SelectCity.engineno==-1?"请输入<span class='number'>完整</span>的发动机号码":"请输入发动机号码后<span class='number'>"+_SelectCity.engineno+"</span>位";
	//document.getElementById("enginetext").style.display='none';
	document.getElementById("tipenginebox").style.display='none';
}
function SetParamValue()
{
	document.getElementById("areacode").value=_SelectCity.c_pcode;
	document.getElementById("city_id").value=_SelectCity.id_csy;
	document.getElementById("province_id").value=_SelectCity.province_id_csy;
	document.getElementById("jhcc").value=_SelectCity.jh_city_code;
	document.getElementById("id360").value=_SelectCity.id_360;
	document.getElementById("pid").value=GetPID(document.getElementById("my_jc_select1").value);
	document.getElementById("hpzl_text").value=document.getElementById("my_leixing").options[document.getElementById("my_leixing").selectedIndex].text;
}
////////////////////////////////////

function refreshCookielist(n,vcar)
{
	for(i=n;i<5;i++)
	{
		var ncar=getCookie('car'+(i+1));
		if(ncar!=null &&i!=4)
		{
			SetCookie('car'+i,ncar,360);
		}else
		{
			SetCookie('car'+i,vcar,360);
			break;
		}
	}
}
function comparecar(car1,car2)
{
	if(car1.pjc+car1.cjc+car1.cphm+car1.hpzl+car1.engine+car1.classa+car1.c_id==car2.pjc+car2.cjc+car2.cphm+car2.hpzl+car2.engine+car2.classa+car2.c_id)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function comparehphm(car1,car2)
{
	if(car1.pjc+car1.cjc+car1.cphm+car1.hpzl==car2.pjc+car2.cjc+car2.cphm+car2.hpzl)
	{
		return true;
	}
	else
	{
		return false;
	}
}
function getCookieCar(n)
{
	var ncar=getCookie('car'+n);
	if(ncar!=null)
	{
		var infoarr=ncar.split('|');
		var objcar={};
		objcar.pjc=infoarr[0];
		objcar.cjc=infoarr[1];
		objcar.cphm=infoarr[2];
		objcar.hpzl=infoarr[3];
		objcar.engine=infoarr[4];
		objcar.classa=infoarr[5];
		objcar.c_id=infoarr[6];
		objcar.p_name=infoarr[7];
		return objcar;
	}else
	{
		return null;
	}
}
function getCookieCarDesktop()
{
	var ncar=getCookie('car_desktop');
	if(ncar!=null)
	{
		var infoarr=ncar.split('|');
		var objcar={};
		objcar.pjc=decodeURIComponent (escape(infoarr[0]));
		objcar.cjc=infoarr[1];
		objcar.cphm=infoarr[2];
		objcar.hpzl=infoarr[3];
		objcar.engine=infoarr[4];
		objcar.classa=infoarr[5];
		objcar.c_id=infoarr[6];
		objcar.p_name=decodeURIComponent (escape(infoarr[7]));
		return objcar;
	}else
	{
		return null;
	}
}
function fillForm(car)
{
	document.getElementById("selProvince").value=car.p_name;
	getCity(car.p_name);
	document.getElementById("selCity").value=car.c_id;
	updateAll();
	document.getElementById("my_jc_select1").value=car.pjc;
	document.getElementById("my_jc_select2").value=car.cjc;
	document.getElementById("my_cphm").value=car.cphm;
	document.getElementById("my_leixing").value=car.hpzl;
	document.getElementById("my_fdjh").value=car.engine;
	document.getElementById("my_cjhm").value=car.classa;
	document.getElementById("my_fdjh").style.color="#000000";
	document.getElementById("my_cjhm").style.color="#000000";
}
function quickquery(car)
{
	fillForm(car);
}

function updateHistoryCars_City()
{
	var car1=getCookieCar(1);
	var historyhtml='';
	if(car1!=null&&car1.c_id==document.getElementById("selCity").value)
	{
		_car1=car1;
		historyhtml+='<div class="quickarrow"></div><ul><li><a href="#" onClick="quickquery(_car1); return false;">'+_car1.pjc+_car1.cjc+_car1.cphm+'</a></li>';
		var car2=getCookieCar(2);
		if(car2!=null&&car2.c_id==document.getElementById("selCity").value)
		{
			_car2=car2;
			historyhtml+='<li><a href="#" onClick="quickquery(_car2); return false;">'+_car2.pjc+_car2.cjc+_car2.cphm+'</a></li>';
			var car3=getCookieCar(3);
			if(car3!=null&&car3.c_id==document.getElementById("selCity").value)
			{
				_car3=car3;
				historyhtml+='<li><a href="#" onClick="quickquery(_car3); return false;">'+_car3.pjc+_car3.cjc+_car3.cphm+'</a></li>';
				var car4=getCookieCar(4);
				if(car4!=null&&car4.c_id==document.getElementById("selCity").value)
				{
					_car4=car4;
					historyhtml+='<li><a href="#" onClick="quickquery(_car4); return false;">'+_car4.pjc+_car4.cjc+_car4.cphm+'</a></li></ul>';
					document.getElementById("historylist").innerHTML=historyhtml;
					fillForm(_car4);
					return;
				}else//car4
				{
					historyhtml+='</ul>';
					document.getElementById("historylist").innerHTML=historyhtml;
					fillForm(_car3);
					return;
				}
			}else//car3
			{
				historyhtml+='</ul>';
				document.getElementById("historylist").innerHTML=historyhtml;
				fillForm(_car2);
				return;
			}
		}else//car2
		{
			historyhtml+='</ul>';
			document.getElementById("historylist").innerHTML=historyhtml;
			fillForm(_car1);
			return;
		}
	}else//car1
	{
		
		document.getElementById("historylist").innerHTML=historyhtml;
		return;
	}
	document.getElementById("historylist").innerHTML=historyhtml;
	return;
}

//获得coolie 的值
 
  
 
function cookie(name){   
 
   var cookieArray=document.cookie.split("; "); //得到分割的cookie名值对   
 
   var cookie=new Object();   
 
   for (var i=0;i<cookieArray.length;i++){   
 
      var arr=cookieArray[i].split("=");       //将名和值分开   
 
      if(arr[0]==name)return unescape(arr[1]); //如果是指定的cookie，则返回它的值   
 
   }
 
   return "";
 
}
 
  
 
function delCookie(name)//删除cookie
 
{
 
   document.cookie = name+"=;expires="+(new Date(0)).toGMTString();
 
}
 
  
 
function getCookie(objName){//获取指定名称的cookie的值
 
    var arrStr = document.cookie.split("; ");
 
    for(var i = 0;i < arrStr.length;i ++){
 
        var temp = arrStr[i].split("=");
 
        if(temp[0] == objName) return unescape(temp[1]);
 
   }
 
}
 
  
 
function addCookie(objName,objValue,objHours){      //添加cookie
 
    var str = objName + "=" + escape(objValue);
 
    if(objHours > 0){                               //为时不设定过期时间，浏览器关闭时cookie自动消失
 
        var date = new Date();
 
        var ms = objHours*3600*1000;
 
        date.setTime(date.getTime() + ms);
 
        str += "; expires=" + date.toGMTString();
 
   }
 
   document.cookie = str;
 
}
 
  
 
function SetCookie(name,value,day)//两个参数，一个是cookie的名子，一个是值
{
 
    //var Days = 30; //此 cookie 将被保存 30 天
 
    var exp = new Date();    //new Date("December 31, 9998");
 
    exp.setTime(exp.getTime() + day*24*60*60*1000);
 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
 
}
 
function getCookie(name)//取cookies函数       
 
{
 
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
 
     if(arr != null) return unescape(arr[2]); return null;
 
  
 
}
 
function delCookie(name)//删除cookie
 
{
 
    var exp = new Date();
 
    exp.setTime(exp.getTime() - 1);
 
    var cval=getCookie(name);
 
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
 
}
function Env(){
	var ua=navigator.userAgent.toLowerCase();
	function check(r){
		return r.test(ua);
	}
	return {
	  //判断环境，操作系统、浏览器、是否是https连接等
		DOC : document,
        isStrict : DOC.compatMode == "CSS1Compat",
        isOpera : check(/opera/),
        isChrome : check(/\bchrome\b/),
        isWebKit : check(/webkit/),
        isSafari : !isChrome && check(/safari/),
        isSafari2 : isSafari && check(/applewebkit\/4/), // unique to Safari 2
        isSafari3 : isSafari && check(/version\/3/),
        isSafari4 : isSafari && check(/version\/4/),
        isIE : !isOpera && check(/msie/),
        isIE7 : isIE && check(/msie 7/),
        isIE8 : isIE && check(/msie 8/),
        isIE6 : isIE && !isIE7 && !isIE8,
        isGecko : !isWebKit && check(/gecko/),
        isGecko2 : isGecko && check(/rv:1\.8/),
        isGecko3 : isGecko && check(/rv:1\.9/),
        isBorderBox : isIE && !isStrict,
        isWindows : check(/windows|win32/),
        isMac : check(/macintosh|mac os x/),
        isAir : check(/adobeair/),
        isLinux : check(/linux/),
        isSecure : /^https/i.test(window.location.protocol),
       /**
         * 是否为空，如果允许allowBlank=true，则当v=''时返回true
         */
        isEmpty : function(v, allowBlank){
            return v === null || v === undefined || ((this.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
        },

        /**
         * 是否为数组类型
         */
        isArray : function(v){
            return toString.apply(v) === '[object Array]';
        },

        /**
         * 是否为日期类型
         */
        isDate : function(v){
            return toString.apply(v) === '[object Date]';
        },

        /**
         * 是否为Object类型
         */
        isObject : function(v){
            return !!v && Object.prototype.toString.call(v) === '[object Object]';
        },

        /**
         * 判断是否是函数
         */
        isFunction : function(v){
            return toString.apply(v) === '[object Function]';
        },

        /**
         * 判断是否为数字
         */
        isNumber : function(v){
            return typeof v === 'number' && isFinite(v);
        },

        /**
         * 判断字符串类型
         */
        isString : function(v){
            return typeof v === 'string';
        },

        /**
         * 判断布尔类型
         */
        isBoolean : function(v){
            return typeof v === 'boolean';
        },

        /**
         * 判断是否为dom元素
         */
        isElement : function(v) {
            return !!v && v.tagName;
        },

        /**
         * 判断是否已定义
         */
        isDefined : function(v){
            return typeof v !== 'undefined';
        }
	}
}
function GetPID(j)
{
	var id;
	switch(j)
	{		
		case '贵':
			id=1;
			break;
		case '豫':
			id=2;
			break;
		case '鲁':
			id=3;
			break;
		case '川':
			id=4;
			break;
		case '苏':
			id=5;
			break;
		case '青':
			id=6;
			break;
		case '新':
			id=7;
			break;
		case '闽':
			id=8;
			break;
		case '浙':
			id=9;
			break;
		case '鄂':
			id=10;
			break;
		case '藏':
			id=11;
			break;
		case '粤':
			id=12;
			break;
		case '云':
			id=13;
			break;
		case '京':
			id=14;
			break;
		case '陕':
			id=15;
			break;
		case '甘':
			id=16;
			break;
		case '冀':
			id=17;
			break;
		case '吉':
			id=18;
			break;
		case '宁':
			id=19;
			break;
		case '湘':
			id=20;
			break;
		case '皖':
			id=21;
			break;
		case '蒙':
			id=22;
			break;
		case '沪':
			id=23;
			break;
		case '晋':
			id=24;
			break;
		case '琼':
			id=25;
			break;
		case '辽':
			id=26;
			break;
		case '渝':
			id=27;
			break;
		case '黑':
			id=28;
			break;
		case '津':
			id=29;
			break;
		case '桂':
			id=31;
			break;
		case '赣':
			id=30;
			break;
		
		default:
			id=-1;
	}
	return id;
}
function pid_To_pjc(pid)
{
	var pjc="";
	switch(pid)
	{
		case "1":
			pjc="贵";
			break;
		case "2":
			pjc="豫";
			break;
		case "3":
			pjc="鲁";
			break;
		case "4":
			pjc="川";
			break;
		case "5":
			pjc="苏";
			break;
		case "6":
			pjc="青";
			break;
		case "7":
			pjc="新";
			break;
		case "8":
			pjc="闽";
			break;
		case "9":
			pjc="浙";
			break;
		case "10":
			pjc="鄂";
			break;
		case "11":
			pjc="藏";
			break;
		case "12":
			pjc="粤";
			break;
		case "13":
			pjc="云";
			break;
		case "14":
			pjc="京";
			break;
		case "15":
			pjc="陕";
			break;
		case "16":
			pjc="甘";
			break;
		case "17":
			pjc="冀";
			break;
		case "18":
			pjc="吉";
			break;
		case "19":
			pjc="宁";
			break;
		case "20":
			pjc="湘";
			break;
		case "21":
			pjc="皖";
			break;
		case "22":
			pjc="蒙";
			break;
		case "23":
			pjc="沪";
			break;
		case "24":
			pjc="晋";
			break;
		case "25":
			pjc="琼";
			break;
		case "26":
			pjc="辽";
			break;
		case "27":
			pjc="渝";
			break;
		case "28":
			pjc="黑";
			break;
		case "31":
			pjc="桂";
			break;
		case "30":
			pjc="赣";
			break;
		case "29":
			pjc="津";
			break;
		default:
			pjc="粤";
	}
	return pjc;
}
function initializeCity(cityinfo)
{
	setSelProvince('广东');
	updatecityn('广州');
	updateAll();
	//document.getElementById('selCity').disabled='disabled';
}
function SetAutoipCity(p,c)
{
	if(document.getElementById("selCity").value!=null &&document.getElementById("selCity").value!=''){return;}
	if(c!='')
	{
		setSelProvince(p);
		updatecityn(c);
		//updateAll();
		
	}else if(p!='')
	{
		setSelProvince(p);
		updateAll();
	}else
	{
		setSelProvince('广东');
		updatecityn('广州');
		updateAll();
		//document.getElementById('selCity').disabled='disabled';
		alert("ip自动定位查询城市不成功，请手动选择查询城市！");
	}
}
function SetCustomCity(p,c)
{
	//if(document.getElementById("selCity").value!=null &&document.getElementById("selCity").value!=''){return;}
	if(c!='')
	{
		setSelProvince(p);
		updatecityn(c);
		//updateAll();
		//$("#selCity").
		
	}else if(p!='')
	{
		setSelProvince(p);
		updateAll();
	}else
	{
		alert("系统错误！");
	}
}
///////////////////////////////////
//显示灰色 jQuery 遮罩层
function showBg() {
    var bh = $("body").height();
    var bw = $("body").width();
    $("#fullbg").css({
        height:bh,
        width:bw,
        display:"block"
    });
    $("#dialog").show();
}
//关闭灰色 jQuery 遮罩
function closeBg() {
    $("#fullbg,#dialog").hide();
}
function browserRedirect() { 	
	if (isMobile()&& window.screen.width<700 && (getCookie("showmobile")==''||getCookie("showmobile")==null) ) {
		//showBg();
		SetCookie("showmobile","1",30);
	} else {
		;
	}
} 
function isMobile() { 

	var sUserAgent= navigator.userAgent.toLowerCase(); 	
	var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 	
	var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 	
	var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 	
	var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 	
	var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 	
	var bIsAndroid= sUserAgent.match(/android/i) == "android"; 	
	var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 	
	var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 	
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		return true;
	} else { 
		return false;
	} 
} 
