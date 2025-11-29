package com.excelr.employee_management_system.exception;

import java.time.LocalDateTime;

public class ErrorMessageDetail {
	
	public LocalDateTime timestamp;
	public String message;
	public String path;
	
	public ErrorMessageDetail() {
		// TODO Auto-generated constructor stub
	}

	public ErrorMessageDetail(LocalDateTime timestamp, String message, String path) {
		super();
		this.timestamp = timestamp;
		this.message = message;
		this.path = path;
	}

	public LocalDateTime getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(LocalDateTime timestamp) {
		this.timestamp = timestamp;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}
	
	

}
