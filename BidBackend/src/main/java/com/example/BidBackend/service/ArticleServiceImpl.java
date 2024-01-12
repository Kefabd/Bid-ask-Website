package com.example.BidBackend.service;

import com.example.BidBackend.model.Article;
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
