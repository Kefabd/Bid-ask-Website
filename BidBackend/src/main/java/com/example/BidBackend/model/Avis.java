package com.example.BidBackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Avis {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id_avis;
    private Long text;

    public Avis() {
    }
}
