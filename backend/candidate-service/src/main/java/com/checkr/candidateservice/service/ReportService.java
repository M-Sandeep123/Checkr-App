package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.ReportDto;

import java.util.List;

public interface ReportService {
     List<ReportDto>  getAllReports();
     ReportDto getReportById(int reportId);
     ReportDto updateReport(int reportId,ReportDto reportDto);
     ReportDto getReportByCandidateId(int candidateId);
}
