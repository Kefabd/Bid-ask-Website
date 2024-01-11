package com.example.BidBackend.repository;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.example.BidBackend.model.Article;
import com.example.BidBackend.repository.ArticleRepository;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Optional;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ArticleRepositoryTest {

    @Autowired
    private ArticleRepository articleRepository;

    //@Test
    /*
    public void testFindByDescription() {
        // Insert test data into the database
        Article article = new Article();
        article.setDescription("Test Description");
        articleRepository.save(article);

        // Perform the repository query
        List<Article> articles = articleRepository.findByDescription("Test Description");

        // Assertions
        assertEquals(1, articles.size());
        assertEquals("Test Description", articles.get(0).getDescription());
        }
        */

    @Test
    public void testFindById() {
        // Insert test data into the database
        Article article = new Article();
        article.setDescription("Test Description");
        article.setStatut("disponible");
        article.setPrixMin(500);
        Time delai=new Time(00,05,00);
        article.setDélai(delai);
        Date date_debut=new Date(2024,01,11);
        Date date_fin=new Date(2024,01,12);
        article.setDate_debut(date_debut);
        article.setDate_fin(date_fin);
        article.setNom_article("article 1");
        
        article = articleRepository.save(article);

        // Perform the repository query
        Optional<Article> result = articleRepository.findById(article.getId_article());

        // Assertions
        assertTrue(result.isPresent());
        assertEquals("Test Description", result.get().getDescription());
    }
}
