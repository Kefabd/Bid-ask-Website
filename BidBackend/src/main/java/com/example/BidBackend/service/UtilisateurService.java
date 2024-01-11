package com.example.BidBackend.service;

import com.example.BidBackend.model.Utilisateur;

import java.util.List;

public interface UtilisateurService {

    Utilisateur save(Utilisateur utilisateur);

    Utilisateur findById(int id);

    Utilisateur findByEmail(String email);

    List<Utilisateur> getAllUsers();


    Utilisateur updateUtilisateur(int id, Utilisateur utilisateur);

    void deleteUtilisateur(int id);
}
