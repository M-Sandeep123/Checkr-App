package com.checkr.adverseactionservice.testcontroller;

import com.checkr.adverseactionservice.controller.AdverseActionController;
import com.checkr.adverseactionservice.dto.AdverseActionDTO;
import com.checkr.adverseactionservice.service.AdverseActionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class AdverseActionControllerTest {

    @Mock
    private AdverseActionService adverseActionService;

    @InjectMocks
    private AdverseActionController adverseActionController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreateRecord() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.createAdverseAction(any(AdverseActionDTO.class))).thenReturn(mockData);
        ResponseEntity<AdverseActionDTO> response = adverseActionController.createRecord(mockData);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockData, response.getBody());
        verify(adverseActionService, times(1)).createAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testCreateRecordException() {
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.createAdverseAction(any(AdverseActionDTO.class))).thenThrow(new RuntimeException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.createRecord(mockData);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).createAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testGetAllRecords() {
        List<AdverseActionDTO> mockData = Collections.singletonList(new AdverseActionDTO());
        when(adverseActionService.getAllAdverseAction()).thenReturn(mockData);
        ResponseEntity<List<AdverseActionDTO>> response = adverseActionController.getAllRecords();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockData, response.getBody());
        verify(adverseActionService, times(1)).getAllAdverseAction();
    }
    @Test
    void testGetAllRecordsException() {
        when(adverseActionService.getAllAdverseAction()).thenThrow(new RuntimeException());
        ResponseEntity<List<AdverseActionDTO>> response = adverseActionController.getAllRecords();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
    }
    @Test
    void testGetRecordById() {
        int id = 1;
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.getAdverseActionById(id)).thenReturn(mockData);
        ResponseEntity<AdverseActionDTO> response = adverseActionController.getRecordById(id);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockData, response.getBody());
        verify(adverseActionService, times(1)).getAdverseActionById(id);
    }
    @Test
    void testGetRecordByIdNotFound() {
        int id = 1;
        when(adverseActionService.getAdverseActionById(id)).thenThrow(new NoSuchElementException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.getRecordById(id);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).getAdverseActionById(id);
    }
    @Test
    void testUpdateRecord() {
        int id = 1;
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.updateAdverseAction(any(AdverseActionDTO.class))).thenReturn(mockData);
        ResponseEntity<AdverseActionDTO> response = adverseActionController.updateRecord(id, mockData);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(mockData, response.getBody());
        verify(adverseActionService, times(1)).updateAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testUpdateRecordInvalidId() {
        int id = 0;
        AdverseActionDTO mockData = new AdverseActionDTO();
        ResponseEntity<AdverseActionDTO> response = adverseActionController.updateRecord(id, mockData);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, never()).updateAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testUpdateRecordNotFound() {
        int id = 1;
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.updateAdverseAction(any(AdverseActionDTO.class))).thenThrow(new NoSuchElementException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.updateRecord(id, mockData);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).updateAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testDeleteRecord() {
        int id = 1;
        ResponseEntity<Void> response = adverseActionController.deleteRecord(id);
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).deleteAdverseActionById(id);
    }
    @Test
    void testDeleteRecordNotFound() {
        int id = 1;
        doThrow(new NoSuchElementException()).when(adverseActionService).deleteAdverseActionById(id);
        ResponseEntity<Void> response = adverseActionController.deleteRecord(id);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).deleteAdverseActionById(id);
    }
    @Test
    void testGetRecordByIdInternalServerError() {
        int id = 1;
        when(adverseActionService.getAdverseActionById(id)).thenThrow(new RuntimeException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.getRecordById(id);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).getAdverseActionById(id);
    }
    @Test
    void testUpdateRecordBadRequest() {
        int id = 1;
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.updateAdverseAction(any(AdverseActionDTO.class))).thenThrow(new IllegalArgumentException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.updateRecord(id, mockData);
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).updateAdverseAction(any(AdverseActionDTO.class));
    }
    @Test
    void testUpdateRecordInternalServerError() {
        int id = 1;
        AdverseActionDTO mockData = new AdverseActionDTO();
        when(adverseActionService.updateAdverseAction(any(AdverseActionDTO.class))).thenThrow(new RuntimeException());
        ResponseEntity<AdverseActionDTO> response = adverseActionController.updateRecord(id, mockData);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).updateAdverseAction(any(AdverseActionDTO.class));
    }

    @Test
    void testDeleteRecordInternalServerError() {
        int id = 1;
        doThrow(new RuntimeException()).when(adverseActionService).deleteAdverseActionById(id);
        ResponseEntity<Void> response = adverseActionController.deleteRecord(id);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertNull(response.getBody());
        verify(adverseActionService, times(1)).deleteAdverseActionById(id);
    }

}
