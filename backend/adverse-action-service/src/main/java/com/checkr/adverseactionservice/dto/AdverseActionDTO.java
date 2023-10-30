package com.checkr.adverseactionservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActionDTO {

    private int id;
    private String actionStatus;
    private Date preNoticeDate;
    private Date postNoticeDate;
    private Date actionUpdateTime;
    private int candidateId;
}

