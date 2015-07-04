package com.tpe.action;

import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import com.tpe.bean.User;

import freemarker.ext.util.ModelFactory;

public class LoginAction extends ActionSupport implements ModelDriven<User>{
//	private String staffid;
//	private String passwd;
	private User us=new User();
	
	@Override
	public String execute() throws Exception {
		
		System.out.println("”√ªß√˚"+us.getStaffid());
		System.out.println("√‹¬Î"+us.getPasswd());
		
		return "success";
	}
	
	@Override
	public User getModel() {
		// TODO Auto-generated method stub
		return us;
	}

	
}
