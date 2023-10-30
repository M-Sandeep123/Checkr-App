package com.checkr.adverseactionservice.mapper;

import com.checkr.adverseactionservice.dto.AdverseActionDTO;
import com.checkr.adverseactionservice.entity.AdverseAction;
import org.springframework.stereotype.Component;

@Component
public class AdverseActionMapper {
    public AdverseActionDTO toDto(AdverseAction adverseAction) {
        AdverseActionDTO dto = new AdverseActionDTO();
        dto.setId(adverseAction.getId());
        dto.setActionStatus(adverseAction.getActionStatus().toString());
        dto.setPreNoticeDate(adverseAction.getPreNoticeDate());
        dto.setPostNoticeDate(adverseAction.getPostNoticeDate());
        dto.setActionUpdateTime(adverseAction.getActionUpdateTime());
        dto.setCandidateId(adverseAction.getCandidateId());
        return dto;
    }
    public AdverseAction toEntity(AdverseActionDTO dto) {
        AdverseAction adverseAction = new AdverseAction();
        adverseAction.setId(dto.getId());
        adverseAction.setActionStatus(AdverseAction.ActionStatus.valueOf(dto.getActionStatus().toLowerCase()));
        adverseAction.setPreNoticeDate(dto.getPreNoticeDate());
        adverseAction.setPostNoticeDate(dto.getPostNoticeDate());
        adverseAction.setActionUpdateTime(dto.getActionUpdateTime());
        adverseAction.setCandidateId(dto.getCandidateId());
        return adverseAction;
    }
}

