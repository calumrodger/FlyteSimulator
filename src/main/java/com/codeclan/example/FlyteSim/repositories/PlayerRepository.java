package com.codeclan.example.FlyteSim.repositories;

import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.models.PreviousRap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    List<Player> findByName(String name);

    List<PreviousRap> findPreviousRapByName(String name);

}
