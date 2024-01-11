package com.example.BidBackend.service;

import com.example.BidBackend.model.ContratDeVente;

import java.util.List;

public interface ContratDeVenteService {

    ContratDeVente generateSaleContract(int articleId, int buyerId);

    ContratDeVente findById(int id);

    List<ContratDeVente> getContractsForUser(int userId);

    // Ajoutez d'autres méthodes spécifiques aux contrats de vente selon vos besoins
}
