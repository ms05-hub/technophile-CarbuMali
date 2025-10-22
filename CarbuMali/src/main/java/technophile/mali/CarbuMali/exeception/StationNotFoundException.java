package technophile.mali.CarbuMali.exeception;

public class StationNotFoundException extends RuntimeException {
    public StationNotFoundException(String message) {
        super(message);
    }
}
