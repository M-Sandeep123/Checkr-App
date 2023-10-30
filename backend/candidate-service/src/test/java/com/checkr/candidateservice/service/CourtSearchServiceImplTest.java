package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CourtSearchDto;
import com.checkr.candidateservice.entity.CourtSearch;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CourtSearchRepository;
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

class CourtSearchServiceImplTest {
    @Mock
    private CourtSearchRepository courtSearchRepository;
    @InjectMocks
    private CourtSearchServiceImpl courtSearchService;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    @Test
    void testGetCourtSearches() {
        List<CourtSearch> mockCourtSearches = new ArrayList<>();
        mockCourtSearches.add(new CourtSearch());
        mockCourtSearches.add(new CourtSearch());
        when(courtSearchRepository.findAll()).thenReturn(mockCourtSearches);
        List<CourtSearchDto> result = courtSearchService.getAllCourtSearches();
        Assertions.assertEquals(2, result.size());
        verify(courtSearchRepository, times(1)).findAll();
    }
    @Test
    void testGetCourtSearchById_CourtSearchExists_ReturnCourtSearchDTO() {
        int id = 1;
        CourtSearch courtSearch = new CourtSearch();
        courtSearch.setId(id);
        when(courtSearchRepository.findById(id)).thenReturn(Optional.of(courtSearch));
        CourtSearchDto courtSearchDto = courtSearchService.getCourtSearchById(id);
        assertNotNull(courtSearchDto);
        assertEquals(id, courtSearchDto.getId());
    }
    @Test
    void testGetById_NonExistingCourtSearch() {
        int courtSearchId = 1;
        when(courtSearchRepository.findById(courtSearchId)).thenReturn(Optional.empty());
        NotFoundException exception = Assertions.assertThrows(NotFoundException.class,
                () -> courtSearchService.getCourtSearchById(courtSearchId));
        assertEquals("Court search not found with id - " + courtSearchId, exception.getMessage());
    }
}
