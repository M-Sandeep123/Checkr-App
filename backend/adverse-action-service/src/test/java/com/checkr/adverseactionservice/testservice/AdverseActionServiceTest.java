package com.checkr.adverseactionservice.testservice;

import com.checkr.adverseactionservice.dto.AdverseActionDTO;
import com.checkr.adverseactionservice.entity.AdverseAction;
import com.checkr.adverseactionservice.exception.ServiceException;
import com.checkr.adverseactionservice.mapper.AdverseActionMapper;
import com.checkr.adverseactionservice.repository.AdverseActionRepository;
import com.checkr.adverseactionservice.service.AdverseActionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.dao.EmptyResultDataAccessException;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AdverseActionServiceTest {

    @Mock
    private AdverseActionRepository adverseActionRepository;

    @Mock
    private AdverseActionMapper adverseActionMapper;

    @InjectMocks
    private AdverseActionService adverseActionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateAdverseAction() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        AdverseAction mockEntity = new AdverseAction();
        when(adverseActionMapper.toEntity(any(AdverseActionDTO.class))).thenReturn(mockEntity);
        when(adverseActionMapper.toDto(any(AdverseAction.class))).thenReturn(mockData);
        when(adverseActionRepository.save(any(AdverseAction.class))).thenReturn(mockEntity);
        AdverseActionDTO result = adverseActionService.createAdverseAction(mockData);
        assertNotNull(result);
        assertEquals(mockData, result);
        verify(adverseActionRepository, times(1)).save(any(AdverseAction.class));
    }
    @Test
    void testCreateAdverseActionInternalServerError() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionMapper.toEntity(any(AdverseActionDTO.class))).thenReturn(new AdverseAction());
        when(adverseActionRepository.save(any(AdverseAction.class))).thenThrow(new RuntimeException());
        assertThrows(ServiceException.class, () -> adverseActionService.createAdverseAction(mockData));
        verify(adverseActionRepository, times(1)).save(any(AdverseAction.class));
    }
    @Test
    void testGetAllAdverseAction() {
        List<AdverseAction> mockEntities = new ArrayList<>();
        mockEntities.add(new AdverseAction());
        mockEntities.add(new AdverseAction());
        when(adverseActionRepository.findAll()).thenReturn(mockEntities);
        when(adverseActionMapper.toDto(any(AdverseAction.class))).thenReturn(new AdverseActionDTO());
        List<AdverseActionDTO> results = adverseActionService.getAllAdverseAction();
        assertNotNull(results);
        assertEquals(2, results.size());
        verify(adverseActionMapper, times(2)).toDto(any(AdverseAction.class));
    }
    @Test
    void testGetAllAdverseActionInternalServerError() {
        when(adverseActionRepository.findAll()).thenThrow(new RuntimeException());
        assertThrows(ServiceException.class, () -> adverseActionService.getAllAdverseAction());
        verify(adverseActionMapper, never()).toDto(any(AdverseAction.class));
    }
    @Test
    void testGetAdverseActionById() {
        int mockId = 1;
        AdverseAction mockEntity = new AdverseAction();
        when(adverseActionRepository.findById(mockId)).thenReturn(Optional.of(mockEntity));
        when(adverseActionMapper.toDto(mockEntity)).thenReturn(new AdverseActionDTO());
        AdverseActionDTO result = adverseActionService.getAdverseActionById(mockId);
        assertNotNull(result);
        verify(adverseActionRepository, times(1)).findById(mockId);
        verify(adverseActionMapper, times(1)).toDto(mockEntity);
    }
    @Test
    void testGetAdverseActionByIdNotFound() {
        int mockId = 1;
        when(adverseActionRepository.findById(mockId)).thenReturn(Optional.empty());
        assertThrows(NoSuchElementException.class, () -> adverseActionService.getAdverseActionById(mockId));
        verify(adverseActionRepository, times(1)).findById(mockId);
        verify(adverseActionMapper, never()).toDto(any(AdverseAction.class));
    }
    @Test
    void testGetAdverseActionByIdInternalServerError() {
        int mockId = 1;
        when(adverseActionRepository.findById(mockId)).thenThrow(new RuntimeException());
        assertThrows(ServiceException.class, () -> adverseActionService.getAdverseActionById(mockId));
        verify(adverseActionRepository, times(1)).findById(mockId);
        verify(adverseActionMapper, never()).toDto(any(AdverseAction.class));
    }
    @Test
    void testUpdateAdverseAction() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        mockData.setId(1);
        when(adverseActionMapper.toEntity(any(AdverseActionDTO.class))).thenReturn(new AdverseAction());
        when(adverseActionRepository.save(any(AdverseAction.class))).thenReturn(new AdverseAction());
        when(adverseActionMapper.toDto(any(AdverseAction.class))).thenReturn(mockData);
        AdverseActionDTO result = adverseActionService.updateAdverseAction(mockData);
        assertNotNull(result);
        assertEquals(mockData, result);
        verify(adverseActionRepository, times(1)).save(any(AdverseAction.class));
    }

    @Test
    void testUpdateAdverseActionWithInvalidId() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        assertThrows(IllegalArgumentException.class, () -> adverseActionService.updateAdverseAction(mockData));
        verify(adverseActionRepository, never()).save(any(AdverseAction.class));
    }

    @Test
    void testUpdateAdverseActionInternalServerError() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        mockData.setId(1);
        when(adverseActionMapper.toEntity(any(AdverseActionDTO.class))).thenReturn(new AdverseAction());
        when(adverseActionRepository.save(any(AdverseAction.class))).thenThrow(new RuntimeException());
        assertThrows(ServiceException.class, () -> adverseActionService.updateAdverseAction(mockData));
        verify(adverseActionRepository, times(1)).save(any(AdverseAction.class));
    }

    @Test
    void testDeleteAdverseActionById() {
        int mockId = 1;
        adverseActionService.deleteAdverseActionById(mockId);
        verify(adverseActionRepository, times(1)).deleteById(mockId);
    }

    @Test
    void testDeleteAdverseActionByIdNotFound() {
        int mockId = 1;
        doThrow(EmptyResultDataAccessException.class).when(adverseActionRepository).deleteById(mockId);
        assertThrows(NoSuchElementException.class, () -> adverseActionService.deleteAdverseActionById(mockId));
        verify(adverseActionRepository, times(1)).deleteById(mockId);
    }

    @Test
    void testDeleteAdverseActionByIdInternalServerError() {
        int mockId = 1;
        doThrow(new RuntimeException()).when(adverseActionRepository).deleteById(mockId);
        assertThrows(ServiceException.class, () -> adverseActionService.deleteAdverseActionById(mockId));
        verify(adverseActionRepository, times(1)).deleteById(mockId);
    }

}