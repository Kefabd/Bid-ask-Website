package com.example.BidBackend.controller;

import com.example.BidBackend.model.Utilisateur;
import com.example.BidBackend.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
<<<<<<< HEAD
@RequestMapping("/utilisateurs")
@CrossOrigin
=======
@RequestMapping("/Utilisateur")
>>>>>>> 987d6cbd598f5513b2b8d6e33f22332697fce82b
public class UtilisateurController {

    @Autowired
    private UtilisateurService utilisateurService;

    @GetMapping("/getAll")
    public List<Utilisateur> getAllUtilisateurs() {
        return utilisateurService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Utilisateur getUtilisateurById(@PathVariable int id) {
        return utilisateurService.findById(id);
    }

    @PostMapping("/add")
<<<<<<< HEAD
    public Utilisateur createUtilisateur(@RequestBody Utilisateur utilisateur) {
        return utilisateurService.save(utilisateur);
=======
    public String createUtilisateur(@RequestBody Utilisateur utilisateur) {
        utilisateurService.save(utilisateur);
        return "New user added";

>>>>>>> 987d6cbd598f5513b2b8d6e33f22332697fce82b
    }

    // Endpoint pour mettre à jour un utilisateur existant
    @PutMapping("/update/{id}")
    public String updateUtilisateur(@PathVariable int id, @RequestBody Utilisateur utilisateur) {
        utilisateurService.updateUtilisateur(id, utilisateur);
        return "User updated";
    }

    // Endpoint pour supprimer un utilisateur par ID
    @DeleteMapping("/delete/{id}")
    public String deleteUtilisateur(@PathVariable int id)
    {
        utilisateurService.deleteUtilisateur(id);
        return "User deleted";
    }
}
