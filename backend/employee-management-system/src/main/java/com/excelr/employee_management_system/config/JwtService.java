package com.excelr.employee_management_system.config;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;



@Component
public class JwtService {
	
	 private final String SECERT = "mmFWroAYa4iKNJVIcNXsKEQGVfSTrh+m71f1w9i2q7w4sekIMnf9pHHwQbE7pxUC8UXZNnfjXJgtHy04B/SzEcafULoyw5ApL/6v319BfsoXtfxMhzgcmZSBNTjdt+Uq1n4C8BAXCT0p7U9bsUz0wvbAkuZn68gVLV3ndJ+Al7QzSIVMe1t6Z34yOspcP0oZyqqDWlfnJORd3XoczZ5S+WfP2m0Rmg5yxSBjr32rFPFmnxPwUtaJ27mDqoJ477ukWLWGrd91OceEL0VaRXecNVh10bawlct7TjiuqQZIP3XoIZ8ZZSGmihck2afnz2VdQDxBe89DgCIbaxjzf5XvxCwe=";

			     public String generateToken(String username) {
			         Map<String, Object> claims = new HashMap<>();

			         return createToken(username, claims);
			     }

			     private String createToken(String username, Map<String, Object> claims) {
			         // TODO Auto-generated method stub

			         return Jwts
			                 .builder()
			                 .setClaims(claims)
			                 .setSubject(username)
			                 .setIssuedAt(new Date(System.currentTimeMillis()))
			                 .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
			                 .signWith(SignatureAlgorithm.HS256,getSignKey())
			                 .compact();
			     }
			     
			     private Key getSignKey() {
			    	    // TODO Auto-generated method stub
			    	    byte[] keyCodes =     Decoders.BASE64.decode(SECERT);
			    	    return Keys.hmacShaKeyFor(keyCodes);
			    	}

			    	public String extractUserName(String token) {
			    	    return extractClaim(token, Claims::getSubject);
			    	}

			    	private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
			    	    // TODO Auto-generated method stub
			    	    final Claims claims = extractAllClaims(token);
			    	    return claimsResolver.apply(claims);
			    	}

			    	private Claims extractAllClaims(String token) {
			    	    return Jwts
			    	            .parserBuilder()
			    	            .setSigningKey(getSignKey())
			    	            .build()
			    	            .parseClaimsJws(token)
			    	            .getBody();
			    	}
			    	
			    	private Boolean isTokenExpired(String token) {
			    	    return extractExpiration(token).before(new Date());
			    	}

			    	private Date extractExpiration(String token) {
			    	    return extractClaim(token, Claims::getExpiration);
			    	}

			    	public Boolean validateToken(String token, UserDetails userDetails) {
			    	    final String  username = extractUserName(token);
			    	    return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
			    	}
}
