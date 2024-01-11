package com.example.BidBackend.service;

import com.example.BidBackend.model.Utilisateur;
import com.example.BidBackend.repository.UtilisateurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurServiceImpl implements UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Override
    public Utilisateur save(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    @Override
    public Utilisateur findById(int id) {
        Optional<Utilisateur> optionalUtilisateur = utilisateurRepository.findById(id);
        return optionalUtilisateur.orElse(null);
    }

    @Override
    public Utilisateur findByEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }

    @Override
    public List<Utilisateur> getAllUsers() {
        return utilisateurRepository.findAll();
    }

    @Override
    public Utilisateur updateUtilisateur(int id, Utilisateur utilisateur) {
        // Vérifiez si l'utilisateur avec l'ID spécifié existe
        Optional<Utilisateur> existingUtilisateurOptional = utilisateurRepository.findById(id);

        if (existingUtilisateurOptional.isPresent()) {
            Utilisateur existingUtilisateur = existingUtilisateurOptional.get();

            // Mettez à jour les champs de l'utilisateur existant avec les nouvelles valeurs
            existingUtilisateur.setEst_vendeur(utilisateur.isEst_vendeur());
            existingUtilisateur.setEmail(utilisateur.getEmail());
            existingUtilisateur.setNom_utilisateur(utilisateur.getNom_utilisateur());
            existingUtilisateur.setPrenom_utilisateur(utilisateur.getPrenom_utilisateur());

            // Enregistrez les modifications dans la base de données
            return utilisateurRepository.save(existingUtilisateur);
        } else {
            return null;  }


}

    @Override
    public void deleteUtilisateur(int id) {
        utilisateurRepository.deleteById(id);
    }
}
