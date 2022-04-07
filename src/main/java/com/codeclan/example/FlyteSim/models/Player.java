package com.codeclan.example.FlyteSim.models;
import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="stageName")
    private String stageName;

    @Column(name="points")
    private int points;


    @OneToMany(mappedBy = "player", fetch = FetchType.LAZY)
    @JsonBackReference
    private List<PreviousRap> previousRaps;


    public Player(String name, String stageName, int points) {
        this.name = name;
        this.stageName = stageName;
        this.points = points;
        this.previousRaps = new ArrayList<>();
    }

    public Player(){}

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStageName() {
        return stageName;
    }

    public void setStageName(String stageName) {
        this.stageName = stageName;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public ArrayList<PreviousRap> getPreviousRaps() {
        return (ArrayList<PreviousRap>) previousRaps;
    }

    public void setPreviousRaps(ArrayList<PreviousRap> previousRaps) {
        this.previousRaps = previousRaps;
    }

    public void addRap(PreviousRap previousRap){
        this.previousRaps.add(previousRap);
    }
}

