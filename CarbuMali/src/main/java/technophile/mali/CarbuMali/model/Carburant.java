package technophile.mali.CarbuMali.model;

import jakarta.persistence.*;

@Entity
public class Carburant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idCarburant;

    @Enumerated(EnumType.STRING)
    private TypeCarburant type;

    @Enumerated(EnumType.STRING)
    private StatutCarburant statut;

    @ManyToOne
    @JoinColumn(name = "station_id")
    private StationService station;
}
