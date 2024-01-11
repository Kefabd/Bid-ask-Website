package com.example.BidBackend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder


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


}
