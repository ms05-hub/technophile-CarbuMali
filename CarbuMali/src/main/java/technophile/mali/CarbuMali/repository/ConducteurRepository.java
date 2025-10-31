package technophile.mali.CarbuMali.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import technophile.mali.CarbuMali.model.Conducteur;

@Repository
public interface ConducteurRepository extends CrudRepository<Conducteur, Integer> {
}
