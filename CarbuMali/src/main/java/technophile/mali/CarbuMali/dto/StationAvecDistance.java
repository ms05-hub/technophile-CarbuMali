package technophile.mali.CarbuMali.dto;

import technophile.mali.CarbuMali.model.StationService;

public class StationAvecDistance {

    private StationService station;
    private double distance; // en mètres

    public StationAvecDistance(StationService station, double distance) {
        this.station = station;
        this.distance = distance;
    }

    public StationService getStation() {
        return station;
    }

    public double getDistance() {
        return distance;
    }
}
