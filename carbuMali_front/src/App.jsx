import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/search/Search';
import Alert from './pages/alert/NoAlert';
import Alert_prod from './pages/alert/Alert'
import Map from './pages/map/Map';
import Test from './pages/Test';
import Sign_in from './pages/connexion/sing-in/sing_in';
import Sign_up from './pages/connexion/sign-up/Sign_up';
import Inscription_map from './pages/map/Inscription_map';
import Compte from './pages/compte/Compte'

import { FormProvider } from "./pages/connexion/context/FormContext";

import './Globals.css';

import NavBar from './pages/navbar/NavBar';
import Connection_header from './pages/connexion/Connection_header';

function App() {
  return (
    <BrowserRouter>
      {/* FormProvider enveloppe toute l'application pour partager formData */}
      <FormProvider>
        {/* La navbar est toujours affichée */}
        <NavBar />

        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/alerte" element={<Alert />} />
          <Route path="/alerte_prod" element={<Alert_prod />} />
          <Route path="/map" element={<Map />} />
          <Route path="/test" element={<Test />} />
          <Route path="/inscription" element={<Sign_in />} />
          <Route path="/connection" element={<Sign_up />} />
          <Route path="/inscription/map" element={<Inscription_map />} />
          <Route path="/compte" element={<Compte/>}/>
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
