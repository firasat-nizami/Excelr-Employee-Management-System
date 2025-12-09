package com.excelr.employee_management_system.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.employee_management_system.config.JwtService;
import com.excelr.employee_management_system.dto.EmployeeDto;
import com.excelr.employee_management_system.dto.LoginRequestDto;
import com.excelr.employee_management_system.dto.LoginResponseDto;
import com.excelr.employee_management_system.entity.Employee;
import com.excelr.employee_management_system.service.EmployeeService;


import jakarta.validation.Valid;

@RestController
@CrossOrigin("http://localhost:5173")
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/api/employees")
public class EmployeeController {
	
	  @Autowired
	    private EmployeeService employeeService;
	  
	  @Autowired
		public PasswordEncoder encoder;
		
		@Autowired
		public JwtService jwtService;


	    // ---------------- Add Employee -------------------
	    @PostMapping
	    public ResponseEntity<Employee> addEmployee(@Valid @RequestBody EmployeeDto employeeDto) {
	    	
	    	employeeDto.setPassword(encoder.encode(employeeDto.getPassword()));

	        Employee savedEmployee = employeeService.addEmployeeService(employeeDto);

	        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
	    }


	    // ---------------- Get All Employees ----------------
	    @GetMapping
	    public ResponseEntity<List<Employee>> getAllEmployees() {

	        List<Employee> employees = employeeService.getAllEmployeeService();

	        return new ResponseEntity<>(employees, HttpStatus.OK);
	    }
	    
	    @PostMapping("/login")
		public ResponseEntity<LoginResponseDto> empLogin(@RequestBody LoginRequestDto lRDto) throws NotFoundException{
			
			LoginResponseDto lResDto = employeeService.empLoginService(lRDto);
			
			String token = jwtService.generateToken(lRDto.getpersonalMail());
			lResDto.setToken(token);
			
			return ResponseEntity.accepted()
					
					.body(lResDto);
	    }
	    
	    @GetMapping("/{id}")
		public Employee getEmployeeById(@PathVariable Integer id) {
			
			Employee emp = employeeService.getEmployeeByIdService(id);
			
			return emp;	
		
		}
	    
		@DeleteMapping("/{id}")
		public String deleteEmployeeById(@PathVariable Integer id) {
				
				 employeeService.deleteEmployeeByIdService(id);
			
				return "deleted";

		
		}

}
