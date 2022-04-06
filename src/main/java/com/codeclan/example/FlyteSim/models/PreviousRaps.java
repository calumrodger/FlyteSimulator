package com.codeclan.example.FlyteSim.models;

import javax.persistence.*;

@Entity
@Table(name="previousRaps")
public class PreviousRaps {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="firstLine")
    private String firstLine;

    @Column(name="secondLine")
    private String secondLine;

    @Column(name="score")
    private int score;

    @ManyToOne
    @JoinColumn(name="rap_id", nullable = false)
    private Player player;

    public PreviousRaps(String firstLine, String secondLine, int score, Player player) {
        this.firstLine = firstLine;
        this.secondLine = secondLine;
        this.score = score;
        this.player = player;
    }

    public PreviousRaps() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstLine() {
        return firstLine;
    }

    public void setFirstLine(String firstLine) {
        this.firstLine = firstLine;
    }

    public String getSecondLine() {
        return secondLine;
    }

    public void setSecondLine(String secondLine) {
        this.secondLine = secondLine;
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
