package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CandidateCourtSearchDto;
import com.checkr.candidateservice.service.CandidateCourtSearchService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class CandidateCourtSearchControllerTest {
    private CandidateCourtSearchService candidateCourtSearchService;
    private CandidateCourtSearchController candidateCourtSearchController;
    @BeforeEach
    void setUp() {
        candidateCourtSearchService = mock(CandidateCourtSearchService.class);
        candidateCourtSearchController = new CandidateCourtSearchController(candidateCourtSearchService);
    }
    @Test
    void testGetAllCandidateCourtSearches_Success() {
        List<CandidateCourtSearchDto> expectedList = Arrays.asList(
                new CandidateCourtSearchDto(1, "clear", LocalDateTime.now(), LocalDateTime.now(), 1,1),
                new CandidateCourtSearchDto(2, "consider", LocalDateTime.now(), LocalDateTime.now(), 2,2)
        );
        when(candidateCourtSearchService.getAllCandidateCourtSearches()).thenReturn(expectedList);
        ResponseEntity<List<CandidateCourtSearchDto>> responseEntity = candidateCourtSearchController.getAllCandidateCourtSearches();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedList, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getAllCandidateCourtSearches();
    }
    @Test
    void testGetAllCandidateCourtSearchesInternalServerError() {
        when(candidateCourtSearchService.getAllCandidateCourtSearches()).thenThrow(new RuntimeException("Some error occurred"));
        ResponseEntity<List<CandidateCourtSearchDto>> responseEntity = candidateCourtSearchController.getAllCandidateCourtSearches();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getAllCandidateCourtSearches();
    }
    @Test
    void testGetCourtSearchByIdSuccess() {
        int id = 1;
        CandidateCourtSearchDto expectedDto = new CandidateCourtSearchDto(1, "clear", LocalDateTime.now(), LocalDateTime.now(), 1,1);
        when(candidateCourtSearchService.getCandidateCourtSearchById(id)).thenReturn(expectedDto);
        ResponseEntity<CandidateCourtSearchDto> responseEntity = candidateCourtSearchController.getCourtSearchById(id);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedDto, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getCandidateCourtSearchById(id);
    }
    @Test
    void testGetCourtSearchByIdInvalidId() {
        int invalidId = -1;
        ResponseEntity<CandidateCourtSearchDto> responseEntity = candidateCourtSearchController.getCourtSearchById(invalidId);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, never()).getCandidateCourtSearchById(invalidId);
    }
    @Test
    void testGetCourtSearchByIdNotFound() {
        int nonExistentId = 100;
        when(candidateCourtSearchService.getCandidateCourtSearchById(nonExistentId)).thenReturn(null);
        ResponseEntity<CandidateCourtSearchDto> responseEntity = candidateCourtSearchController.getCourtSearchById(nonExistentId);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getCandidateCourtSearchById(nonExistentId);
    }
    @Test
    void testGetCourtSearchByIdInternalServerError() {
        int id = 1;
        when(candidateCourtSearchService.getCandidateCourtSearchById(id)).thenThrow(new RuntimeException("Some error occurred"));
        ResponseEntity<CandidateCourtSearchDto> responseEntity = candidateCourtSearchController.getCourtSearchById(id);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getCandidateCourtSearchById(id);
    }
    @Test
    void testGetCandidateCourtSearchByCandidateIdSuccess() {
        int candidateId = 1;
        List<CandidateCourtSearchDto> expectedList = Arrays.asList(
                new CandidateCourtSearchDto(1, "clear", LocalDateTime.now(), LocalDateTime.now(), candidateId,1),
                new CandidateCourtSearchDto(2, "consider", LocalDateTime.now(), LocalDateTime.now(), candidateId,2)
        );
        when(candidateCourtSearchService.getCandidateCourtSearchByCandidateId(candidateId)).thenReturn(expectedList);
        ResponseEntity<List<CandidateCourtSearchDto>> responseEntity = candidateCourtSearchController.getCandidateCourtSearchByCandidateId(candidateId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedList, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getCandidateCourtSearchByCandidateId(candidateId);
    }
    @Test
    void testGetCandidateCourtSearchByCandidateIdInvalidId() {
        int invalidCandidateId = -1;
        ResponseEntity<List<CandidateCourtSearchDto>> responseEntity = candidateCourtSearchController.getCandidateCourtSearchByCandidateId(invalidCandidateId);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, never()).getCandidateCourtSearchByCandidateId(invalidCandidateId);
    }
    @Test
    void testGetCandidateCourtSearchByCandidateIdInternalServerError() {
        int candidateId = 1;
        when(candidateCourtSearchService.getCandidateCourtSearchByCandidateId(candidateId)).thenThrow(new RuntimeException("Some error occurred"));
        ResponseEntity<List<CandidateCourtSearchDto>> responseEntity = candidateCourtSearchController.getCandidateCourtSearchByCandidateId(candidateId);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(candidateCourtSearchService, times(1)).getCandidateCourtSearchByCandidateId(candidateId);
    }
}