package com.example.BidBackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Time;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Article {
    @Id
    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )
    private Long id_article;
    private String nom_article;
    private Date date_debut;
    private Date date_fin;
    private Time délai;
    private String description;
    private double prixMin;
    private String statut;

    @OneToOne
    @JoinColumn(name = "id_avis")
    private Avis avis;

    /*
    @OneToOne(mappedBy = "article")
    private Avis avis;

     */

    @ManyToOne
    @JoinColumn(name="id_utilisateur")
    private Utilisateur utilisateur;




}