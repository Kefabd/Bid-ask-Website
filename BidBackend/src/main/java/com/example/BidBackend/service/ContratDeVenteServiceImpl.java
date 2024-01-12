package com.example.BidBackend.service;
import com.example.BidBackend.model.ContratDeVente;
import com.example.BidBackend.repository.ContratDeVenteRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.PdfWriter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ContratDeVenteServiceImpl implements ContratDeVenteService {

    @Autowired
    private ContratDeVenteRepository contratDeVenteRepository;


    @Override
    public ContratDeVente generateSaleContract(long articleId, int buyerId) {
        return null;
    }

    @Override
    public ContratDeVente save(ContratDeVente contratDeVente) {
        return contratDeVenteRepository.save(contratDeVente);
    }

    @Override
    public ContratDeVente findById(int id) {
        Optional<ContratDeVente> optionalContratDeVente = contratDeVenteRepository.findById(id);
        return optionalContratDeVente.orElse(null);
    }



    @Override
    public void getContractsForUser( HttpServletResponse response) throws IOException {
        Document document=new Document(PageSize.A4);
        PdfWriter.getInstance(document,response.getOutputStream());
        document.open();
        Font fontTitle= FontFactory.getFont(FontFactory.HELVETICA_BOLD);
        fontTitle.setSize(18);
        Paragraph paragraph=new Paragraph("Contrat De Vente",fontTitle);
        paragraph.setAlignment(Paragraph.ALIGN_CENTER);
        Font fontParagraoh=FontFactory.getFont(FontFactory.HELVETICA);
        fontParagraoh.setSize(12);
        Paragraph paragraph2=new Paragraph("bla bla",fontParagraoh);
        paragraph2.setAlignment(Paragraph.ALIGN_LEFT);

        document.add(paragraph);
        document.add(paragraph2);
        document.close();
    }
    @Autowired
    private JavaMailSender mailSender;



    public void sendEmail(String toEmail,String subject,String body){
        SimpleMailMessage message=new SimpleMailMessage();
        message.setFrom("nadiahanine19@gmail.com");
        message.setTo(toEmail);
        message.setText(body);
        message.setSubject(subject);
        mailSender.send(message);
        System.out.println("mail sent succesfully rorororory");

    }
/*


    private void sendBuyerEmail(int buyerId, ContratDeVente contratDeVente) {
        // Logique pour récupérer les informations de l'acheteur
        // ...

        // Génération du contenu de l'e-mail
        String emailContent = "Bonjour " + buyerName + ",\n\n";
        emailContent += "Merci d'avoir effectué l'achat. Vous trouverez ci-joint le contrat de vente.";

        // Envoi de l'e-mail
        emailUtil.sendEmail(buyerEmail, "Confirmation d'achat", emailContent, contratDeVente.getPdfContent());
    }

    private void sendSellerEmail(long articleId, ContratDeVente contratDeVente) {
        // Logique pour récupérer les informations du vendeur
        // ...

        // Génération du contenu de l'e-mail
        String emailContent = "Bonjour " + sellerName + ",\n\n";
        emailContent += "Félicitations! Votre article a été vendu. Vous trouverez ci-joint le contrat de vente.";

        // Envoi de l'e-mail
        emailUtil.sendEmail(sellerEmail, "Confirmation de vente", emailContent, contratDeVente.getPdfContent());
    }*/
}
