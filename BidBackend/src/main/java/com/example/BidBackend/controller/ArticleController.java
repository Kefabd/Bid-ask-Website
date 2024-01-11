package com.example.BidBackend.controller;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @PostMapping("/add")
    public String add(@RequestBody Article article) {
        articleService.save(article);
        return "New article added";
    }

    @GetMapping("/getAll")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @DeleteMapping("/delete")
    public String delete(@RequestBody Article article) {
        articleService.deleteById(article.getId_article());
        return "Article deleted";
    }

    @PutMapping("/update")
    public String update(@RequestBody Article updatedArticle) {
        Article existingArticle = articleService.findById(updatedArticle.getId_article());

        if (existingArticle != null) {
            // Update the existing article with the new values
            existingArticle.setNom_article(updatedArticle.getNom_article());
            existingArticle.setDate_debut(updatedArticle.getDate_debut());
            existingArticle.setDate_fin(updatedArticle.getDate_fin());
            existingArticle.setDélai(updatedArticle.getDélai());
            existingArticle.setDescription(updatedArticle.getDescription());
            existingArticle.setPrixMin(updatedArticle.getPrixMin());
            existingArticle.setStatut(updatedArticle.getStatut());

            // Save the updated article
            articleService.update(existingArticle);

            return "Article updated";
        } else {
            return "Article not found";
        }


    }
}
