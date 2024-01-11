package com.example.BidBackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private Long description;
    private double prixMin;
    private String statut;

    public Article() {
    }
}