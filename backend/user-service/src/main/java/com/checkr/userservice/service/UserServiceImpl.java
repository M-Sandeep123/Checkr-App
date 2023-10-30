package com.checkr.userservice.service;

import com.checkr.userservice.dto.UserDto;
import com.checkr.userservice.entity.User;
import com.checkr.userservice.exception.UserNotFoundException;
import com.checkr.userservice.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService{
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper){
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }
    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    @Override
    public UserDto getById(long id){
        return convertToDto(userRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException("User is not found of id number: "+id)));
    }

    @Override
    public UserDto add(UserDto newUser){
        return convertToDto(
                userRepository.save(
                        convertToEntity(newUser)
                ));
    }

    private UserDto convertToDto(User user){
        return modelMapper.map(user, UserDto.class);
    }

    private User convertToEntity(UserDto userDto){
        return modelMapper.map(userDto, User.class);
    }

}