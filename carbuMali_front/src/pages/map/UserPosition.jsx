import { useState, useEffect } from "react";

export default function useUserPosition() {
  const [userPosition, setUserPosition] = useState(null);
  const [geoError, setGeoError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeoError("La géolocalisation n'est pas prise en charge par votre navigateur.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Erreur de géolocalisation :", error);
        setGeoError("Impossible d'obtenir votre position.");
      }
    );
  }, []);

  return { userPosition, geoError };
}
