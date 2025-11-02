import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import useUserPosition from "./UserPosition";


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



export default function Map() {
  



  const { userPosition, geoError } = useUserPosition();

  if (geoError) {
    return <p className="text-red-600">{geoError}</p>;
  }

  if (!userPosition) {
    return <p>📡 Recherche de votre position...</p>;
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
