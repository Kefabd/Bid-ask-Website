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
    @Column(name = "isVendorValue")
    private Boolean isVendor;
    private String email;
    private String lastName;
    private String firstName;
    private  String password;

    /*@OneToMany(mappedBy = "utilisateur")
    private List<Article> articles;
    @OneToMany(mappedBy = "utilisateur")
    private List<Article> articles2;*/


    public String getFullName() {
        return this.lastName+" "+this.firstName;
    }
}
