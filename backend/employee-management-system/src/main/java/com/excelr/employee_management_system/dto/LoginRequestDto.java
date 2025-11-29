package com.excelr.employee_management_system.dto;

public class LoginRequestDto {
	
public String personalMail;
	
	public String password;
	
	
	public LoginRequestDto() {
		// TODO Auto-generated constructor stub
	}


	public LoginRequestDto(String personalMail, String password) {
		super();
		this.personalMail = personalMail;
		this.password = password;
	}


	public String getpersonalMail() {
		return personalMail;
	}


	public void setpersonalMail(String personalMail) {
		this.personalMail = personalMail;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


}
