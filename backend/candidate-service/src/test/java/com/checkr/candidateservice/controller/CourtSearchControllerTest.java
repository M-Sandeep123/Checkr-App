package com.checkr.candidateservice.controller;

import com.checkr.candidateservice.dto.CourtSearchDto;
import com.checkr.candidateservice.service.CourtSearchService;
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

class CourtSearchControllerTest {
    @Mock
    private CourtSearchService courtSearchService;
    @InjectMocks
    private CourtSearchController courtSearchController;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetAllCourtSearches_Success() {
        List<CourtSearchDto> expectedList = Arrays.asList(
                new CourtSearchDto(1, "Sex Offender", LocalDateTime.now(), LocalDateTime.now()),
                new CourtSearchDto(2, "Federal Criminal", LocalDateTime.now(), LocalDateTime.now())
        );
        when(courtSearchService.getAllCourtSearches()).thenReturn(expectedList);
        ResponseEntity<List<CourtSearchDto>> responseEntity = courtSearchController.getAllCourtSearches();
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedList, responseEntity.getBody());
        verify(courtSearchService, times(1)).getAllCourtSearches();
    }
    @Test
    void testGetAllCourtSearches_InternalServerError() {
        when(courtSearchService.getAllCourtSearches()).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<List<CourtSearchDto>> responseEntity = courtSearchController.getAllCourtSearches();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(courtSearchService, times(1)).getAllCourtSearches();
    }
    @Test
    void testGetCourtSearchById_Success() {
        int existingId = 1;
        CourtSearchDto expectedCourtSearch = new CourtSearchDto(existingId, "SSN Verification", LocalDateTime.now(), LocalDateTime.now());
        when(courtSearchService.getCourtSearchById(existingId)).thenReturn(expectedCourtSearch);
        ResponseEntity<CourtSearchDto> responseEntity = courtSearchController.getCourtSearchById(existingId);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(expectedCourtSearch, responseEntity.getBody());
        verify(courtSearchService, times(1)).getCourtSearchById(existingId);
    }
    @Test
    void testGetCourtSearchById_BadRequest() {
        int invalidId = -1;
        ResponseEntity<CourtSearchDto> responseEntity = courtSearchController.getCourtSearchById(invalidId);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(courtSearchService, never()).getCourtSearchById(anyInt());
    }
    @Test
    void testGetCourtSearchById_InternalServerError() {
        int existingId = 1;
        when(courtSearchService.getCourtSearchById(existingId)).thenThrow(new RuntimeException("Test Exception"));
        ResponseEntity<CourtSearchDto> responseEntity = courtSearchController.getCourtSearchById(existingId);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
        verify(courtSearchService, times(1)).getCourtSearchById(existingId);
    }
}