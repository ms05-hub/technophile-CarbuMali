package technophile.mali.CarbuMali.service;


import org.springframework.stereotype.Service;
import technophile.mali.CarbuMali.exeception.StationNotFoundException;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.model.StatutCarburant;
import technophile.mali.CarbuMali.repository.StationRepository;


import java.util.List;

@Service
public class StationServiceService {

    private final StationRepository stationRepository;

    public StationServiceService(StationRepository stationRepository) {
        this.stationRepository = stationRepository;
    }

    // Récupérer toutes les stations
    public List<StationService> getToutesLesStations() {
        return stationRepository.findAll();
    }

    // Récupérer les stations disponibles
    public List<StationService> getStationsDisponibles() {
        return stationRepository.findByStatutEssenceOrStatutGasoil(
                StatutCarburant.DISPONIBLE, StatutCarburant.DISPONIBLE);
    }


    public StationService updateStock(Long id, String type, String statut) {
        StationService station = stationRepository.findById(id)
                .orElseThrow(() -> new StationNotFoundException("Station non trouvée avec l'id " + id));

        StatutCarburant nouveauStatut = StatutCarburant.valueOf(statut.toUpperCase());

        if (type.equalsIgnoreCase("ESSENCE")) {
            station.setStatutEssence(nouveauStatut);
        } else if (type.equalsIgnoreCase("GASOIL")) {
            station.setStatutGasoil(nouveauStatut);
        } else {
            throw new IllegalArgumentException("Type de carburant invalide : " + type);
        }

        return stationRepository.save(station);
    }
}
