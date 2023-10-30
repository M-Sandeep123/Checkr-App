package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CandidateCourtSearchDto;
import com.checkr.candidateservice.service.CandidateCourtSearchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/candidatecourtsearches")
public class CandidateCourtSearchController {
    private CandidateCourtSearchService candidateCourtSearchService;

    public CandidateCourtSearchController(CandidateCourtSearchService candidateCourtSearchService) {
        this.candidateCourtSearchService = candidateCourtSearchService;
    }

    @GetMapping()
    public ResponseEntity<List<CandidateCourtSearchDto>> getAllCandidateCourtSearches() {
        try {
            List<CandidateCourtSearchDto> candidateCourtSearchDtoList = candidateCourtSearchService.getAllCandidateCourtSearches();
            return ResponseEntity.ok(candidateCourtSearchDtoList);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }

    }
    @GetMapping("/{id}")
    public ResponseEntity<CandidateCourtSearchDto> getCourtSearchById(@PathVariable("id") int id) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            CandidateCourtSearchDto candidateCourtSearchDto = candidateCourtSearchService.getCandidateCourtSearchById(id);
            if (candidateCourtSearchDto == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(candidateCourtSearchDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/candidate/{candidateId}")
    public ResponseEntity<List<CandidateCourtSearchDto>> getCandidateCourtSearchByCandidateId(@PathVariable int candidateId) {
        try {
            if (candidateId <= 0) {
                return ResponseEntity.badRequest().build();
            }
            List<CandidateCourtSearchDto> candidateData =  candidateCourtSearchService.getCandidateCourtSearchByCandidateId(candidateId);
            return ResponseEntity.ok(candidateData);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
