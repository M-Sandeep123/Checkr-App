package com.checkr.candidateservice.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "candidate")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Candidate {
    @Id
    @Column(name = "id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name = "location")
    private String location;
    @Column(name = "email")
    private String email;
    @Column(name = "dob")
    private Date dob;
    @Column(name = "phone_no")
    private String phoneNo;
    @Column(name = "zipcode")
    private int zipcode;
    @Column(name = "social_security")
    private String socialSecurity;
    @Column(name = "driver_license")
    private String driverLicense;

    @OneToOne(mappedBy = "candidate", cascade = CascadeType.ALL)
    @JsonIgnore
    private Report report;

    @OneToMany(mappedBy = "candidate", cascade = CascadeType.ALL)
    private List<CandidateCourtSearches> candidateCourtSearches;
}