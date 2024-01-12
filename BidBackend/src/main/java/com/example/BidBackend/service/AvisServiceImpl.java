package com.example.BidBackend.service;

import com.example.BidBackend.model.Avis;
import com.example.BidBackend.repository.AvisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvisServiceImpl implements AvisService {

    @Autowired
    private AvisRepository avisRepository;

    @Override
    public Avis save(Avis avis) {
        return avisRepository.save(avis);
    }

    @Override
    public Avis findById(int id) {
        Optional<Avis> optionalAvis = avisRepository.findById(id);
        return optionalAvis.orElse(null);
    }

    @Override
    public List<Avis> getAvisForUser(int userId) {
        // Implémentez la logique pour récupérer les avis pour un utilisateur spécifique
        // return avisRepository.findByUserId(userId);
        return null;
    }

}
