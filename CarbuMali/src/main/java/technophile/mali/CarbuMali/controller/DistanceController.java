package technophile.mali.CarbuMali.controller;

import technophile.mali.CarbuMali.service.DistanceService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/distance")
public class DistanceController {

    private final DistanceService distanceService;

    public DistanceController(DistanceService distanceService) {
        this.distanceService = distanceService;
    }

    @GetMapping
    public double getDistance(
            @RequestParam double lat1,
            @RequestParam double lon1,
            @RequestParam double lat2,
            @RequestParam double lon2
    ) {
        return distanceService.calculateDistance(lat1, lon1, lat2, lon2);
    }
}
