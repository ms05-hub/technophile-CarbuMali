package technophile.mali.CarbuMali.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import technophile.mali.CarbuMali.model.Utilisateur;

import java.util.Optional;

public interface UtilisateurRepository extends JpaRepository<Utilisateur,Long> {
    Optional<Utilisateur> findByEmail(String email);
}
