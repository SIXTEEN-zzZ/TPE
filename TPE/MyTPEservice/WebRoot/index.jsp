<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
  </head>
  
  <body>
   <form action="<%=path %>/index.action" method="post" name="uform">
   	用户名：<input type="text" name="staffid"><br/>
   	密码：<input type="password" name="passwd"><br/>
   	<input type="submit" value="提交">
   </form>
  </body>
</html>
