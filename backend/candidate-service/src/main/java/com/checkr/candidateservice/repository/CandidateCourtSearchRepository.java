package com.checkr.candidateservice.repository;

import com.checkr.candidateservice.entity.CandidateCourtSearches;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidateCourtSearchRepository extends JpaRepository<CandidateCourtSearches,Integer> {
    List<CandidateCourtSearches> findByCandidateId(int id);
}
