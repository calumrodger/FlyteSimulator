package com.codeclan.example.FlyteSim.models;

import javax.persistence.*;

@Entity
@Table(name = "starterWords")
public class StarterWord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "word")
    private String word;

    @Column(name = "value")
    private int value;

    public StarterWord(String word, int value) {
        this.word = word;
        this.value = value;
    }

    public StarterWord() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }
}

