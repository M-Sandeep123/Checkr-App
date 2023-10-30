package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CourtSearchDto;

import java.util.List;

public interface CourtSearchService {
    List<CourtSearchDto> getAllCourtSearches();
    CourtSearchDto getCourtSearchById(int id);
}