package technophile.mali.CarbuMali.service;

import org.springframework.stereotype.Service;

@Service
public class DistanceService {

    /**
     * Calcule la distance entre deux points GPS (latitude, longitude)
     * @param lat1 latitude du point 1 (en degrés)
     * @param lon1 longitude du point 1 (en degrés)
     * @param lat2 latitude du point 2 (en degrés)
     * @param lon2 longitude du point 2 (en degrés)
     * @return distance en mètres
     */
    public double calculateDistance(double lat1, double lon1, double lat2, double lon2) {
        // Rayon moyen de la Terre en mètres
        final double R = 6_371_000;

        // Conversion degrés → radians
        double lat1Rad = Math.toRadians(lat1);
        double lon1Rad = Math.toRadians(lon1);
        double lat2Rad = Math.toRadians(lat2);
        double lon2Rad = Math.toRadians(lon2);

        // Différences
        double dLat = lat2Rad - lat1Rad;
        double dLon = lon2Rad - lon1Rad;

        // Formule de Haversine
        double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                + Math.cos(lat1Rad) * Math.cos(lat2Rad)
                * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        // Distance finale en mètres
        return R * c;
    }
}
