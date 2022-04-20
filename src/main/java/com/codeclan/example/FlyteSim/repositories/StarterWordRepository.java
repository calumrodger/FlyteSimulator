package com.codeclan.example.FlyteSim.repositories;
import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.models.StarterWord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StarterWordRepository extends JpaRepository<StarterWord, Long> {

    List<StarterWord> findByWord(String word);


}
