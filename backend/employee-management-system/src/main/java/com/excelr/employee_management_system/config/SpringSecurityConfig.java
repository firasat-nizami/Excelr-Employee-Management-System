package com.excelr.employee_management_system.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.bind.annotation.CrossOrigin;


@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {
	
	@Autowired
	public JwtFilter jwtFilter;
	
	@Bean
	public SecurityFilterChain customizeSecurity(HttpSecurity http) throws Exception {
		
		
		http.csrf(csrf -> csrf.disable())
		.authorizeHttpRequests(auth -> {
			auth.requestMatchers("/api/employees/login","/auth/forgot-password","/auth/verify-otp","/auth/reset-password").permitAll()
			.requestMatchers(HttpMethod.GET,"/api/employees/**").permitAll()
			.requestMatchers(HttpMethod.DELETE,"/api/employees/**").permitAll()
			.requestMatchers(HttpMethod.OPTIONS).permitAll()
			.requestMatchers(HttpMethod.POST,"/auth").permitAll()
			.requestMatchers(HttpMethod.POST,"/api/employees").hasRole("ADMIN")
			.anyRequest().authenticated();
		})
		.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
		.authenticationProvider(authentication())
		.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
		
		return http.build();
	}
	
	@Bean
	public UserDetailsService service() {
		return new MyUserDetailsService();
	}
	
	
	@Bean
	@SuppressWarnings("deprecation")
	public AuthenticationProvider authentication() {
		DaoAuthenticationProvider daoAuth = new DaoAuthenticationProvider();
		daoAuth.setUserDetailsService(service());
		daoAuth.setPasswordEncoder(encoder());
		
		 return daoAuth;
	}
	
	@Bean
	public PasswordEncoder encoder() {
		
		return new BCryptPasswordEncoder();
	}
	
	 @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	        return config.getAuthenticationManager();
	    }
	}


