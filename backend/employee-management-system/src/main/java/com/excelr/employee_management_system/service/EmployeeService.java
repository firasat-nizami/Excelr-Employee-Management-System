package com.excelr.employee_management_system.service;

import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.excelr.employee_management_system.dto.EmployeeDto;
import com.excelr.employee_management_system.dto.LoginRequestDto;
import com.excelr.employee_management_system.dto.LoginResponseDto;
import com.excelr.employee_management_system.entity.Employee;

public interface EmployeeService {
	
	public Employee addEmployeeService(EmployeeDto empDto);
	
	public List<Employee> getAllEmployeeService();
	
	public LoginResponseDto empLoginService(LoginRequestDto lRDto);
	
	

}
