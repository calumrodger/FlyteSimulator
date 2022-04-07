package com.codeclan.example.FlyteSim.controllers;

import com.codeclan.example.FlyteSim.models.Player;
import com.codeclan.example.FlyteSim.models.StarterWord;
import com.codeclan.example.FlyteSim.repositories.PlayerRepository;
import com.codeclan.example.FlyteSim.repositories.StarterWordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StarterWordController {

    @Autowired
    StarterWordRepository starterWordRepository;

    @GetMapping(value = "/starter_words")
    public ResponseEntity<List<StarterWord>> getAllStarterWords(){
        return new ResponseEntity<>(starterWordRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/starter_words/{id}")
    public ResponseEntity getStarterWord(@PathVariable Long id){
        return new ResponseEntity(starterWordRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/starter_words")
    public ResponseEntity<StarterWord> postStarterWord(@RequestBody StarterWord starterWord){
        starterWordRepository.save(starterWord);
        return new ResponseEntity<>(starterWord, HttpStatus.CREATED);
    }

    @PatchMapping(value="/starter_words/{id}")
    public ResponseEntity<StarterWord> updatePirate(@RequestBody StarterWord starterWord){
        starterWordRepository.save(starterWord);
        return new ResponseEntity<>(starterWord, HttpStatus.OK);
    }

}
