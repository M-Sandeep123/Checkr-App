package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CandidateCourtSearchDto;

import java.util.List;

public interface CandidateCourtSearchService {
    List<CandidateCourtSearchDto> getAllCandidateCourtSearches();
    CandidateCourtSearchDto getCandidateCourtSearchById(int id);
    List<CandidateCourtSearchDto> getCandidateCourtSearchByCandidateId(int id);
}
