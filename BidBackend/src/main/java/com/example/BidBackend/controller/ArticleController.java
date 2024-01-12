package com.example.BidBackend.controller;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.model.Utilisateur;
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
    public String createArticle(@RequestBody Article article) {
        articleService.save(article);
        return "New article added";
    }

    @GetMapping("/getAll")
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping("/{id}")
    public Article getArticleById(@PathVariable Long id)
    {
        return articleService.findById(id);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteArticle(@PathVariable Long id) {
        articleService.deleteArticle(id);
        return "Article deleted";
    }

    @PutMapping("/update/{id}")
    public String updateArticle(@PathVariable Long id, @RequestBody Article article) {
        articleService.updateArticle(id, article);
        return "Article updated";
    }
}
