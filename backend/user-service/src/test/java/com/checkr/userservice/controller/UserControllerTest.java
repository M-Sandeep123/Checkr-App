package com.checkr.userservice.controller;

import com.checkr.userservice.dto.Auth;
import com.checkr.userservice.dto.UserDto;
import com.checkr.userservice.entity.User;
import com.checkr.userservice.service.JwtService;
import com.checkr.userservice.service.UserServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class UserControllerTest {

    @Mock
    private UserServiceImpl userService;
    @Mock
    private JwtService jwtService;
    @InjectMocks
    private UserController userController;

    private MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(userController).build();
    }
    @Test
    void testGetAllUsers() {
        List<UserDto> userDtoList = new ArrayList<>();
        userDtoList.add(new UserDto());
        userDtoList.add(new UserDto());
        when(userService.getAllUsers()).thenReturn(userDtoList);
        List<UserDto> userDtoListt = userController.getAllUsers();
        assertEquals(2, userDtoListt.size());
        verify(userService, times(1)).getAllUsers();
    }
    @Test
    void testGetUserById() throws Exception {
        long userId = 1L;
        UserDto userDto = new UserDto();
        userDto.setId(userId);
        userDto.setFirstName("John");
        userDto.setLastName("Smith");
        userDto.setEmail("john.smith@example.com");

        when(userService.getById(userId)).thenReturn(userDto);

        mockMvc.perform(get("/user/{id}", userId))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(userId))
                .andExpect(jsonPath("$.firstName").value("John"))
                .andExpect(jsonPath("$.lastName").value("Smith"))
                .andExpect(jsonPath("$.email").value("john.smith@example.com"));
    }

    @Test
    void testGetUserById_NotFound() throws Exception {
        long userId = 7L;
        when(userService.getById(userId)).thenReturn(null);

        mockMvc.perform(get("/user/{id}", userId))
                .andExpect(status().isOk());
    }
    @Test
    void testAddUser() throws Exception {
        User user = new User();
        user.setFirstName("Jane");
        user.setLastName("Smith");
        user.setEmail("jane.smith@example.com");
        user.setPassword("password123");

        UserDto userDto = new UserDto();
        userDto.setId(1L);
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setEmail(user.getEmail());

        when(userService.add(any(UserDto.class))).thenReturn(userDto);

        mockMvc.perform(post("/user/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"firstName\": \"Jane\", \"lastName\": \"Smith\", \"email\": \"jane.smith@example.com\", \"password\": \"password123\" }"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(1L))
                .andExpect(jsonPath("$.firstName").value("Jane"))
                .andExpect(jsonPath("$.lastName").value("Smith"))
                .andExpect(jsonPath("$.email").value("jane.smith@example.com"));
    }
    @Test
    void testGetTokenWithAuthNull()
    {
        Auth authRequest = new Auth();
        when(jwtService.generateToken(authRequest.getEmail(),authRequest.getPassword())).thenReturn("unable to generate token");
        assertEquals("unable to generate token",userController.getToken(authRequest));
    }
    @Test
    void testGetTokenWithAuth()
    {
        String expectedToken = "validToken";
        Auth authRequest = new Auth("test@gmail.com","test@123");
        when(jwtService.generateToken(authRequest.getEmail(),authRequest.getPassword())).thenReturn(expectedToken);
        assertEquals(expectedToken,userController.getToken(authRequest));
    }
    @Test
    void testGetTokenWithAuthPasswordNull()
    {
        Auth authRequest = new Auth("test@gmail.com",null);
        when(jwtService.generateToken(authRequest.getEmail(),authRequest.getPassword())).thenReturn("unable to generate token");
        assertEquals("unable to generate token",userController.getToken(authRequest));
    }
    @Test
    void testValidateToken() {
        String email = "test@gmail.com";
        String generatedToken = "validtoken";
        jwtService.validateToken(generatedToken);
        assertEquals("Token is valid",userController.validateToken(generatedToken));
    }
}