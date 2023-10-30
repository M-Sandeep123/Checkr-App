package com.checkr.candidateservice.service;

import com.checkr.candidateservice.entity.Report;
import com.checkr.candidateservice.dto.ReportDto;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ReportServiceImpl implements ReportService{
    private static final String REPORTNOTFOUND = "Report id not found - ";
    @Autowired
    private ReportRepository reportRepository;
    @Override
    public List<ReportDto> getAllReports() {
        List<Report> reports = reportRepository.findAll();
        return reports.stream()
                .map(ReportDto::convertReportEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public ReportDto getReportById(int reportId) {
        Optional<Report> result = reportRepository.findById(reportId);
        ReportDto theReportDto;
        if (result.isPresent()) {
            theReportDto = ReportDto.convertReportEntityToDto(result.get());
        } else {
            throw new NotFoundException(REPORTNOTFOUND + reportId);
        }
        return theReportDto;
    }

    @Override
    public ReportDto updateReport(int reportId,ReportDto reportDto) {
        Optional<Report> currentReport = reportRepository.findById(reportId);
        if(currentReport.isPresent()){
            Report existingReport = currentReport.get();
            existingReport.setReportAdjudication(reportDto.getReportAdjudication());
            Report updatedReport = reportRepository.save(existingReport);
            return ReportDto.convertReportEntityToDto(updatedReport);
        }
        else{
            throw new NotFoundException(REPORTNOTFOUND+reportId);
        }
    }

    @Override
    public ReportDto getReportByCandidateId(int candidateId) {
        Report report = reportRepository.findByCandidateId(candidateId);
        if(report!=null){
            return  ReportDto.convertReportEntityToDto(report);
        }
        else{
            throw new NotFoundException("Candidate not found with id - "+candidateId);
        }
    }
}