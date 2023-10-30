package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CourtSearchDto;
import com.checkr.candidateservice.service.CourtSearchService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/courtsearches")
public class CourtSearchController {
    private CourtSearchService courtSearchService;
    public CourtSearchController(CourtSearchService courtSearchService) {
        this.courtSearchService = courtSearchService;
    }
    @GetMapping()
    public ResponseEntity<List<CourtSearchDto>> getAllCourtSearches() {
        try {
            List<CourtSearchDto> courtSearchDto = courtSearchService.getAllCourtSearches();
            return ResponseEntity.ok(courtSearchDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<CourtSearchDto> getCourtSearchById(@PathVariable("id") int id){
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            CourtSearchDto courtSearchDto = courtSearchService.getCourtSearchById(id);
            return ResponseEntity.ok(courtSearchDto);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}