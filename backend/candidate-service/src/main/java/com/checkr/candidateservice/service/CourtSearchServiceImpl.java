package com.checkr.candidateservice.service;

import com.checkr.candidateservice.entity.CourtSearch;
import com.checkr.candidateservice.dto.CourtSearchDto;
import com.checkr.candidateservice.exceptions.NotFoundException;
import com.checkr.candidateservice.repository.CourtSearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourtSearchServiceImpl implements CourtSearchService{
    @Autowired
    private CourtSearchRepository courtSearchRepository;
    @Override
    public List<CourtSearchDto> getAllCourtSearches() {
        List<CourtSearch> courtSearches = courtSearchRepository.findAll();
        return courtSearches.stream()
                .map(CourtSearchDto::convertCourtSearchEntityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public CourtSearchDto getCourtSearchById(int id) {
        Optional<CourtSearch> result = courtSearchRepository.findById(id);
        CourtSearchDto theCourtSearchDto;
        if (result.isPresent()) {
            theCourtSearchDto = CourtSearchDto.convertCourtSearchEntityToDto(result.get());
        } else {
            throw new NotFoundException("Court search not found with id - " + id);
        }
        return theCourtSearchDto;
    }
}
