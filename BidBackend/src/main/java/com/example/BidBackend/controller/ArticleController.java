package com.example.BidBackend.controller;

import com.example.BidBackend.model.Article;
import com.example.BidBackend.model.Utilisateur;
import com.example.BidBackend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;
import java.util.Map;

import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@RestController
@RequestMapping("/article")
@CrossOrigin(origins = "http://localhost:3001")
public class ArticleController {
    @Autowired
    private ArticleService articleService;


    @PostMapping("/add")
    public String createArticle(@RequestPart("image") MultipartFile imageFile,
                                @RequestPart("nom_article") String nom_article,
                                @RequestPart("délai") String délai,
                                @RequestPart("description") String description,
                                @RequestPart("prixMin") String prixMin,
                                @RequestPart("date_debut") String date_debut,
                                @RequestPart("date_fin") String date_fin) {   try {
        Article article = new Article(); // Assurez-vous de déclarer et initialiser un objet Article

        // ... (votre code pour la gestion du fichier image)

        // Mise à jour d'autres champs de l'article avec les valeurs reçues
        article.setNom_article(nom_article);
        article.setDélai(LocalTime.parse(délai));
        article.setDescription(description);
        article.setPrixMin(Double.parseDouble(prixMin));
        article.setDate_debut(LocalDate.parse(date_debut));
        article.setDate_fin(LocalDate.parse(date_fin));
            // Vérifiez si le répertoire existe, sinon créez-le
            String directoryPath = "C:\\image-directory";
            File directory = new File(directoryPath);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            // Construction du chemin complet pour le fichier image
            String imagePath = directoryPath + File.separator + imageFile.getOriginalFilename();

            // Transfert du fichier vers le répertoire spécifié
            imageFile.transferTo(new File(imagePath));

            // Mise à jour du champ imagePath de l'article
            article.setImage(imagePath);

            // Enregistrement de l'article dans la base de données
            articleService.save(article);

        } catch (IOException e) {
            // Gestion des erreurs liées au traitement de l'image
            e.printStackTrace();
        }

        return "redirect:/articles";
    }
    @PostMapping("/verifierPrix")
    public ResponseEntity<?> verifierPrix(@RequestBody Map<String, Double> data) {
        Double prixPropose = data.get("prixPropose");
        Double prixMinUtilisateur = 100.00; // Remplacez par la logique pour obtenir le prix minimum de la table utilisateur

        if (prixPropose >= prixMinUtilisateur) {
            return ResponseEntity.ok(Map.of("accepte", true));
        } else {
            return ResponseEntity.ok(Map.of("accepte", false));
        }
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
