package technophile.mali.CarbuMali.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import technophile.mali.CarbuMali.dto.LoginRequest;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.service.AuthService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Utilisateur utilisateur = authService.connexion(loginRequest.getEmail(), loginRequest.getMotDePasse());
            return ResponseEntity.ok(utilisateur);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
