package com.example.BidBackend.service;

import com.example.BidBackend.model.Article;

import java.util.List;

public interface ArticleService {
    public Article findById(Long id);

    Article save(Article article);


    Article update(Article article);

    void deleteById(Long id);

    List<Article> getAllArticles();

    List<Article> getActiveArticles();

    List<Article> searchArticlesByKeyword(String keyword);

    List<Article> getArticlesBySeller(int sellerId);

    void closeAuction(int articleId);
}
