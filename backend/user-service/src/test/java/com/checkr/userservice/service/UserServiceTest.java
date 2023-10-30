package com.checkr.userservice.service;

import com.checkr.userservice.dto.UserDto;
import com.checkr.userservice.entity.User;
import com.checkr.userservice.exception.UserNotFoundException;
import com.checkr.userservice.repository.UserRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.*;

class UserServiceTest {

private UserServiceImpl userService;
private UserRepository userRepository;
private ModelMapper modelMapper;

@BeforeEach
void setUp() {
    userRepository = mock(UserRepository.class);
    modelMapper = mock(ModelMapper.class);
    userService = new UserServiceImpl(userRepository, modelMapper);
}

@Test
void testGetById_UserFound() {
    long userId = 1L;
    User user = new User();
    user.setId(userId);
    user.setFirstName("John");
    user.setLastName("Smith");
    user.setEmail("john.smith@checkr.com");

    UserDto userDto = new UserDto();
    userDto.setId(userId);
    userDto.setFirstName("John");
    userDto.setLastName("Smith");
    userDto.setEmail("john.smith@checkr.com");

    when(userRepository.findById(userId)).thenReturn(Optional.of(user));
    when(modelMapper.map(user, UserDto.class)).thenReturn(userDto);

    UserDto result = userService.getById(userId);

    assertEquals(userDto, result);
    verify(userRepository, times(1)).findById(userId);
    verify(modelMapper, times(1)).map(user, UserDto.class);
}
    @Test
    void testGetUsers() {
        List<User> mockUsers = new ArrayList<>();
        mockUsers.add(new User());
        mockUsers.add(new User());
        when(userRepository.findAll()).thenReturn(mockUsers);
        List<UserDto> result = userService.getAllUsers();
        Assertions.assertEquals(2, result.size());
        verify(userRepository, times(1)).findAll();
    }
@Test
void testGetById_UserNotFound() {
    long userId = 1L;

    when(userRepository.findById(userId)).thenReturn(Optional.empty());

    assertThrows(UserNotFoundException.class, () -> userService.getById(userId));

    verify(userRepository, times(1)).findById(userId);
    verify(modelMapper, never()).map(any(), any());
}
@Test
void testAdd() {
    UserDto newUserDto = new UserDto();
    newUserDto.setId(1L);
    newUserDto.setFirstName("John");
    newUserDto.setLastName("Smith");
    newUserDto.setEmail("john.smith@checkr.com");
    User newUser = new User();
    newUser.setId(newUserDto.getId());
    newUser.setFirstName(newUserDto.getFirstName());
    newUser.setLastName(newUserDto.getLastName());
    newUser.setEmail(newUserDto.getEmail());

    when(modelMapper.map(newUserDto,User.class)).thenReturn(newUser);
    when(userRepository.save(any(User.class))).thenReturn(newUser);
    when(modelMapper.map(newUser,UserDto.class)).thenReturn(newUserDto);
    UserDto savedUserDto = userService.add(newUserDto);

    assertEquals(newUserDto.getId(), savedUserDto.getId());
    assertEquals(newUserDto.getFirstName(), savedUserDto.getFirstName());
    assertEquals(newUserDto.getLastName(), savedUserDto.getLastName());
    assertEquals(newUserDto.getEmail(), savedUserDto.getEmail());
}

}

