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

    @Column(name = "wordClass")
    private String wordClass;

    public StarterWord(String word, String wordClass) {
        this.word = word;
        this.wordClass = wordClass;
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

    public String getWordClass() {
        return wordClass;
    }

    public void setWordClass(String wordClass) {
        this.wordClass = wordClass;
    }
}

