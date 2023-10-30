package com.checkr.candidateservice.service;

import com.checkr.candidateservice.entity.CandidateCourtSearches;
import com.checkr.candidateservice.dto.CandidateCourtSearchDto;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CandidateCourtSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CandidateCourtSearchImpl implements CandidateCourtSearchService{
    @Autowired
    private CandidateCourtSearchRepository candidateCourtSearchRepository;
    @Override
    public List<CandidateCourtSearchDto> getAllCandidateCourtSearches() {
        List<CandidateCourtSearches> candidateCourtSearches = candidateCourtSearchRepository.findAll();
        return candidateCourtSearches.stream()
                .map(CandidateCourtSearchDto::convertCandidateCourtSearchEntityToDto)
                .collect(Collectors.toList());
    }
    @Override
    public CandidateCourtSearchDto getCandidateCourtSearchById(int id) {
        Optional<CandidateCourtSearches> result = candidateCourtSearchRepository.findById(id);
        CandidateCourtSearchDto theCandidateCourtSearchDto;
        if (result.isPresent()) {
            theCandidateCourtSearchDto = CandidateCourtSearchDto.convertCandidateCourtSearchEntityToDto(result.get());
        } else {
            throw new NotFoundException("Candidate Court search not found with id - " + id);
        }
        return theCandidateCourtSearchDto;
    }

    @Override
    public List<CandidateCourtSearchDto> getCandidateCourtSearchByCandidateId(int id) {
        List<CandidateCourtSearches> candidateCourtSearches = candidateCourtSearchRepository.findByCandidateId(id);
        return candidateCourtSearches.stream()
                .map(CandidateCourtSearchDto::convertCandidateCourtSearchEntityToDto)
                .collect(Collectors.toList());
    }
}
