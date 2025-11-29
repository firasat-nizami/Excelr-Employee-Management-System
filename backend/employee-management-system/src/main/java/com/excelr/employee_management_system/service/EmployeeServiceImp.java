package com.excelr.employee_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.excelr.employee_management_system.dto.AddressDto;
import com.excelr.employee_management_system.dto.EmployeeDto;
import com.excelr.employee_management_system.dto.LoginRequestDto;
import com.excelr.employee_management_system.dto.LoginResponseDto;
import com.excelr.employee_management_system.entity.Address;
import com.excelr.employee_management_system.entity.Employee;
import com.excelr.employee_management_system.exception.EmployeeException;
import com.excelr.employee_management_system.repository.EmployeeRepository;



@Service
public class EmployeeServiceImp implements EmployeeService {
	
	@Autowired
    private EmployeeRepository employeeRepository;
	
	
	@Autowired
	public PasswordEncoder encoder;

	@Override
	public Employee addEmployeeService(EmployeeDto dto) {
		Employee emp = new Employee();
		
		 emp.setFullName(dto.getFullName());
	        emp.setEmploymentCode(dto.getEmploymentCode());
	        emp.setDob(dto.getDob());
	        emp.setGender(dto.getGender());
	        emp.setAge(dto.getAge());
	        emp.setMobile(dto.getMobile());
	        emp.setPersonalMail(dto.getPersonalMail());
	        emp.setCompanyMail(dto.getCompanyMail());
	        emp.setEmergencyContactName(dto.getEmergencyContactName());
	        emp.setEmergencyMobile(dto.getEmergencyMobile());
	        emp.setPassword(dto.getPassword());
	        emp.setRoles("ROLE_USER");

	        // Convert Current Address
	        emp.setCurrentAddress(convertToAddress(dto.getCurrentAddress()));

	        // Convert Permanent Address
	        emp.setPermanentAddress(convertToAddress(dto.getPermanentAddress()));
		return employeeRepository.save(emp);
	}
	
	private Address convertToAddress(AddressDto dto) {
        Address address = new Address();
        address.setCity(dto.getCity());
        address.setAddressLine1(dto.getAddressLine1());
        address.setAddressLine2(dto.getAddressLine2());
        address.setPincode(dto.getPincode());
        return address;
    }

	@Override
	public List<Employee> getAllEmployeeService() {
		List<Employee> emp1 = employeeRepository.findAll();
		return emp1;
	}
	
	

	@Override
	public LoginResponseDto  empLoginService(LoginRequestDto lRDto) {
		// TODO Auto-generated method stub
		Employee emp =  employeeRepository.findByPersonalMail(lRDto.getpersonalMail()).orElseThrow(() ->  new EmployeeException("There is no emp with this email "+ lRDto.getpersonalMail()) );
		if(encoder.matches(lRDto.getPassword(),emp.getPassword())) {
			return new LoginResponseDto("Login Successful",null);
			
		}else {
			throw new EmployeeException("Credentials did not match");
		}
		
		
	}


}
