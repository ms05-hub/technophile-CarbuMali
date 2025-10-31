package technophile.mali.CarbuMali.service;

import org.springframework.stereotype.Service;
import technophile.mali.CarbuMali.model.Conducteur;
import technophile.mali.CarbuMali.model.StationService;
import technophile.mali.CarbuMali.repository.ConducteurRepository;

@Service
public class ConducteurService {
    private final ConducteurRepository conducteurRepository;

    public ConducteurService(ConducteurRepository conducteurRepository) {
        this.conducteurRepository = conducteurRepository;
    }
    public Conducteur creerConduteur(Conducteur conducteur) {
        return conducteurRepository.save(conducteur);
    }
}
