package com.codeclan.example.FlyteSim.controllers;

import com.codeclan.example.FlyteSim.models.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.codeclan.example.FlyteSim.repositories.PlayerRepository;

import java.util.List;

@RestController
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping(value = "/players")
    public ResponseEntity<List<Player>> getAllPlayers(){
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/players/{id}")
    public ResponseEntity getPirate(@PathVariable Long id){
        return new ResponseEntity(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/players")
    public ResponseEntity<Player> postPirate(@RequestBody Player player){
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    @PatchMapping(value="/players/{id}")
    public ResponseEntity<Player> updatePirate(@RequestBody Player player){
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }

}
