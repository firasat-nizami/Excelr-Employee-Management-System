package com.excelr.employee_management_system.config;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import com.excelr.employee_management_system.entity.Employee;
import com.excelr.employee_management_system.repository.EmployeeRepository;




public class MyUserDetailsService implements UserDetailsService{
	@Autowired
	private EmployeeRepository empRepository;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		
		Employee emp = empRepository.findByPersonalMail(email).orElseThrow(()-> new UsernameNotFoundException("User not found with  "+email));
		UserDetails uds = new MyUserDetails(emp);
		return uds;
	}

}
