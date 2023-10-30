package com.checkr.userservice.entity;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "user")
public class User {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "userName")
    private String  userName;
    @Column(name = "firstName")
    private String firstName;
    @Column(name = "lastName")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "password")
    private String password;
    @Column(name = "dob")
    private String dob;
    @Column(name = "companyName")
    private String companyName;
}
