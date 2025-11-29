package com.excelr.employee_management_system.config;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        String authHeader =     request.getHeader("Authorization");
//                                  Bearer 
//eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbisImIhdCI6MTY5NDA4Mzc4OCwiZXhwIjoxNjk0MDg1NTg4fQ.XbvPGEiHu59wBHLLvO_KH8jYb5o1Tdv- AKnPovDa-Mg
        String token = null;
        String username= null;
        String newToken = null;
        if(authHeader != null && authHeader.contains("Bearer ")) {
            token =  authHeader.substring(7);
            System.out.println("Token afetre substr "+token);
            username =         jwtService.extractUserName(token);
            System.out.println("userName "+username);
        }

        // authentication
        if(username != null && SecurityContextHolder.getContext().getAuthentication() == null) {

            UserDetails userDetails =         userDetailsService.loadUserByUsername(username);
            System.out.println("Authentication is called" + userDetails.getUsername());
            if(jwtService.validateToken(token, userDetails)) {
                UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(auth);

                // create a new token according next time period
                newToken =     jwtService.generateToken(username);
            }
        }

        if(newToken != null) {
            response.setHeader("Authorization", "Bearer " + newToken);
        }

        filterChain.doFilter(request, response);
    }


}
