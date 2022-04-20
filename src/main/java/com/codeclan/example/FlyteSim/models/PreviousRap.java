package com.codeclan.example.FlyteSim.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="previousRaps")
public class PreviousRap {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="rap")
    private String rap;

    @Column(name="score")
    private int score;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name="rap_id", nullable = false)
    private Player player;

    public PreviousRap(String rap, int score, Player player) {
        this.rap = rap;
        this.score = score;
        this.player = player;
    }

    public PreviousRap() {
    }

    public String getRap() {
        return rap;
    }

    public void setRap(String rap) {
        this.rap = rap;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Player getPlayer() {
        return player;
    }

    public void setPlayer(Player player) {
        this.player = player;
    }
}
