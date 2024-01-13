package com.example.BidBackend.controller;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.model.Utilisateur;
import com.example.BidBackend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.net.http.HttpHeaders;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import static org.springframework.http.MediaType.MULTIPART_FORM_DATA_VALUE;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/article")
public class ArticleController {
    @Autowired
    private ArticleService articleService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/add",consumes = {MULTIPART_FORM_DATA_VALUE})
    public String createArticle(
            @RequestPart("image") MultipartFile imageFile,
            @RequestPart("nom_article") String nom_article,
            @RequestPart("délai") String délai,
            @RequestPart("description") String description,
            @RequestPart("prixMin") String prixMin,
            @RequestPart("date_debut") String date_debut,
            @RequestPart("date_fin") String date_fin) {

        try {
            Article article = new Article();
            article.setNom_article(nom_article);
            article.setDélai(LocalTime.parse(délai));
            article.setDescription(description);
            article.setPrixMin(Double.parseDouble(prixMin));
            article.setDate_debut(LocalDate.parse(date_debut));
            article.setDate_fin(LocalDate.parse(date_fin));

            // Chemin relatif par rapport à la racine du projet
            String relativePath = "bidfrontend/public/images";
            String directoryPath = new File(relativePath).getAbsolutePath();

            File directory = new File(directoryPath);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String imagePath = directoryPath + File.separator + imageFile.getOriginalFilename();
            imageFile.transferTo(new File(imagePath));

            // Utilisez le chemin relatif comme valeur de l'image
            article.setImage("images/" + imageFile.getOriginalFilename());
            articleService.save(article);


        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
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

    @GetMapping("/vendeur/{id}")
    public List<Article> getArticleByIdVendeur(@PathVariable int id){return articleService.getArticlesVendeur(id);}

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
