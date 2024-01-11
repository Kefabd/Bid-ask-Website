package com.example.BidBackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
public class Article {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private int id_article;
    private String nom_article;
    private Date date_debut;
    private Date date_fin;
    private Date délai;
    private String description;
    private double prixMin;
    private String statut;

    @OneToOne(mappedBy = "article")
    private Avis avis;

    @ManyToOne
    @JoinColumn(name="id_utilisateur")
    private Utilisateur utilisateur;

    @OneToOne(mappedBy = "article")
    private ContratDeVente contratDeVent;

    public Article() {
    }
}