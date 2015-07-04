<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'violations.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
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

  </head>
  
  <body>
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
