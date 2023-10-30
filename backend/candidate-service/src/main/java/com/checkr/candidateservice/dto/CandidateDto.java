package com.checkr.candidateservice.dto;
import com.checkr.candidateservice.entity.Candidate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CandidateDto {
    private int id;
    private String name;
    private String location;
    private String email;
    private Date dob;
    private String phoneNo;
    private int zipcode;
    private String socialSecurity;
    private String driverLicense;

    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static Candidate convertCandidateDtoToEntity(CandidateDto candidateDto){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidateDto,Candidate.class);
    }
    public static CandidateDto convertCandidateEntityToDto(Candidate candidate){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidate,CandidateDto.class);
    }
}