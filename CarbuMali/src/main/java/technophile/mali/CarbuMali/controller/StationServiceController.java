package technophile.mali.CarbuMali.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import technophile.mali.CarbuMali.dto.StationAvecDistance;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.service.DistanceService;
import technophile.mali.CarbuMali.service.StationServiceService;
import technophile.mali.CarbuMali.exeception.StationNotFoundException;

import java.util.List;

@RestController
@RequestMapping("/api/stations")
@CrossOrigin(origins = "*") // autorise les requêtes du front
public class StationServiceController {

    private final StationServiceService stationServiceService;
    private final DistanceService distanceService;

    public StationServiceController(StationServiceService stationServiceService,
                                    DistanceService distanceService) {
        this.stationServiceService = stationServiceService;
        this.distanceService = distanceService;
    }

    // ✅ Récupérer toutes les stations
    @GetMapping
    public ResponseEntity<List<StationService>> getToutesLesStations() {
        List<StationService> stations = stationServiceService.getToutesLesStations();
        return ResponseEntity.ok(stations);
    }

    // ✅ Récupérer uniquement les stations ayant du carburant disponible
    @GetMapping("/disponibles")
    public ResponseEntity<List<StationService>> getStationsDisponibles() {
        List<StationService> stations = stationServiceService.getStationsDisponibles();
        return ResponseEntity.ok(stations);
    }

    // ✅ Mettre à jour le statut carburant (essence ou gasoil)
    @PutMapping("/{id}/update-stock")
    public ResponseEntity<?> updateStock(
            @PathVariable Long id,
            @RequestParam String type,     // ESSENCE ou GASOIL
            @RequestParam String statut    // DISPONIBLE, LIMITE, RUPTURE
    ) {
        try {
            StationService updated = stationServiceService.updateStock(id, type, statut);
            return ResponseEntity.ok(updated);
        } catch (StationNotFoundException e) {
            return ResponseEntity.status(404).body(e.getMessage());
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // ✅ Récupérer les stations proches avec distance
    @GetMapping("/stations-proches")
    public ResponseEntity<List<StationAvecDistance>> getStationsProches(
            @RequestParam Double lat,
            @RequestParam Double lon,
            @RequestParam Double rayon) {

        List<StationService> stations = stationServiceService.getStationsProches(lat, lon, rayon);

        List<StationAvecDistance> stationsAvecDistance = stations.stream()
                .map(station -> {
                    double distance = distanceService.calculateDistance(
                            lat,
                            lon,
                            station.getLatitude(),
                            station.getLongitude()
                    );
                    return new StationAvecDistance(station, distance);
                })
                .toList();

        return ResponseEntity.ok(stationsAvecDistance);
    }
}
