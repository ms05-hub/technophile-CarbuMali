package technophile.mali.CarbuMali.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.model.StatutCarburant;

import java.util.List;

public interface StationRepository extends JpaRepository<StationService,Long> {

    List<StationService> findByStatutEssenceOrStatutGasoil(StatutCarburant statutCarburant, StatutCarburant statutCarburant1);
}
