package com.checkr.candidateservice.service;

import com.checkr.candidateservice.entity.Candidate;
import com.checkr.candidateservice.dto.CandidateDto;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CandidateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CandidateServiceImpl implements CandidateService{
    private static final String CANDIDATENOTFOUND = "Candidate id not found - ";

    @Autowired
    private CandidateRepository candidateRepository;
    @Override
    public List<CandidateDto> getCandidates() {
        List<Candidate> candidates = this.candidateRepository.findAll();
        return candidates.stream()
                .map(CandidateDto::convertCandidateEntityToDto)
                .collect(Collectors.toList());
    }
    @Override
    public CandidateDto getCandidateById(int theId) {
        Optional<Candidate> result = candidateRepository.findById(theId);
        CandidateDto theCandidateDto;
        if (result.isPresent()) {
            theCandidateDto = CandidateDto.convertCandidateEntityToDto(result.get());
        } else {
            throw new NotFoundException(CANDIDATENOTFOUND + theId);
        }
        return theCandidateDto;
    }

}