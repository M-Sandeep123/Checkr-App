package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.ReportDto;
import com.checkr.candidateservice.entity.Report;
import com.checkr.candidateservice.enums.ReportAdjudication;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.ReportRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

class ReportServiceImplTest {
    @Mock
    private ReportRepository reportRepository;
    @InjectMocks
    private ReportServiceImpl reportService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllReports() {
        List<Report> mockReports = new ArrayList<>();
        mockReports.add(new Report());
        mockReports.add(new Report());
        when(reportRepository.findAll()).thenReturn(mockReports);
        List<ReportDto> result = reportService.getAllReports();
        Assertions.assertEquals(2, result.size());
        verify(reportRepository, times(1)).findAll();
    }
    @Test
    void testGetReportById_ReportExists_ReturnReportDTO() {
        int id = 1;
        Report report = new Report();
        report.setId(id);
        when(reportRepository.findById(id)).thenReturn(Optional.of(report));
        ReportDto reportDto = reportService.getReportById(id);
        assertNotNull(reportDto);
        assertEquals(id, reportDto.getId());
    }
    @Test
    void testGetById_NonExistingReport() {
        int reportId = 1;
        when(reportRepository.findById(reportId)).thenReturn(Optional.empty());
        NotFoundException exception = Assertions.assertThrows(NotFoundException.class,
                () -> reportService.getReportById(reportId));
        assertEquals("Report id not found - " + reportId, exception.getMessage());
    }
   @Test
    void testUpdateReport_Success() {
        int id = 1;
        ReportDto reportDto = new ReportDto();
        reportDto.setReportAdjudication(ReportAdjudication.engage);
        Report existingReport = new Report();
        existingReport.setId(id);
        Report updatedReport = new Report();
        updatedReport.setId(id);
        updatedReport.setReportAdjudication(reportDto.getReportAdjudication());
        when(reportRepository.findById(id)).thenReturn(Optional.of(existingReport));
        when(reportRepository.save(existingReport)).thenReturn(updatedReport);
        ReportDto updatedDto = reportService.updateReport(id, reportDto);
        assertNotNull(updatedDto);
        assertEquals(id, updatedDto.getId());
        assertEquals(reportDto.getReportAdjudication(), updatedDto.getReportAdjudication());
    }
    @Test
    void testUpdateReportById_ReportDoesNotExist_ThrowReportNotFoundException() {
        int reportId = 41;
        ReportDto updatedReport = new ReportDto();
        updatedReport.setReportAdjudication(ReportAdjudication.engage);
        when(reportRepository.findById(reportId)).thenReturn(Optional.empty());
        NotFoundException exception = Assertions.assertThrows(NotFoundException.class,
                () -> reportService.updateReport(41,updatedReport));
        assertEquals("Report id not found - " + reportId, exception.getMessage());
    }
    @Test
    void testGetReportByCandidateIdReportFound() {
        int candidateId = 123;
        Report report = new Report();
        when(reportRepository.findByCandidateId(candidateId)).thenReturn(report);
        ReportDto reportDto = reportService.getReportByCandidateId(candidateId);
        assertNotNull(reportDto);
    }
    @Test
    void testGetReportByCandidateIdReportNotFound() {
        int candidateId = 123;
        when(reportRepository.findByCandidateId(candidateId)).thenReturn(null);
        assertThrows(NotFoundException.class, () -> {
            reportService.getReportByCandidateId(candidateId);
        });
    }
}
