package com.checkr.userservice.controller;

import com.checkr.userservice.dto.Auth;
import com.checkr.userservice.service.JwtService;
import com.checkr.userservice.dto.UserDto;
import com.checkr.userservice.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JwtService jwtService;
    @GetMapping
    public List<UserDto> getAllUsers(){
        return userService.getAllUsers();
    }
    @GetMapping("/{id}")
    public UserDto getById(@PathVariable("id") long id){
        return userService.getById(id);
    }

    @PostMapping("/")
    public UserDto add(@RequestBody UserDto newUser){
        return userService.add(newUser);
    }
    @GetMapping("/users/validate")
    public String validateToken(@RequestParam("token") String token) {
        jwtService.validateToken(token);
        return "Token is valid";
    }

    @PostMapping("/token")
    public String getToken(@RequestBody Auth auth) {
        if(auth.getEmail()!=null && auth.getPassword()!=null)
            return jwtService.generateToken(auth.getEmail(),auth.getPassword());
        else
            return "unable to generate token";
    }
}