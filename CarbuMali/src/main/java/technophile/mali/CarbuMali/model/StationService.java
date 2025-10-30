package technophile.mali.CarbuMali.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
@Data
@Entity
public class StationService extends Utilisateur {

    public String nomStation;
    public String adresse;
    public Double latitude;
   public Double longitude;

    public StationService() {
        super();
    }


    public StationService(String nom, String prenom, String email, String motDePasse, String localisation,
                          String nomStation, String adresse, Double latitude, Double longitude, Role role) {
        super(nom, prenom, email, motDePasse, localisation, Role.STATION);
        this.nomStation = nomStation;
        this.adresse = adresse;
        this.latitude = latitude;
        this.longitude = longitude;
        this.statutEssence = StatutCarburant.DISPONIBLE;
        this.statutGasoil = StatutCarburant.DISPONIBLE;
        this.role = role;
    }
    @Enumerated(EnumType.STRING)
    private StatutCarburant statutEssence;

    @Enumerated(EnumType.STRING)
    private StatutCarburant statutGasoil;

    @OneToMany(mappedBy = "station", cascade = CascadeType.ALL)
    private List<Carburant> carburants;

    @OneToMany(mappedBy = "station", cascade = CascadeType.ALL)
    private List<HistoriqueStock> historiques;

    public void mettreAJourStock(String typeCarburant, String statut) {}
    public void consulterHistorique() {}
}
