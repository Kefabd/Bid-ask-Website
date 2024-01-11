package com.example.BidBackend.model;

import jakarta.persistence.*;

import java.util.List;

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

    @OneToMany(mappedBy = "utilisateur")
    private List<Article> articles;  // Add this line

    public Utilisateur() {
    }
}
