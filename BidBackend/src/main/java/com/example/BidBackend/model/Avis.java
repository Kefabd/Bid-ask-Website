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



    public Avis() {
    }
}
