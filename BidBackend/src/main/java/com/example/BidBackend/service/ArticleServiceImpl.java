package com.example.BidBackend.service;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.model.Utilisateur;
import com.example.BidBackend.repository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public Article findById(Long id) {
        Optional<Article> optionalArticle = articleRepository.findById(id);
        return optionalArticle.orElse(null);
    }

    @Override
    public Article save(Article article) {
        return articleRepository.save(article);
    }

    @Override
    public Article updateArticle(Long id,Article article) {
        Optional<Article> existingArticleOptional = articleRepository.findById(id);
        if (existingArticleOptional.isPresent()) {
            Article existingArticle = existingArticleOptional.get();

            // Mettez à jour les champs de l'utilisateur existant avec les nouvelles valeurs
            existingArticle.setNom_article(article.getNom_article());
            existingArticle.setDate_debut(article.getDate_debut());
            existingArticle.setDate_fin(article.getDate_fin());
            existingArticle.setDélai(article.getDélai());
            existingArticle.setDescription(article.getDescription());
            existingArticle.setPrixMin(article.getPrixMin());
            existingArticle.setStatut(article.getStatut());

            // Enregistrez les modifications dans la base de données
            return articleRepository.save(existingArticle);
        } else {
            return null;
        }
    }

    @Override
    public void deleteArticle(Long id) {
        articleRepository.deleteById(id);
    }



    @Override
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    @Override
    public List<Article> getActiveArticles() {
        // Implémentez la logique pour récupérer les articles actifs
        return null;
    }

    @Override
    public List<Article> searchArticlesByKeyword(String keyword) {
        // Implémentez la logique pour rechercher des articles par mot-clé
        return null;
    }

    @Override
    public List<Article> getArticlesBySeller(int sellerId) {
        // Implémentez la logique pour récupérer les articles d'un vendeur spécifique
        return null;
    }

    @Override
    public void closeAuction(int articleId) {
        // Implémentez la logique pour fermer une enchère
    }
}
