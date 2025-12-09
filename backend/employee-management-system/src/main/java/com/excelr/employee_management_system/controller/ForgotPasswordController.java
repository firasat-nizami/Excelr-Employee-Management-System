package com.excelr.employee_management_system.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excelr.employee_management_system.service.ForgotPasswordService;

@RestController
@RequestMapping("/auth")
public class ForgotPasswordController {
	
	@Autowired
    private ForgotPasswordService authService;

	@PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestBody Map<String, String> req) {
        return ResponseEntity.ok(authService.forgotPassword(req.get("email")));
    }

    @PostMapping("/verify-otp")
    public ResponseEntity<?> verifyOtp(@RequestBody Map<String, String> req) {
        return ResponseEntity.ok(
                authService.verifyOtp(req.get("email"), req.get("otp"))
        );
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestBody Map<String, String> req) {
        return ResponseEntity.ok(
                authService.resetPassword(
                        req.get("email"),
                        req.get("newPassword"),
                        req.get("confirmPassword")
                )
        );
    }
}
