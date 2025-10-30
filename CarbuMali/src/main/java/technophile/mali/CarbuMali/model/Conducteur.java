package technophile.mali.CarbuMali.model;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
public class Conducteur extends Utilisateur {

    public void rechercherStation(String proximite) {}
    public void afficherCarte() {}

    public Conducteur(String nom, String prenom, String email, String motDePasse, String localisation, Role role) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.localisation = localisation;
        this.role = role;
    }

}
