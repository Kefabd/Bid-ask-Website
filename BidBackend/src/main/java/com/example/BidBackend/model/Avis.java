package com.example.BidBackend.model;

import jakarta.persistence.*;

@Entity
public class Avis {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id_avis;
    private String text;

    @OneToOne
    @JoinColumn(name = "article_id", unique = true)
    private Article article;

    public Avis() {
    }
}
