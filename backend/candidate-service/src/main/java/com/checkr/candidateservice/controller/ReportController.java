package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.ReportDto;
import com.checkr.candidateservice.service.ReportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {
    private ReportService reportService;
    public ReportController(ReportService reportService) {
        this.reportService = reportService;
    }
    @GetMapping()
    public ResponseEntity<List<ReportDto>> getAllReports() {
        try {
            List<ReportDto> reportDtos = reportService.getAllReports();
            return ResponseEntity.ok(reportDtos);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }
    @GetMapping("/{id}")
    public ResponseEntity<ReportDto> getReportById(@PathVariable("id") int id){
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            ReportDto reportDto = reportService.getReportById(id);
            return ResponseEntity.ok(reportDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @PatchMapping("/{id}")
    public ResponseEntity<ReportDto> updateReport(@PathVariable("id") int id, @RequestBody ReportDto updatedReportDto) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            ReportDto reportDto = reportService.updateReport(id, updatedReportDto);
            return ResponseEntity.ok(reportDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @GetMapping("/candidate/{candidateId}")
    public ResponseEntity<ReportDto> getReportsByCandidateId(@PathVariable int candidateId) {
        try {
            if (candidateId <= 0) {
                return ResponseEntity.badRequest().build();
            }
            ReportDto reportData =  reportService.getReportByCandidateId(candidateId);
            return ResponseEntity.ok(reportData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}