import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

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

function LocationSelector() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  // Quand l'utilisateur clique sur la carte
  useMapEvents({
    click(e) {
      const position = { lat: e.latlng.lat, lng: e.latlng.lng };
      setSelected(position);

      // 🧭 Redirection immédiate vers /sign-in (ou /login)
      // avec la position dans le state
      navigate("/inscription", { state: { position } });
    },
  });

  return selected ? (
    <Marker position={[selected.lat, selected.lng]}>
      <Popup>Position sélectionnée 📍</Popup>
    </Marker>
  ) : null;
}

export default function Inscription_map() {
  return (
    <div className="h-screen w-screen relative">
      <MapContainer
        center={[14.6937, -17.4441]} // centre initial (Dakar ici)
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Composant qui gère le clic et la redirection */}
        <LocationSelector />
      </MapContainer>

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded shadow">
        <p>🖱️ Cliquez sur la carte pour choisir la position de la station</p>
      </div>
    </div>
  );
}
