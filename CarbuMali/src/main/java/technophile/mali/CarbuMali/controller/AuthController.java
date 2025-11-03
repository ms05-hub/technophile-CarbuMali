package technophile.mali.CarbuMali.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import technophile.mali.CarbuMali.dto.LoginRequest;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.service.AuthService;
import technophile.mali.CarbuMali.utile.JwtUtile;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtile jwtUtile;
    private final AuthService authService;

    public AuthController(AuthenticationManager authenticationManager, JwtUtile jwtUtil, AuthService authService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtile = jwtUtil;
        this.authService = authService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        /*try {
            Utilisateur utilisateur = authService.connexion(loginRequest.getEmail(), loginRequest.getMotDePasse());
            return ResponseEntity.ok(utilisateur);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
         */

        try {
            Authentication auth = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginRequest.getEmail(),
                            loginRequest.getMotDePasse()
                    )
            );
            String token = jwtUtile.generateToken(loginRequest.getEmail());
            Map<String, String> response = new HashMap<>();
            response.put("token", token);
            return ResponseEntity.ok(response);
        } catch (BadCredentialsException e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "Identifiants invalides");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);
        }
    }
}
