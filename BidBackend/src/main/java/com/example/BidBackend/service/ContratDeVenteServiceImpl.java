package com.example.BidBackend.service;
import com.example.BidBackend.model.ContratDeVente;
import com.example.BidBackend.repository.ContratDeVenteRepository;
import com.lowagie.text.Document;
import com.lowagie.text.PageSize;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.http.HttpResponse;
import java.util.List;
import java.util.Optional;

@Service
public class ContratDeVenteServiceImpl implements ContratDeVenteService {

    @Autowired
    private ContratDeVenteRepository contratDeVenteRepository;


    @Override
    public ContratDeVente generateSaleContract(long articleId, int buyerId) {
        return null;
    }

    @Override
    public ContratDeVente save(ContratDeVente contratDeVente) {
        return contratDeVenteRepository.save(contratDeVente);
    }

    @Override
    public ContratDeVente findById(int id) {
        Optional<ContratDeVente> optionalContratDeVente = contratDeVenteRepository.findById(id);
        return optionalContratDeVente.orElse(null);
    }

    @Override
    public List<ContratDeVente> getContractsForUser(int userId) {
        return null;
    }

/*
    @Override
    public List<ContratDeVente> getContractsForUser(int userId, HttpServletResponse response) throws IOException {
        Document document=new Document(PageSize.A4);
        PdfWriter.getInstance(document,response.getOutputStream());
        document.open();

        return null;
    }


    @Override
    public ContratDeVente generateSaleContract(long articleId, int buyerId) {
        // Logique pour générer le contrat de vente
        ContratDeVente contratDeVente = new ContratDeVente();
        // ... (génération du contrat)

        // Envoi d'e-mails
        sendBuyerEmail(buyerId, contratDeVente);
        sendSellerEmail(articleId, contratDeVente);

        return contratDeVente;
    }

    private void sendBuyerEmail(int buyerId, ContratDeVente contratDeVente) {
        // Logique pour récupérer les informations de l'acheteur
        // ...

        // Génération du contenu de l'e-mail
        String emailContent = "Bonjour " + buyerName + ",\n\n";
        emailContent += "Merci d'avoir effectué l'achat. Vous trouverez ci-joint le contrat de vente.";

        // Envoi de l'e-mail
        emailUtil.sendEmail(buyerEmail, "Confirmation d'achat", emailContent, contratDeVente.getPdfContent());
    }

    private void sendSellerEmail(long articleId, ContratDeVente contratDeVente) {
        // Logique pour récupérer les informations du vendeur
        // ...

        // Génération du contenu de l'e-mail
        String emailContent = "Bonjour " + sellerName + ",\n\n";
        emailContent += "Félicitations! Votre article a été vendu. Vous trouverez ci-joint le contrat de vente.";

        // Envoi de l'e-mail
        emailUtil.sendEmail(sellerEmail, "Confirmation de vente", emailContent, contratDeVente.getPdfContent());
    }*/
}
