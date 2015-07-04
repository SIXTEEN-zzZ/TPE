<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'main.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">

	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<style>
		html,body{
			magin:0;
			padding:0;
		}
		#header{
			background-image:url(images/headerbg.jpg);
			background-repeat:no-repeat;
			background-size: 100% 100%; 
			height:20%;
		}
		#header,
		#pagefooter,
		#container{
			margin:0 30px;
		}
		#contentleft,
		#contentright{
			height:100%;
		}
		#contentleft{
			float:left;
			width:10%;
			border-right:1px solid #aba;
		}
		#contentright{
			float:left;
		}
		#pagefooter{
			height:10%;
			clear:both;
			background-image:url(images/footerbg.png);
			background-repeat:repeat-x;
			/* background-size: 100% 100%;  */
		}
		ul{
		
			list-style:none;
			magin:0;
			padding:0;
		}
		ul li{
			height:10%;
			border-bottom:1px solid #aba;
			text-align:center;
		}
		a{
			text-decoration:none;
		}
	</style>
  </head>
  
  <body>
    	<div id="header" bgcolor="gray"></div>
    	<div id="container">
    		<div id="contentleft" bgcolor="green">
    			<ul>
				<li><a href="#">导航一</a></li>
				<li><a href="#">导航二</a></li>
				<li><a href="#">导航三</a></li>
				<li><a href="#">导航四</a></li>
				<li><a href="#">导航五</a></li>
				<li><a href="#">导航六</a></li>
				</ul>
    		</div>
    		<div id="contentright">
    			<%@ page contentType="text/html; charset=GB2312"language="java" errorPage=""%>
					<jsp:include page="query.jsp"/>
    		</div>
    	</div>
    	<div id="pagefooter" bgcolor="gray">一二三四五六7</div>
  </body>
</html>
