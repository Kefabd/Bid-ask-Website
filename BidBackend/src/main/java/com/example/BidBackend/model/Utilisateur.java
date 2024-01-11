package com.example.BidBackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Utilisateur {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id_utilisateur;
    private boolean est_vendeur;
    private String email;
    private String nom_utilisateur;
    private String prenom_utilisateur;

    public Utilisateur() {
    }
}
