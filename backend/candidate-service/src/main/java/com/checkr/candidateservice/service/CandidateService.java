package com.checkr.candidateservice.service;

import com.checkr.candidateservice.dto.CandidateDto;

import java.util.List;
public interface CandidateService {
    List<CandidateDto> getCandidates();
    CandidateDto getCandidateById(int candidateId);
}