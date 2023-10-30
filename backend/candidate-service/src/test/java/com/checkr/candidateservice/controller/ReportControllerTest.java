package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.ReportDto;
import com.checkr.candidateservice.enums.ReportAdjudication;
import com.checkr.candidateservice.enums.ReportStatus;
import com.checkr.candidateservice.service.ReportService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ReportControllerTest {
    @Mock
    private ReportService reportService;
    @InjectMocks
    private ReportController reportController;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllReports_Success() {
        // Arrange
        List<ReportDto> expectedList = Arrays.asList(
                new ReportDto(1, "Employee Pro", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1),
                new ReportDto(2, "Employee Pro", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 2)
        );
        when(reportService.getAllReports()).thenReturn(expectedList);
        ResponseEntity<List<ReportDto>> responseEntity = reportController.getAllReports();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedList, responseEntity.getBody());
        verify(reportService, times(1)).getAllReports();
    }
    @Test
    void testGetAllReports_InternalServerError() {
        when(reportService.getAllReports()).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<List<ReportDto>> responseEntity = reportController.getAllReports();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, times(1)).getAllReports();
    }
    @Test
    void testGetReportById_Success() {
        int existingId = 1;
        ReportDto expectedReport = new ReportDto(existingId, "Employee Pro", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1);
        when(reportService.getReportById(existingId)).thenReturn(expectedReport);
        ResponseEntity<ReportDto> responseEntity = reportController.getReportById(existingId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedReport, responseEntity.getBody());
        verify(reportService, times(1)).getReportById(existingId);
    }
    @Test
    void testGetReportById_BadRequest() {
        int invalidId = -1;
        ResponseEntity<ReportDto> responseEntity = reportController.getReportById(invalidId);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, never()).getReportById(anyInt());
    }
    @Test
    void testGetReportById_InternalServerError() {
        int existingId = 1;
        when(reportService.getReportById(existingId)).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<ReportDto> responseEntity = reportController.getReportById(existingId);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, times(1)).getReportById(existingId);
    }
    @Test
    void testUpdateReport_Success() {
        int existingId = 1;
        ReportDto updatedReportDto = new ReportDto(existingId, "Employee Plus Pro", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1);
        when(reportService.updateReport(existingId, updatedReportDto)).thenReturn(updatedReportDto);
        ResponseEntity<ReportDto> responseEntity = reportController.updateReport(existingId, updatedReportDto);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(updatedReportDto, responseEntity.getBody());
        verify(reportService, times(1)).updateReport(existingId, updatedReportDto);
    }
    @Test
    void testUpdateReport_BadRequest() {
        int invalidId = -1;
        ReportDto updatedReportDto = new ReportDto(1, "Updated Package", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1);
        ResponseEntity<ReportDto> responseEntity = reportController.updateReport(invalidId, updatedReportDto);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, never()).updateReport(anyInt(), any(ReportDto.class));
    }
    @Test
    void testUpdateReport_InternalServerError() {
        int existingId = 1;
        ReportDto updatedReportDto = new ReportDto(existingId, "Updated Package", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1);
        when(reportService.updateReport(existingId, updatedReportDto)).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<ReportDto> responseEntity = reportController.updateReport(existingId, updatedReportDto);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, times(1)).updateReport(existingId, updatedReportDto);
    }
    @Test
    void testGetReportsByCandidateId_Success() {
        int candidateId = 1;
        ReportDto expectedReportDto = new ReportDto(1, "Employee Pro", ReportAdjudication.engage, ReportStatus.clear, LocalDateTime.now(), LocalDateTime.now(), LocalDateTime.now(), 1);
        when(reportService.getReportByCandidateId(candidateId)).thenReturn(expectedReportDto);
        ResponseEntity<ReportDto> responseEntity = reportController.getReportsByCandidateId(candidateId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedReportDto, responseEntity.getBody());
        verify(reportService, times(1)).getReportByCandidateId(candidateId);
    }
    @Test
    void testGetReportsByCandidateId_BadRequest() {
        int invalidCandidateId = -1;
        ResponseEntity<ReportDto> responseEntity = reportController.getReportsByCandidateId(invalidCandidateId);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, never()).getReportByCandidateId(anyInt());
    }
    @Test
    void testGetReportsByCandidateId_InternalServerError() {
        int candidateId = 1;
        when(reportService.getReportByCandidateId(candidateId)).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<ReportDto> responseEntity = reportController.getReportsByCandidateId(candidateId);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(reportService, times(1)).getReportByCandidateId(candidateId);
    }
}