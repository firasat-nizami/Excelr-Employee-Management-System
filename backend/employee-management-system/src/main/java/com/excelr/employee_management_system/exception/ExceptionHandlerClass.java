package com.excelr.employee_management_system.exception;

import java.time.LocalDateTime;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;

@RestControllerAdvice
public class ExceptionHandlerClass {
	
	@ExceptionHandler(exception = EmployeeException.class)
	public ResponseEntity<ErrorMessageDetail> employeeExceptionHandler(EmployeeException ee, WebRequest req){
		
		ErrorMessageDetail emd = new ErrorMessageDetail(LocalDateTime.now(), ee.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<ErrorMessageDetail>(emd,HttpStatus.NOT_FOUND);
	}
	
	@ExceptionHandler(exception = NoHandlerFoundException.class)
	public ResponseEntity<ErrorMessageDetail> employeeExceptionHandler(NoHandlerFoundException ee, WebRequest req){
		
		ErrorMessageDetail emd = new ErrorMessageDetail(LocalDateTime.now(), ee.getMessage(), req.getDescription(false));
		
		return new ResponseEntity<ErrorMessageDetail>(emd,HttpStatus.NO_CONTENT);
	}
	
	

}
