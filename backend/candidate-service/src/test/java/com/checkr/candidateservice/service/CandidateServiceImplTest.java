package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CandidateDto;
import com.checkr.candidateservice.entity.Candidate;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CandidateRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.*;

class CandidateServiceImplTest {
    @Mock
    private CandidateRepository candidateRepository;
    @InjectMocks
    private CandidateServiceImpl candidateService;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetCandidates() {
        List<Candidate> mockCandidates = new ArrayList<>();
        mockCandidates.add(new Candidate());
        mockCandidates.add(new Candidate());
        when(candidateRepository.findAll()).thenReturn(mockCandidates);
        List<CandidateDto> result = candidateService.getCandidates();
        Assertions.assertEquals(2, result.size());
        verify(candidateRepository, times(1)).findAll();
    }
    @Test
    void testGetCandidateById_CandidateExists_ReturnCandidateDTO() {
        int id = 1;
        Candidate candidate = new Candidate();
        candidate.setId(id);
        when(candidateRepository.findById(id)).thenReturn(Optional.of(candidate));
        CandidateDto candidateDto = candidateService.getCandidateById(id);
        assertNotNull(candidateDto);
        assertEquals(id, candidateDto.getId());
    }
    @Test
    void testGetById_NonExistingCandidate() {
        int candidateId = 1;
        when(candidateRepository.findById(candidateId)).thenReturn(Optional.empty());
        NotFoundException exception = Assertions.assertThrows(NotFoundException.class,
                () -> candidateService.getCandidateById(candidateId));
        assertEquals("Candidate id not found - " + candidateId, exception.getMessage());
    }
}
