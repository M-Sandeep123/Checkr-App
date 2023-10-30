package com.checkr.candidateservice.dto;

import com.checkr.candidateservice.entity.CourtSearch;
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
public class CourtSearchDto {
    private int id;
    private String name;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static CourtSearch convertCourtSearchtoToEntity(CourtSearchDto courtSearchDto){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(courtSearchDto, CourtSearch.class);
    }
    public static CourtSearchDto convertCourtSearchEntityToDto(CourtSearch courtSearch){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(courtSearch,CourtSearchDto.class);
    }
}
