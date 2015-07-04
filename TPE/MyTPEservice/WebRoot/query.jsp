<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<base href="<%=basePath%>">

<title>My JSP 'query.jsp' starting page</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">
<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script language="javascript" charset="UTF-8" type="text/javascript" src="q2.js"></script>
<script language="javascript" charset="UTF-8"  type="text/javascript" src="q1.js"></script>
<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
	<script type="text/javascript">	
		$(function(){initializeCity();});
	</script>
		<style type="text/css">
			.middlebox{width:1120px; margin-top:10px auto;}
	.middletitle{width:1120px; height:25px; margin-top:5px; margin-left:0px; background-color:#09C; padding:10px 0;}
	.middletext,{font-size:20px; font-weight:bold; color:#ffffff; padding:5px;}
	.middletext b, b{color:#FF0000}
	.middletext span, span{font-size:18px; color:#eeeeee;}
	.shadow{width:1120px; height:10px; background:url(http://chaxun.weizhang8.cn/images/shadow.png) no-repeat; background-position:0 -15px}
	.table caption{
	line-height: 1.8em;
	text-align: left;
	}
	.table th{
		border-bottom:1px solid gray;
		padding: 2px;
		background-color:#F6F6F6;
		height:40px;
	}
	.table td{
		border:none;
		border-bottom:1px dashed gray;
		padding: 5px 0 5px 5px;
		text-align:center;
		font-size:14px;
	}
	</style>
	
	<style type="text/css">
		.box{ text-align:center; width:330px; border:#ffffff solid 0px; margin:auto; padding:0; font-size:16px;font-family: "\5FAE\8F6F\96C5\9ED1", "Microsoft Yahei", tahoma,arial,"Hiragino Sans GB", "\5B8B\4F53"; clear:both;}
		.leftbox,.rightbox{width:50%; float:left;}
/* 		.provincesel,.hphmjc{width:auto%; margin:10px 5px 15px 5px;}
		.hphmjc1,.hphmjc2{width:49%; } */
.hphmjc1{float:left;}
.hphmjc2{ float:right;}
#tipclassbox,#tipenginebox{ width: 260px; height:30px;position:absolute; margin-top:-87px; margin-left:-12px; z-index:5000; display:none; padding:15px 5px; font-size:13px; color:#000;}



/* .myinput{margin: 0px;padding:5px 10px;height: 18px;line-height: 18px;border: 1px solid rgb(204, 204, 204);border-radius: 4px;background-color: rgb(255, 255, 255);box-shadow: rgba(0, 0, 0, 0.0980392) 0px 1px 2px inset;vertical-align: middle;}
.classno,engineno{ width:auto;margin:0 10px 15px 10px;}
.inputbox{width:98%}
.top2{width:auto; margin:5px;} */
	</style>

</head>

<body>
	<!-- 查询开始 -->
	<div class="box">
		<form name="my_form" method="post" id="my_form" action="" onSubmit=""
			target="_blank">
			<div class="inputbox">
				<div class="top2">
					<div class="leftbox">
						<div class="provincesel">
							<select name="province" id="selProvince" style="width:100%;"
								onChange="getCity(this.options[this.selectedIndex].value);updateAll();"
								 class="myselect">
								<option value="">-选择省份-</option>
								<option value="北京">北京</option>
								<option value="上海">上海</option>
								<option value="天津">天津</option>
								<option value="重庆">重庆</option>

								<option value="河北">河北</option>
								<option value="山西">山西</option>
								<option value="内蒙古">内蒙古</option>
								<option value="辽宁">辽宁</option>
								<option value="吉林">吉林</option>
								<option value="黑龙江">黑龙江</option>

								<option value="江苏">江苏</option>
								<option value="浙江">浙江</option>
								<option value="安徽">安徽</option>
								<option value="福建">福建</option>
								<option value="江西">江西</option>
								<option value="山东">山东</option>

								<option value="河南">河南</option>
								<option value="湖北">湖北</option>
								<option value="湖南">湖南</option>
								<option value="广东">广东</option>
								<option value="广西">广西</option>
								<option value="海南">海南</option>

								<option value="四川">四川</option>
								<option value="贵州">贵州</option>
								<option value="云南">云南</option>
								<option value="西藏">西藏</option>
								<option value="陕西">陕西</option>
								<option value="甘肃">甘肃</option>

								<option value="宁夏">宁夏</option>
								<option value="青海">青海</option>
								<option value="新疆">新疆</option>
							</select>
						</div>
						<div class="hphmjc">
							<div class="hphmjc1">
								<select name="province_sn" id="my_jc_select1"
									style="width:100%; height:30px;" onChange="" class="myselect">
									<option selected="selected" value="粤">粤</option>
									<option value="浙">浙</option>
									<option value="京">京</option>
									<option value="沪">沪</option>
									<option value="川">川</option>

									<option value="津">津</option>
									<option value="渝">渝</option>
									<option value="鄂">鄂</option>
									<option value="赣">赣</option>
									<option value="冀">冀</option>
									<option value="蒙">蒙</option>

									<option value="鲁">鲁</option>
									<option value="苏">苏</option>
									<option value="辽">辽</option>
									<option value="吉">吉</option>
									<option value="皖">皖</option>
									<option value="湘">湘</option>

									<option value="黑">黑</option>
									<option value="琼">琼</option>
									<option value="贵">贵</option>
									<option value="桂">桂</option>
									<option value="云">云</option>
									<option value="藏">藏</option>

									<option value="陕">陕</option>
									<option value="甘">甘</option>
									<option value="宁">宁</option>
									<option value="青">青</option>
									<option value="豫">豫</option>
									<option value="闽">闽</option>

									<option value="新">新</option>
									<option value="晋">晋</option>
								</select>
							</div>
							<div class="hphmjc2">
								<select name="city_sn" id="my_jc_select2"
									style="width:100%; height:30px;" onChange="" class="myselect">
									<option selected="selected" value="A">A</option>
									<option value="B">B</option>
									<option value="C">C</option>

									<option value="D">D</option>
									<option value="E">E</option>
									<option value="F">F</option>
									<option value="G">G</option>
									<option value="H">H</option>
									<option value="I">I</option>

									<option value="J">J</option>
									<option value="K">K</option>
									<option value="L">L</option>
									<option value="M">M</option>
									<option value="N">N</option>
									<option value="O">O</option>

									<option value="P">P</option>
									<option value="Q">Q</option>
									<option value="R">R</option>
									<option value="S">S</option>
									<option value="T">T</option>
									<option value="U">U</option>

									<option value="V">V</option>
									<option value="W">W</option>
									<option value="X">X</option>
									<option value="Y">Y</option>
									<option value="Z">Z</option>
								</select>
							</div>
						</div>
					</div>
					<div class="rightbox">
						<div class="citysel">
							<select name="c_id" id="selCity" onChange="updateAll();"
								onFocus="" class="myselect width_selCity">
								<option value="">-选择城市-</option>
							</select>
						</div>
						<div class="hphmno">
							<input name="cphm" type="text" id="my_cphm" size="10"
								onKeyUp="checkinput(this)" onFocus="onFocusCphm(this)"
								onblur="onblurCphm(this)" class="myinput width_my_cphm" />
						</div>
					</div>
				</div>
				<div class="hpzl">
					<select name="hpzl" id="my_leixing" size="1"
						style="width:100%; height:30px;" class="myselect">
						<option value="01">大型汽车</option>

						<option selected="selected" value="02">小型汽车</option>
						<option value="03">使馆汽车</option>
						<option value="04">领馆汽车</option>
						<option value="05">境外汽车</option>
						<option value="06">外籍汽车</option>
						<option value="07">两、三轮摩托车</option>

						<option value="08">轻便摩托车</option>
						<option value="09">使馆摩托车</option>
						<option value="10">领馆摩托车</option>
						<option value="11">境外摩托车</option>
						<option value="12">外籍摩托车</option>
						<option value="13">低速车</option>

						<option value="14">拖拉机</option>
						<option value="15">挂车</option>
						<option value="16">教练汽车</option>
						<option value="17">教练摩托车</option>
						<option value="20">临时入境汽车</option>
						<option value="21">临时入境摩托车</option>

						<option value="22">临时行驶车</option>
						<option value="23">警用汽车</option>
						<option value="24">警用摩托</option>
						<option value="99">其它</option>
					</select>
				</div>
			</div>
			 <div class="classno" id="chejiatr">
                     <input name="classnumber" type="text" id="my_cjhm" style="width:292px; color:#CCCCCC;vertical-align:middle;" onFocus="onFocusClass(this)"  onblur="onblurClass(this)" onChange="checkinput(this)" onKeyUp="checkinput(this)"  class="myinput" /><div id="tipclassbox">请输入正确的车架号码后6位</div><div style="position:absolute; margin-top:-27px; margin-left:130px; z-index:5000; display:none;" id="classtext"></div>
                    </div>
			
			<div class="engineno"  id="fadongjitr">
                    <input name="enginenumber" type="text" id="my_fdjh" style="width:292px; color:#CCCCCC;vertical-align:middle;" onFocus="onFocusEngine(this)"  onblur="onblurEngine(this)" onChange="checkinput(this)"  onKeyUp="checkinput(this)"  class="myinput" /><div id="tipenginebox">请输入正确的车架号码后6位</div><div style="position:absolute; margin-top:-27px; margin-left:130px; z-index:5000; display:none;" id="enginetext"></div>
                    </div>
			
			
			
			
			<!-- <input name="areacode" type="hidden" id="areacode" value="" /> 
			<input name="city_id" type="hidden" id="city_id" value="" /> 
			<input name="province_id" type="hidden" id="province_id" value="" /> 
				<input name="pid" type="hidden" id="pid" value="" /> 
				<input name="jhcc" type="hidden" id="jhcc" value="" />
				 <input name="id360" type="hidden" id="id360" value="" />
				 <input name="sourceline" type="hidden" id="sourceline" value="" /> 
				<input name="hpzl_text" type="hidden" id="hpzl_text" value="" /> -->
		</form>
	</div>
	<!-- 查询结束 -->
	   	<!-- 显示查询信息 -->
	<div align="center">
		<div align="center" class="middlebox">
			<div class="middletitle" align="center">
				<span class="middletext">最近查询车辆的交通违章记录情况(30分钟更新一次)</span>
			</div>
			<div align="center" class="shadow"></div>
			<div id="querylist">
				<!--HistoryTable-->
				<table width="100%" class="table" cellspacing="0">
					<tbody>
						<tr>
							<th width="10%">车牌号码</th>
							<th width="20%">违章行为</th>
							<th width="20%">违章地点</th>
							<th width="20%">违章时间</th>
							<th width="10%">罚款金额</th>
							<th width="10%">扣分</th>
							</th>
							<th width="10%">查询时间</th>
						</tr>
						<tr class='wz1'>
							<td>粤AKJ***</td>
							<td>机动车通过有灯控路口时，不按所需行进方向驶入导向车道的（1208）</td>
							<td>花都区新华街道天贵路_天贵路与云山路交叉路口</td>
							<td>2015-6-5 20:18:37</td>
							<td>100</td>
							<td>2</td>
							<td>2015-06-26 10:40:02</td>
						</tr>
						<tr class='wz0'>
							<td>粤AKJ***</td>
							<td>机动车通过有灯控路口时，不按所需行进方向驶入导向车道的（1208）</td>
							<td>清远市清城区广清大道</td>
							<td>2015-6-6 20:00:00</td>
							<td>100</td>
							<td>2</td>
							<td>2015-06-26 10:40:02</td>
						</tr>
						<tr class='wz1'>
							<td>粤AU9***</td>
							<td>驾驶中型以上载客载货汽车、校车、危险物品运输车辆以外的其他机动车行驶超过规定时速20%以上未达到50%的（1636）</td>
							<td>大广高速2898公里400米</td>
							<td>2014-5-14 16:46:00</td>
							<td>150</td>
							<td>6</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz0'>
							<td>粤AU9***</td>
							<td>非紧急情况下在高速公路应急车道上行驶的（4008）</td>
							<td>广惠高速24公里700米</td>
							<td>2014-8-24 10:43:24</td>
							<td>100</td>
							<td>0</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz1'>
							<td>粤AU9***</td>
							<td>驾驶机动车违反道路交通信号灯通行的（1625）</td>
							<td>新广花双岗路口</td>
							<td>2014-9-4 18:44:24</td>
							<td>200</td>
							<td>6</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz0'>
							<td>粤AU9***</td>
							<td>驾驶中型以上载客载货汽车、危险物品运输车辆以外的其他机动车行驶超过规定时速10%未达20%的（1352A）</td>
							<td>岳临高速440km+100m</td>
							<td>2014-10-15 19:55:00</td>
							<td>150</td>
							<td>3</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz1'>
							<td>粤AU9***</td>
							<td>驾驶中型以上载客载货汽车、校车、危险物品运输车辆以外的其他机动车行驶超过规定时速20%以上未达到50%的（1636）</td>
							<td>S114省道王老吉药业对出路段</td>
							<td>2015-2-16 9:35:38</td>
							<td>150</td>
							<td>6</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz0'>
							<td>粤AU9***</td>
							<td>机动车违反禁止标线指示的（1345）</td>
							<td>内环路黄埔放射线东往西广州大道入口</td>
							<td>2015-2-23 14:44:33</td>
							<td>200</td>
							<td>3</td>
							<td>2015-06-26 10:39:39</td>
						</tr>
						<tr class='wz1'>
							<td>粤A0L***</td>
							<td>机动车违反规定停放、临时停车，妨碍其它车辆、行人通行的（1039）</td>
							<td>广州市荔湾区花地大道_花地大道路段</td>
							<td>2015-6-21 9:50:00</td>
							<td>200</td>
							<td>0</td>
							<td>2015-06-26 00:26:31</td>
						</tr>
						<tr class='wz0'>
							<td>粤A55***</td>
							<td>在高速公路上行驶时，驾驶人未按规定使用安全带的（4204）</td>
							<td>京港澳高速1740公里655米处</td>
							<td>2015-6-4 20:15:00</td>
							<td>200</td>
							<td>2</td>
							<td>2015-06-25 22:48:27</td>
						</tr>
					</tbody>
				</table>
				<!--EndHistoryTable-->
			</div>
		</div>
		<!--middlebox end--->
	</div>
</body>
</html>
