import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css"; // très important pour afficher correctement la carte

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Correction des icônes Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function App() {
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

  // 🕓 Si la position n'est pas encore obtenue
  if (!userPosition && !geoError) {
    return (
      <div className="sm: h-screen w-screen flex justify-center items-center">
        <p>📡 Recherche de votre position en cours...</p>
      </div>
    );
  }

  // ❌ Si la géolocalisation échoue
  if (geoError) {
    return (
      <div className="sm: h-screen w-screen flex justify-center items-center text-red-600">
        <p>{geoError}</p>
      </div>
    );
  }

  // 🗺️ Quand la position est disponible
  return (
    <div className="sm: h-screen w-screen relative z-0">
      <MapContainer
        center={[userPosition.lat, userPosition.lng]}
        zoom={15}
        scrollWheelZoom={true}
        className="sm: h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[userPosition.lat, userPosition.lng]}>
          <Popup>Vous êtes ici 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
