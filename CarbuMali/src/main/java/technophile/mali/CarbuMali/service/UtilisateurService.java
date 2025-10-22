package technophile.mali.CarbuMali.service;

import org.springframework.stereotype.Service;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.repository.UtilisateurRepository;

import java.util.List;
import java.util.Optional;

@Service
public class UtilisateurService {

    private final UtilisateurRepository utilisateurRepository;

    public UtilisateurService(UtilisateurRepository utilisateurRepository) {
        this.utilisateurRepository = utilisateurRepository;
    }

    // ✅ Créer un utilisateur
    public Utilisateur creerUtilisateur(Utilisateur utilisateur) {
        return utilisateurRepository.save(utilisateur);
    }

    // ✅ Récupérer tous les utilisateurs
    public List<Utilisateur> getTousLesUtilisateurs() {
        return utilisateurRepository.findAll();
    }

    // ✅ Trouver un utilisateur par ID
    public Optional<Utilisateur> getUtilisateurParId(Long id) {
        return utilisateurRepository.findById(id);
    }

    // ✅ Trouver un utilisateur par email
    public Optional<Utilisateur> getUtilisateurParEmail(String email) {
        return utilisateurRepository.findByEmail(email);
    }

    // ✅ Supprimer un utilisateur
    public void supprimerUtilisateur(Long id) {
        utilisateurRepository.deleteById(id);
    }
}
