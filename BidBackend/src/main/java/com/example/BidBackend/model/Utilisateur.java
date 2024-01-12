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
    private Boolean est_vendeur;
    @Column(name = "isVendorValue")
    private Boolean isVendor;
    private String email;
    private String lastName;
    private String firstName;
    private  String password;

    @OneToMany(mappedBy = "utilisateur")
    private List<Article> articles;  // Add this line


}
