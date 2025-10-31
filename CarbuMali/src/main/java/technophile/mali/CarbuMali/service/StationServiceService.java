package technophile.mali.CarbuMali.service;


import org.springframework.stereotype.Service;
import technophile.mali.CarbuMali.exeception.StationNotFoundException;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.model.StatutCarburant;
import technophile.mali.CarbuMali.model.Utilisateur;
import technophile.mali.CarbuMali.repository.StationRepository;


import java.util.ArrayList;
import java.util.Collections;
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
    public StationService creerStation(StationService stationService) {
        return stationRepository.save(stationService);
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

    public List<StationService> getStationsProches(Double latUser, Double lonUser, Double distanceMaxMetres) {
        List<StationService> toutesLesStations = stationRepository.findAll();

        if (toutesLesStations.isEmpty()) {
            return Collections.emptyList();
        }

        List<StationService> stationsProches = new ArrayList<>();

        final double R = 6_371_000; // Rayon de la Terre en mètres

        for (StationService station : toutesLesStations) {
            Double latStation = station.getLatitude();
            Double lonStation = station.getLongitude();

            // Conversion degrés → radians
            double lat1Rad = Math.toRadians(latUser);
            double lon1Rad = Math.toRadians(lonUser);
            double lat2Rad = Math.toRadians(latStation);
            double lon2Rad = Math.toRadians(lonStation);

            // Différences
            double dLat = lat2Rad - lat1Rad;
            double dLon = lon2Rad - lon1Rad;

            // Formule de Haversine
            double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                    + Math.cos(lat1Rad) * Math.cos(lat2Rad)
                    * Math.sin(dLon / 2) * Math.sin(dLon / 2);

            double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            // Distance en mètres
            double distance = R * c;


            if (distance <= distanceMaxMetres) {
                stationsProches.add(station);
            }
        }

        return stationsProches;
    }

}
