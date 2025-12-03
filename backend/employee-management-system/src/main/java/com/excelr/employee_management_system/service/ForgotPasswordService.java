package com.excelr.employee_management_system.service;

import java.beans.Transient;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.excelr.employee_management_system.entity.Employee;
import com.excelr.employee_management_system.entity.PasswordResetToken;
import com.excelr.employee_management_system.repository.EmployeeRepository;
import com.excelr.employee_management_system.repository.PasswordResetTokenRepository;

@Service 
public class ForgotPasswordService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private PasswordResetTokenRepository tokenRepo;

    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    // Generate OTP
    public String generateOtp() {
        return String.valueOf((int)(Math.random() * 900000) + 100000);
    }

    public String forgotPassword(String email) {
    	System.out.println("in emo "+email);
        Employee emp = employeeRepository.findByPersonalMail(email)
                .orElseThrow(() -> new RuntimeException("Email not found"));

        String otp = generateOtp();

        PasswordResetToken token = new PasswordResetToken();
        token.setEmail(email);
        token.setOtp(otp);
        token.setExpiryTime(LocalDateTime.now().plusMinutes(5));

        tokenRepo.save(token);

        // send mail
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP Code");
        message.setText("Your OTP for password reset is: " + otp);

        mailSender.send(message);

        return "OTP sent to email.";
    }
    
    public String verifyOtp(String email, String otp) {
    	System.out.println("Aaa "+email+"   "+otp);	
        PasswordResetToken token = tokenRepo.findByEmailAndOtp(email, otp)
                .orElseThrow(() -> new RuntimeException("Invalid OTP"));

        if (token.getExpiryTime().isBefore(LocalDateTime.now())) {
            throw new RuntimeException("OTP expired");
        }

        return "OTP verified, proceed to reset password";
    }
    
    @Transactional
    public String resetPassword(String email, String newPassword, String confirmPassword) {
    	
    	System.out.println(email + "  "+newPassword + " "+confirmPassword);

        if (!newPassword.equals(confirmPassword)) {
            throw new RuntimeException("Passwords do not match");
        }

        Employee emp = employeeRepository.findByPersonalMail(email)
                .orElseThrow(() -> new RuntimeException("Email not found"));

        emp.setPassword(passwordEncoder.encode(newPassword));
        employeeRepository.save(emp);

        // delete OTP after use
        tokenRepo.deleteByEmail(email);

        return "Password reset successfully.";
    }
}
