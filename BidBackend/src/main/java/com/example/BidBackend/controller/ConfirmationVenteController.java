package com.example.BidBackend.controller;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.model.ContratDeVente;
import com.example.BidBackend.service.ContratDeVenteService;
import com.example.BidBackend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/confirmation-vente")
public class ConfirmationVenteController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ContratDeVenteService contratDeVenteService;

    @PostMapping("/confirmer-vente/{articleId}")
    public ContratDeVente confirmerVente(@PathVariable Long articleId) {
        // Récupérer l'article par son ID
        Article article = articleService.findById(articleId);

        if (article == null) {
            // Gérer le cas où l'article n'est pas trouvé
            // Vous pouvez renvoyer une erreur appropriée ou effectuer une autre action
            return null;
        }

        // Implémenter la logique de confirmation de la vente
        // Cela peut inclure la génération d'un contrat de vente
        ContratDeVente contratDeVente = contratDeVenteService.generateSaleContract(article.getId_article(), article.getUtilisateur().getId_utilisateur());

        // Mettre à jour le statut de l'article ou effectuer d'autres actions nécessaires
        article.setStatut("Vendu");
        articleService.save(article);

        return contratDeVente;
    }
}

