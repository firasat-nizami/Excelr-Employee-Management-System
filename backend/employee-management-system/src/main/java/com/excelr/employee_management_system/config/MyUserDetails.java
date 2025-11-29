package com.excelr.employee_management_system.config;

import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.excelr.employee_management_system.entity.Employee;




public class MyUserDetails implements UserDetails {

	private String personalMail;
	
	private String password;
	
	private List<GrantedAuthority> authorities;
	
	
	public MyUserDetails() {
		
	}
	
	public MyUserDetails(Employee emp) {
		this.personalMail = emp.getPersonalMail();
		this.password = emp.getPassword();
		this.authorities = Arrays.stream(emp.getRoles().split(","))
							.map(SimpleGrantedAuthority::new )
							.collect(Collectors.toList());
			
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return this.authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return this.password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return this.personalMail;
	}


}
