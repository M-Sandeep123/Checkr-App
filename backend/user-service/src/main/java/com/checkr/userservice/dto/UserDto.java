package com.checkr.userservice.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private long id;
    private String userName;
    private String password;
    private String firstName;
    private String lastName;
    private String email;
    private String dob;
    private String companyName;
}
