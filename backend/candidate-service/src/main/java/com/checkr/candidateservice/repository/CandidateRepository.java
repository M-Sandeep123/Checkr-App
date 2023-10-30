package com.checkr.candidateservice.repository;

import com.checkr.candidateservice.entity.Candidate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
}
