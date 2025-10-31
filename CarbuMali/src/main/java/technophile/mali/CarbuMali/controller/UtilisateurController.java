package technophile.mali.CarbuMali.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import technophile.mali.CarbuMali.dto.UtilisateurDTO;
import technophile.mali.CarbuMali.model.Administrateur;
import technophile.mali.CarbuMali.model.Conducteur;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.service.ConducteurService;
import technophile.mali.CarbuMali.service.StationServiceService;
import technophile.mali.CarbuMali.service.UtilisateurService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/utilisateurs")
@CrossOrigin(origins = "*") // autorise les requêtes front
public class UtilisateurController {
    private final PasswordEncoder passwordEncoder;
    private final UtilisateurService utilisateurService;
    private final StationServiceService stationService;
    private final ConducteurService conducteurService;

    public UtilisateurController(PasswordEncoder passwordEncoder, UtilisateurService utilisateurService, StationServiceService stationServiceService, ConducteurService conducteurService) {
        this.passwordEncoder = passwordEncoder;
        this.utilisateurService = utilisateurService;
        this.stationService = stationServiceService;
        this.conducteurService = conducteurService;
    }

    // ✅ Ajouter un utilisateur (Conducteur / Station / Admin)
    @PostMapping("/ajouter")
    public ResponseEntity<?> creerUtilisateur(@RequestBody UtilisateurDTO dto) {
        String hashedPassword = passwordEncoder.encode(dto.getMotDePasse());
        Utilisateur utilisateur= null ;
        //StationService station= null;
        switch(dto.getRole()) {
            case CONDUCTEUR:
                Conducteur conducteur= new Conducteur(dto.getNom(), dto.getPrenom(), dto.getEmail(), hashedPassword, dto.getLocalisation(), dto.getRole());
                //utilisateurService.creerUtilisateur(utilisateur);
                conducteurService.creerConduteur(conducteur);
                utilisateur = conducteur;
                break;
            case STATION:
                StationService station = new StationService(
                        dto.getNom(),
                        dto.getPrenom(),
                        dto.getEmail(),
                        hashedPassword,
                        dto.getLocalisation(),
                        dto.getNomStation(),
                        dto.getAdresse(),
                        dto.getLatitude(),
                        dto.getLongitude(),
                        dto.getRole()
                );
                stationService.creerStation(station);
                utilisateur = station; // si ta classe StationService hérite de Utilisateur
                break;

            case ADMIN:
                utilisateur = new Administrateur(dto.getNom(), dto.getPrenom(), dto.getEmail(), hashedPassword, dto.getLocalisation());
                utilisateurService.creerUtilisateur(utilisateur);
                break;
            default:
                return ResponseEntity.badRequest().body("Rôle inconnu");
        }
        utilisateurService.creerUtilisateur(utilisateur);
        //stationService.creerStation(station);

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
