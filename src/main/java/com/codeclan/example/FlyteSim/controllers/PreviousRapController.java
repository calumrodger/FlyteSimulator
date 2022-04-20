package com.codeclan.example.FlyteSim.controllers;

import com.codeclan.example.FlyteSim.models.PreviousRap;
import com.codeclan.example.FlyteSim.repositories.PreviousRapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PreviousRapController {

    @Autowired
    PreviousRapRepository previousRapRepository;

    @GetMapping(value = "/previous_raps")
    public ResponseEntity<List<PreviousRap>> getAllPreviousRaps(){
        return new ResponseEntity<>(previousRapRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/previous_raps/{id}")
    public ResponseEntity getPreviousRap(@PathVariable Long id){
        return new ResponseEntity(previousRapRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/previous_raps")
    public ResponseEntity<PreviousRap> postPirate(@RequestBody PreviousRap previousRap){
        previousRapRepository.save(previousRap);
        return new ResponseEntity<>(previousRap, HttpStatus.CREATED);
    }

    @PatchMapping(value="/previous_raps/{id}")
    public ResponseEntity<PreviousRap> updatePirate(@RequestBody PreviousRap previousRap){
        previousRapRepository.save(previousRap);
        return new ResponseEntity<>(previousRap, HttpStatus.OK);
    }

}
