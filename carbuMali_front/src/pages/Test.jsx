// src/pages/map/Map.jsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useEffect } from 'react'

// (Optionnel) Correction du marker par défaut (sinon il ne s'affiche pas)
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

function Test() {
  // Position initiale (latitude, longitude)
  const position = [48.8566, 2.3522] // Paris par exemple

  return (
    <div className="w-full h-screen">
      <MapContainer center={position} zoom={13} className="w-full h-full">
        {/* Tu peux utiliser d'autres fonds que OpenStreetMap ici */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Marqueur exemple */}
        <Marker position={position}>
          <Popup>Tu es ici 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
export default Test