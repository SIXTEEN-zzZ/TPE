<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'mylogin.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->
	<script type="text/javascript" src="js/jquery-2.1.4.js"></script>
	<script type="text/javascript">
	function checkthis(){
		var uid=$('#uid').val();
		var staffid=$('#staffid').val();
		var passwd=$('#passwd').val();
		/* var yzm=$('#yzm').val(); */
		if(staffid==""){
			alert('账号不能为空！');
			return false;
		}
		if(passwd==""){
			alert('密码不能为空！');
			return false;
		}
		/* if(yzm.length<4){
			alert('验证码输入不正确！');
			return false;
		} */
		document.uform.submit();
	}
/* 	function reloadcode(){
				var verify=$('#nyzm');
				verify.attr('src','http://web.c123.cn/inc/imgcode.php?rand='+Math.random())
	} */
	document.onkeydown=function(event){
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if(e && e.keyCode==13){ 
			checkthis();
		}
	}
</script>
	<style type="text/css">
		*{
			margin:0;
			padding:0;
		}
		.outdiv{
			margin:0 auto;
			width:400px;
		}
		.outdiv div{
			width:100%;
		}
		.dldiv{
			text-align:center;
		}
		.outdiv span {
			width:20%;
			float:left;
			text-align:right;
		}
		.outdiv input select{
			float:left;
		}
	
	
	</style>

  </head>
  <body>
  	<div class="outdiv">
       <form action="<%=path %>/loginAction.action" method="post" name="uform">
       		<div><span>登入身份：</span><select>
				<option value="01">管理员</option>
				<option value="01">警员</option>
				</select></div>
       		<div><span>账号：</span><input type="text" name="staffid" id="staffid" class="input_mid1"  value="1001" /></div>
       		<div><span>密码：</span><input type="password" name="passwd" id="passwd" class="input_mid1" value=""/>	</div>
       		<!-- <div><span>验证码：</span><input type="text" name="yzm" id="yzm" size="10" maxlength="4" class="input_short"/>
				<IMG id=nyzm align=absMiddle 
				src="http://web.c123.cn/inc/imgcode.php" onClick="reloadcode();">
				<a href="javascript:reloadcode();">换一张</a></div> -->
			<div><input type="checkbox" value="1" name="remerber_password" id="remerber_password" tabindex="5"/>记住状态</div>
	  		<div class="dldiv"><img  bgcolor="blue" class="img1" onclick="checkthis();" src="images/btn_login.jpg" border="0"/><div>
	  </form>		
    </div>
  </body>
</html>
