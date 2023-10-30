package com.checkr.candidateservice.dto;

import com.checkr.candidateservice.entity.CandidateCourtSearches;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CandidateCourtSearchDto {
    private int id;
    private String status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int candidateId;
    private int courtSearchId;
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static CandidateCourtSearches convertCandidateCourtSearchtoToEntity(CandidateCourtSearchDto candidateCourtSearchDto){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidateCourtSearchDto, CandidateCourtSearches.class);
    }
    public static CandidateCourtSearchDto convertCandidateCourtSearchEntityToDto(CandidateCourtSearches candidateCourtSearches){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(candidateCourtSearches,CandidateCourtSearchDto.class);
    }
}
