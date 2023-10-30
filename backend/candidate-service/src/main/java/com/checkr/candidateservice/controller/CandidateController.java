package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CandidateDto;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.service.CandidateService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/candidates")
public class CandidateController {
    private CandidateService candidateService;
    public CandidateController(CandidateService candidateService){
        this.candidateService = candidateService;
    }
    @GetMapping()
    public ResponseEntity<List<CandidateDto>> getAllCandidates() {
        try {
            List<CandidateDto> candidateDto = candidateService.getCandidates();
            return ResponseEntity.ok(candidateDto);
        } catch (Exception e) {
            throw new NotFoundException("Error fetching all candidates - " + e);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<CandidateDto> getCandidate(@PathVariable("id") int id) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            CandidateDto candidateDto = candidateService.getCandidateById(id);
            return ResponseEntity.ok(candidateDto);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
