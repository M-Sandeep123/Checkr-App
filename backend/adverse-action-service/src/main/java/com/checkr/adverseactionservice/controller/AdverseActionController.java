package com.checkr.adverseactionservice.controller;

import com.checkr.adverseactionservice.dto.AdverseActionDTO;
import com.checkr.adverseactionservice.service.AdverseActionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/adverse-action")
public class AdverseActionController {

    private final AdverseActionService adverseActionService;

    @Autowired
    public AdverseActionController(AdverseActionService adverseActionService) {
        this.adverseActionService = adverseActionService;
    }

    @PostMapping
    public ResponseEntity<AdverseActionDTO> createRecord(@RequestBody AdverseActionDTO data) {
        try {
            AdverseActionDTO createdRecord = adverseActionService.createAdverseAction(data);
            return ResponseEntity.ok(createdRecord);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<AdverseActionDTO>> getAllRecords() {
        try {
            List<AdverseActionDTO> records = adverseActionService.getAllAdverseAction();
            return ResponseEntity.ok(records);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdverseActionDTO> getRecordById(@PathVariable int id) {
        try {
            AdverseActionDTO adverseActionData = adverseActionService.getAdverseActionById(id);
            return ResponseEntity.ok(adverseActionData);
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<AdverseActionDTO> updateRecord(@PathVariable int id, @RequestBody AdverseActionDTO data) {
        try {
            if (id <= 0) {
                return ResponseEntity.badRequest().build();
            }
            data.setId(id);
            AdverseActionDTO updatedRecord = adverseActionService.updateAdverseAction(data);
            return ResponseEntity.ok(updatedRecord);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecord(@PathVariable int id) {
        try {
            adverseActionService.deleteAdverseActionById(id);
            return ResponseEntity.noContent().build();
        } catch (NoSuchElementException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
