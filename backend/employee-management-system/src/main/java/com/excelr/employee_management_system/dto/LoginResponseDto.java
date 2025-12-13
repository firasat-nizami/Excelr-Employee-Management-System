package com.excelr.employee_management_system.dto;

public class LoginResponseDto {
	
public String message;
	
	public String token;
	 public String fullName;
	 public String email;
	 public String role;
	 public Long id;
	
	public LoginResponseDto() {
		// TODO Auto-generated constructor stub
	}

	public LoginResponseDto(String message, String token,String fullName,String email,String role,Long id) {
		super();
		this.message = message;
		this.token = token;
		 this.fullName = fullName;
	     this.email = email;
	     this.role = role;
	     this.id = id;
	     
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

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
	

}
