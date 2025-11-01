import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Search from './pages/search/Search'
import Alert from './pages/alert/Alert'
import Map from './pages/map/Map'
import Test from './pages/Test'
import Sign_in from './pages/connexion/sing-in/sing_in'
import Sign_up from './pages/connexion/sign-up/Sign_up'

import './Globals.css'

import NavBar from './pages/navbar/NavBar'
import Connection_header from './pages/connexion/Connection_header'



//import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import L from "leaflet";
//import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
//import markerIcon from "leaflet/dist/images/marker-icon.png";
//import markerShadow from "leaflet/dist/images/marker-shadow.png";




function App() {
  return (
    <BrowserRouter>
    
      

      {/* La navbar est toujours affichée */}
      <NavBar />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/alerte" element={<Alert />} />
        <Route path="/map" element={<Map />} />
        <Route path="/test" element={<Test />} />
        <Route path="/inscription" element={<Sign_in />} />
        <Route path="/connection" element={<Sign_up />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
