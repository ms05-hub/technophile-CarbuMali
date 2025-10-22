package technophile.mali.CarbuMali.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.repository.UtilisateurRepository;

@Service
public class AuthService {

    private final UtilisateurRepository utilisateurRepository;
    private final PasswordEncoder passwordEncoder;

    public AuthService(UtilisateurRepository utilisateurRepository, PasswordEncoder passwordEncoder) {
        this.utilisateurRepository = utilisateurRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Utilisateur connexion(String email, String motDePasse) {
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé avec cet email"));

        if (!passwordEncoder.matches(motDePasse, utilisateur.getMotDePasse())) {
            throw new RuntimeException("Mot de passe incorrect");
        }

        return utilisateur;
    }
}
