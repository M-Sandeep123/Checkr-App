package com.checkr.candidateservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "candidate_court_searches")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CandidateCourtSearches {
    @Id
    @Column(name = "id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "status")
    private String status;
    @Column(name= "created_at")
    private LocalDateTime createdAt;
    @Column(name= "updated_at")
    private LocalDateTime updatedAt;

    @ManyToOne
    @JoinColumn(name = "candidate_id", nullable = false)
    private Candidate candidate;

    @ManyToOne
    @JoinColumn(name = "court_searches_id", nullable = false)
    private CourtSearch courtSearch;
}
