package com.checkr.adverseactionservice.service;

import com.checkr.adverseactionservice.dto.AdverseActionDTO;
import com.checkr.adverseactionservice.entity.AdverseAction;
import com.checkr.adverseactionservice.exception.ServiceException;
import com.checkr.adverseactionservice.mapper.AdverseActionMapper;
import com.checkr.adverseactionservice.repository.AdverseActionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class AdverseActionService {

    private final AdverseActionRepository adverseActionRepository;
    private final AdverseActionMapper adverseActionMapper;

    @Autowired
    public AdverseActionService(AdverseActionRepository adverseActionRepository, AdverseActionMapper adverseActionMapper) {
        this.adverseActionRepository = adverseActionRepository;
        this.adverseActionMapper = adverseActionMapper;
    }

    public AdverseActionDTO createAdverseAction(AdverseActionDTO adverseActionData) {
        try {
            AdverseAction entity = adverseActionMapper.toEntity(adverseActionData);
            return adverseActionMapper.toDto(adverseActionRepository.save(entity));
        } catch (Exception e) {
            throw new ServiceException("An error occurred while creating the adverse action.", e);
        }
    }

    public List<AdverseActionDTO> getAllAdverseAction() {
        try {
            List<AdverseAction> entities = adverseActionRepository.findAll();
            return entities.stream()
                    .map(adverseActionMapper::toDto)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            throw new ServiceException("An error occurred while fetching all adverse actions.", e);
        }
    }

    public AdverseActionDTO getAdverseActionById(int id) {
        try {
            AdverseAction entity = adverseActionRepository.findById(id)
                    .orElseThrow(() -> new NoSuchElementException("Data not found with id: " + id));
            return adverseActionMapper.toDto(entity);
        } catch (NoSuchElementException e) {
            throw e;
        } catch (Exception e) {
            throw new ServiceException("An error occurred while fetching the adverse action.", e);
        }
    }

    public AdverseActionDTO updateAdverseAction(AdverseActionDTO updatedData) {
        try {
            if (updatedData.getId() == 0) {
                throw new IllegalArgumentException("Invalid AdverseActionDTO: ID cannot be 0.");
            }
            AdverseAction entity = adverseActionMapper.toEntity(updatedData);
            return adverseActionMapper.toDto(adverseActionRepository.save(entity));
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new ServiceException("An error occurred while updating the adverse action.", e);
        }
    }

    public void deleteAdverseActionById(int id) {
        try {
            adverseActionRepository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new NoSuchElementException("Data not found with id: " + id);
        } catch (Exception e) {
            throw new ServiceException("An error occurred while deleting the adverse action.", e);
        }
    }
}
