package technophile.mali.CarbuMali.dto;

import lombok.Data;
import technophile.mali.CarbuMali.model.Role;
@Data
public class UtilisateurDTO {

    private String nom;
    private String prenom;
    private String email;
    private String motDePasse;
    private String localisation;
    private Role role;

    // Pour les stations uniquement
    private String nomStation;
    private String adresse;

    public Double latitude;
    public Double longitude;

    public UtilisateurDTO() {
    }
    public String getAdresse() { return adresse; }
    // getters et setters
    public String getNom() { return nom; }
    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }
    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMotDePasse() { return this.motDePasse; }
    public void setMotDePasse(String motDePasse) { this.motDePasse = motDePasse; }

    public String getLocalisation() { return localisation; }
    public void setLocalisation(String localisation) { this.localisation = localisation; }

    public Role getRole() { return role; }
    public void setRole(Role role) { this.role = role; }

    public String getNomStation() { return nomStation; }
    public void setNomStation(String nomStation) { this.nomStation = nomStation; }


    public void setAdresse(String adresse) { this.adresse = adresse; }
}
