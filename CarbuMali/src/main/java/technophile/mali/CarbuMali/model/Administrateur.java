package technophile.mali.CarbuMali.model;

import jakarta.persistence.Entity;

@Entity
public class Administrateur extends Utilisateur {

    public void validerStation(StationService station) {}
    public void supprimerCompte(Utilisateur utilisateur) {}
    public Administrateur(String nom, String prenom, String email, String motDePasse, String localisation) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.localisation = localisation;
    }
}
