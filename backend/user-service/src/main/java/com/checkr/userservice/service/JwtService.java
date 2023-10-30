package com.checkr.userservice.service;

import com.checkr.userservice.entity.User;
import com.checkr.userservice.exception.UserNotFoundException;
import com.checkr.userservice.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Component
public class JwtService {

    @Value("${SECRET_ID}")
    private String SECRET;

    @Autowired
    private UserRepository userRepository;

    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJwt(token);
    }

    public String generateToken(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isEmpty()) {
            throw new UserNotFoundException("Unable to generate token");
        } else {
            if(password.equals(user.get().getPassword())) {
                Map<String, Object> claims = new HashMap<>();
                return createToken(claims, email);
            }
        }
        return "Unable to generate token";
    }

    private String createToken(Map<String, Object> claims, String userName) {
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(userName)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+1000*60*30))
                .signWith(getSignKey(), SignatureAlgorithm.HS256).compact();
    }

    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);

        return Keys.hmacShaKeyFor(keyBytes);
    }


}
