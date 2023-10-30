package com.checkr.candidateservice.entity;

import com.checkr.candidateservice.enums.ReportAdjudication;
import com.checkr.candidateservice.enums.ReportStatus;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "report")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Report {
    @Id
    @Column(name = "id" )
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "package")
    private String packageName;
    @Column(name = "adjudication")
    @Enumerated(EnumType.STRING)
    private ReportAdjudication reportAdjudication;
    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private ReportStatus reportStatus;
    @Column(name= "completed_date")
    private LocalDateTime completedAt;
    @Column(name= "created_at")
    private LocalDateTime createdAt;
    @Column(name= "updated_at")
    private LocalDateTime updatedAt;

    @OneToOne
    @JoinColumn(name = "candidate_id", unique = true)
    @JsonIgnoreProperties("report")
    private Candidate candidate;
}
