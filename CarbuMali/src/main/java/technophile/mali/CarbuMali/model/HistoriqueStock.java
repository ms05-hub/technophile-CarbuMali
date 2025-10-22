package technophile.mali.CarbuMali.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class HistoriqueStock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idHistorique;

    private LocalDateTime dateMaj;
    private String typeCarburant;
    private String ancienStatut;
    private String nouveauStatut;

    @ManyToOne
    @JoinColumn(name = "station_id")
    private StationService station;
}
