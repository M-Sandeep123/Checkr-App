package com.checkr.candidateservice.dto;

import com.checkr.candidateservice.entity.Report;
import com.checkr.candidateservice.enums.ReportAdjudication;
import com.checkr.candidateservice.enums.ReportStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReportDto {
    private int id;
    private String packageName;
    @Enumerated(EnumType.STRING)
    private ReportAdjudication reportAdjudication;
    @Enumerated(EnumType.STRING)
    private ReportStatus reportStatus;
    private LocalDateTime completedAt;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private int candidateId;
    private static ModelMapper modelMapper;
    static {
        modelMapper = new ModelMapper();
    }
    public static Report convertReportDtoToEntity(ReportDto reportDto){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(reportDto, Report.class);
    }
    public static ReportDto convertReportEntityToDto(Report report){
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        return modelMapper.map(report,ReportDto.class);
    }
}
