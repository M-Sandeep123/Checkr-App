package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CandidateCourtSearchDto;
import com.checkr.candidateservice.entity.CandidateCourtSearches;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CandidateCourtSearchRepository;
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
import static org.mockito.Mockito.when;

class CandidateCourtSearchImplTest {
    @Mock
    private CandidateCourtSearchRepository candidateCourtSearchRepository;
    @InjectMocks
    private CandidateCourtSearchImpl candidateCourtSearchService;
    private CandidateCourtSearches candidateCourtSearch;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        candidateCourtSearch = new CandidateCourtSearches();
        candidateCourtSearch.setId(1);
        candidateCourtSearch.setStatus("clear");
        List<CandidateCourtSearches> allCandidateCourtSearches = new ArrayList<>();
        allCandidateCourtSearches.add(candidateCourtSearch);
        when(candidateCourtSearchRepository.findAll()).thenReturn(allCandidateCourtSearches);
        when(candidateCourtSearchRepository.findById(1)).thenReturn(Optional.of(candidateCourtSearch));
        when(candidateCourtSearchRepository.findById(999)).thenReturn(Optional.empty());
        List<CandidateCourtSearches> candidateCourtSearchesByCandidateId = new ArrayList<>();
        candidateCourtSearchesByCandidateId.add(candidateCourtSearch);
        when(candidateCourtSearchRepository.findByCandidateId(1)).thenReturn(candidateCourtSearchesByCandidateId);
        when(candidateCourtSearchRepository.findByCandidateId(999)).thenReturn(new ArrayList<>());
    }
    @Test
    void testGetCandidateCourtSearches() {
        List<CandidateCourtSearches> mockCandidateCourtSearches = new ArrayList<>();
        mockCandidateCourtSearches.add(new CandidateCourtSearches());
        mockCandidateCourtSearches.add(new CandidateCourtSearches());
        when(candidateCourtSearchRepository.findAll()).thenReturn(mockCandidateCourtSearches);
        List<CandidateCourtSearchDto> result = candidateCourtSearchService.getAllCandidateCourtSearches();
        Assertions.assertEquals(2, result.size());
        verify(candidateCourtSearchRepository, times(1)).findAll();
    }
    @Test
    void testGetCandidateCourtSearchById_CourtSearchExists_ReturnCandidateCourtSearchDTO() {
        int id = 1;
        CandidateCourtSearches candidateCourtSearches = new CandidateCourtSearches();
        candidateCourtSearches.setId(id);
        when(candidateCourtSearchRepository.findById(id)).thenReturn(Optional.of(candidateCourtSearches));
        CandidateCourtSearchDto candidateCourtSearchDto = candidateCourtSearchService.getCandidateCourtSearchById(id);
        assertNotNull(candidateCourtSearchDto);
        assertEquals(id, candidateCourtSearchDto.getId());
    }
    @Test
    void testGetById_NonExistingCandidateCourtSearch() {
        int courtSearchId = 1;
        when(candidateCourtSearchRepository.findById(courtSearchId)).thenReturn(Optional.empty());
        NotFoundException exception = Assertions.assertThrows(NotFoundException.class,
                () -> candidateCourtSearchService.getCandidateCourtSearchById(courtSearchId));
        assertEquals("Candidate Court search not found with id - " + courtSearchId, exception.getMessage());
    }
    @Test
    void testGetCandidateCourtSearchByCandidateId_ExistingCandidateId() {
        List<CandidateCourtSearchDto> candidateCourtSearchDtoList = candidateCourtSearchService.getCandidateCourtSearchByCandidateId(1);
        assertEquals(1, candidateCourtSearchDtoList.size());
    }
    @Test
    void testGetCandidateCourtSearchByCandidateId_NonExistingCandidateId() {
        List<CandidateCourtSearchDto> candidateCourtSearchDtoList = candidateCourtSearchService.getCandidateCourtSearchByCandidateId(999);
        assertEquals(0, candidateCourtSearchDtoList.size());
    }
}
