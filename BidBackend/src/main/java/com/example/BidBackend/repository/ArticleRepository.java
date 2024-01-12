package com.example.BidBackend.repository;

import com.example.BidBackend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article,Long> {
    @Query("SELECT a FROM Article a WHERE a.description = :description")
    List<Article> findByDescription(@Param("description") String description);

    Optional<Article> findById(Long id);
    @Query("SELECT a FROM Article a WHERE A.utilisateur.id_utilisateur")
    List<Article> findByIdVendeur(@Param("id" int id))

}
