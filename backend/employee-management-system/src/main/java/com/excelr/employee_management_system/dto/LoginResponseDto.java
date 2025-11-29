package com.excelr.employee_management_system.dto;

public class LoginResponseDto {
	
public String message;
	
	public String token;
	
	public LoginResponseDto() {
		// TODO Auto-generated constructor stub
	}

	public LoginResponseDto(String message, String token) {
		super();
		this.message = message;
		this.token = token;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	

}
