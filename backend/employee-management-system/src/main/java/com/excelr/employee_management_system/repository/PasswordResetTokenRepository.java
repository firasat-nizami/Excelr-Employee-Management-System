package com.excelr.employee_management_system.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.excelr.employee_management_system.entity.PasswordResetToken;

public interface PasswordResetTokenRepository extends JpaRepository<PasswordResetToken, Long> {

Optional<PasswordResetToken> findByEmail(String email);

Optional<PasswordResetToken> findByEmailAndOtp(String email, String otp);

Optional<PasswordResetToken> deleteByEmail(String email);


}