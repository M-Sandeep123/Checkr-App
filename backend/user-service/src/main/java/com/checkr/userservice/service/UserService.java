package com.checkr.userservice.service;

import com.checkr.userservice.dto.UserDto;

import java.util.List;

public interface UserService {
    List<UserDto> getAllUsers();
    UserDto getById(long id);
    UserDto add(UserDto newUser);
}
