package com.checkr.candidateservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "court_searches")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class CourtSearch {
    @Id
    @Column(name = "id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;
    @Column(name= "created_at")
    private LocalDateTime createdAt;
    @Column(name= "updated_at")
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "courtSearch", cascade = CascadeType.ALL)
    private List<CandidateCourtSearches> candidateCourtSearches;
}
