package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CandidateDto;
import com.checkr.candidateservice.service.CandidateService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CandidateControllerTest {
    @Mock
    private CandidateService candidateService;
    @InjectMocks
    private CandidateController candidateController;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllCandidates() {
        when(candidateService.getCandidates()).thenReturn(Collections.emptyList());
        ResponseEntity<List<CandidateDto>> responseEntity = candidateController.getAllCandidates();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(Collections.emptyList(), responseEntity.getBody());
        verify(candidateService, times(1)).getCandidates();
    }
    @Test
    void testGetAllCandidatesException() {
        when(candidateService.getCandidates()).thenThrow(new RuntimeException("Some error occurred"));
        assertThrows(RuntimeException.class, () -> candidateController.getAllCandidates());
        verify(candidateService, times(1)).getCandidates();
    }
    @Test
    void testGetCandidate_ValidId() {
        int id = 1;
        CandidateDto candidateDto = new CandidateDto();
        when(candidateService.getCandidateById(id)).thenReturn(candidateDto);
        ResponseEntity<CandidateDto> responseEntity = candidateController.getCandidate(id);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(candidateDto, responseEntity.getBody());
        verify(candidateService, times(1)).getCandidateById(id);
    }
    @Test
    void testGetCandidate_InvalidId() {
        ResponseEntity<CandidateDto> responseEntity = candidateController.getCandidate(-1);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateService, never()).getCandidateById(anyInt());
    }
    @Test
    void testGetCandidate_NotFound() {
        int id = 100;
        doThrow(new RuntimeException("Candidate not found")).when(candidateService).getCandidateById(id);
        ResponseEntity<CandidateDto> responseEntity = candidateController.getCandidate(id);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertNull(responseEntity.getBody());
        verify(candidateService, times(1)).getCandidateById(id);
    }
}