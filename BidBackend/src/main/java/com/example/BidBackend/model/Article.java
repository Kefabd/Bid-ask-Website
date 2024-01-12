package com.example.BidBackend.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDate;
import java.time.LocalTime;


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
    private String image;
    private LocalDate date_debut;
    private LocalDate date_fin;
    private LocalTime délai;
    private String description;
    private double prixMin;
    private String statut;

    @OneToOne
    @JoinColumn(name = "id_avis")
    private Avis avis;


    @OneToOne
    @JoinColumn(name="id_contrat")
    private ContratDeVente contratDeVente;

    @ManyToOne
    @JoinColumn(name="id_utilisateur")
    private Utilisateur utilisateur;

}