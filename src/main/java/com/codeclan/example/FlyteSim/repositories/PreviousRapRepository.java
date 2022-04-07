package com.codeclan.example.FlyteSim.repositories;

import com.codeclan.example.FlyteSim.models.PreviousRap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PreviousRapRepository extends JpaRepository<PreviousRap, Long> {

    List<PreviousRap> findByPlayerName(String name);

}
