package com.checkr.adverseactionservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(schema = "adverse_actions")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdverseAction {

    public enum ActionStatus {
        scheduled,
        pending,
        cancelled
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Enumerated(EnumType.STRING)
    @Column(name = "action_status", nullable = true)
    private ActionStatus actionStatus;

    @Column(name = "pre_notice_date")
    private Date preNoticeDate;

    @Column(name = "post_notice_date")
    private Date postNoticeDate;

    @Column(name = "action_update_time")
    private Date actionUpdateTime;

    @Column(name= "candidate_Id")
    private int candidateId;


}


