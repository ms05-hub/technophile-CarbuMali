import React, { useState, useEffect } from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import Tableau_search_body from './Tableau_search_body';
import useUserPosition from "/src/pages/map/UserPosition";

function Tableau_search() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { userPosition, geoError } = useUserPosition();

  // ✅ Définir fetchStations avant useEffect
  const fetchStations = async (query = "") => {
    if (!userPosition) return; // attend la géolocalisation
    setIsLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/stations/stations-proches?lat=${userPosition.lat}&lon=${userPosition.lng}&rayon=50000&query=${encodeURIComponent(query)}`
      );

      if (!response.ok) throw new Error("Erreur réseau");
      const data = await response.json();
      console.log("✅ Stations récupérées :", data);
      setResults(data);
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔁 Appel automatique quand la position est dispo
  useEffect(() => {
    if (userPosition) {
      fetchStations();
    }
  }, [userPosition]);

  if (geoError) {
    return <p className="flex items-center justify-center text-red-600">{geoError}</p>;
  }

  if (!userPosition) {
    return <p>📡 Recherche de votre position...</p>;
  }

  return (
    <div className="sm: flex flex-col w-full h-screen bg-white">
      {/* 🧭 Header */}
      <div className="sm: flex flex-row gap-x-6 px-[5px]  py-3 items-center  text-sm justify-between sticky top-0 bg-white z-10 border-b shadow-sm">
        
        <div className="sm: font-semibold">Nom</div>
        <div className="sm: font-semibold">Distance</div>
        <div className="sm: font-semibold">Status</div>
      </div>

      {/* 📜 Liste des résultats */}
      <div className="sm: flex-1 overflow-y-auto px-[25px] py-2">
        {isLoading ? (
          <div className="flex items-center justify-center text-gray-500 py-6">
            Chargement...
          </div>
        ) : results.length === 0 ? (
          <div className="flex items-center justify-center text-gray-400 py-6">
            Aucune station trouvée
          </div>
        ) : (
          results.map((station, index) => (
            <div key={station.id || index} className="mb-2">
              <Tableau_search_body
                station={station}
                isPopupOpen={openPopupIndex === index}
                onOpen={() => setOpenPopupIndex(index)}
                onClose={() => setOpenPopupIndex(null)}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Tableau_search;
