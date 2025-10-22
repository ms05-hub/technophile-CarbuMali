package technophile.mali.CarbuMali.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import technophile.mali.CarbuMali.dto.UtilisateurDTO;
import technophile.mali.CarbuMali.model.Administrateur;
import technophile.mali.CarbuMali.model.Conducteur;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.service.UtilisateurService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin(origins = "*") // autorise les requêtes front
public class UtilisateurController {
    private final PasswordEncoder passwordEncoder;
    private final UtilisateurService utilisateurService;

    public UtilisateurController(PasswordEncoder passwordEncoder, UtilisateurService utilisateurService) {
        this.passwordEncoder = passwordEncoder;
        this.utilisateurService = utilisateurService;
    }

    // ✅ Ajouter un utilisateur (Conducteur / Station / Admin)
    @PostMapping("/ajouter")
    public ResponseEntity<?> creerUtilisateur(@RequestBody UtilisateurDTO dto) {
        String hashedPassword = passwordEncoder.encode(dto.getMotDePasse());
        Utilisateur utilisateur;
        switch(dto.getRole()) {
            case CONDUCTEUR:
                utilisateur = new Conducteur(dto.getNom(), dto.getPrenom(), dto.getEmail(), hashedPassword, dto.getLocalisation());
                break;
            case STATION:
                utilisateur = new StationService(
                        dto.getNom(),
                        dto.getPrenom(),
                        dto.getEmail(),
                        hashedPassword,
                        dto.getLocalisation(),
                        dto.getNomStation(),
                        dto.getAdresse(),
                        dto.getLatitude(),
                        dto.getLongitude()
                );
                break;
            case ADMIN:
                utilisateur = new Administrateur(dto.getNom(), dto.getPrenom(), dto.getEmail(), hashedPassword, dto.getLocalisation());
                break;
            default:
                return ResponseEntity.badRequest().body("Rôle inconnu");
        }
        utilisateurService.creerUtilisateur(utilisateur);
        return ResponseEntity.ok(utilisateur);
    }
    // ✅ Récupérer tous les utilisateurs
    @GetMapping
    public ResponseEntity<List<Utilisateur>> getTousLesUtilisateurs() {
        List<Utilisateur> utilisateurs = utilisateurService.getTousLesUtilisateurs();
        return ResponseEntity.ok(utilisateurs);
    }
    /*
    // ✅ Récupérer un utilisateur par ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getUtilisateurParId(@PathVariable Long id) {
        Optional<Utilisateur> utilisateur = utilisateurService.getUtilisateurParId(id);
        return utilisateur.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Utilisateur non trouvé"));
    }

    // ✅ Récupérer un utilisateur par email
    @GetMapping("/email/{email}")
    public ResponseEntity<?> getUtilisateurParEmail(@PathVariable String email) {
        Optional<Utilisateur> utilisateur = utilisateurService.getUtilisateurParEmail(email);
        return utilisateur.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Utilisateur non trouvé"));
    }

     */

    // ✅ Supprimer un utilisateur
    @DeleteMapping("/{id}")
    public ResponseEntity<?> supprimerUtilisateur(@PathVariable Long id) {
        utilisateurService.supprimerUtilisateur(id);
        return ResponseEntity.ok("Utilisateur supprimé avec succès");
    }
}
