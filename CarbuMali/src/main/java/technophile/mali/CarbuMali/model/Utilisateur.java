package technophile.mali.CarbuMali.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Data
public abstract class Utilisateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUtilisateur;

    public String nom;
    public String prenom;
    public String email;
    public String motDePasse;
    public String localisation;

    @Enumerated(EnumType.STRING)
    public Role role;

    // Getters & Setters
    public Utilisateur() {}


    public Utilisateur(String nom, String prenom, String email, String motDePasse, String localisation, Role role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.localisation = localisation;
        this.role = role;
    }

    public void seConnecter() {}
    public void seDeconnecter() {}
}

