package com.example.BidBackend.model;

import jakarta.persistence.*;

@Entity
public class ContratDeVente {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id_contrat;

    @OneToOne
    @JoinColumn(name="id_article")
    private Article article;

    public ContratDeVente() {
    }
}