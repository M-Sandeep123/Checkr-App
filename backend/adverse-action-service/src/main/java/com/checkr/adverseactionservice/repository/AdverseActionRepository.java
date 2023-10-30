package com.checkr.adverseactionservice.repository;


import com.checkr.adverseactionservice.entity.AdverseAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdverseActionRepository extends JpaRepository<AdverseAction, Integer> {

}
