import React, { useState, useEffect } from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import Tableau_search_body from './Tableau_search_body';

function Tableau_search() {
  const [openPopupIndex, setOpenPopupIndex] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch stations on component mount
  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/stations');
      if (!response.ok) throw new Error('Erreur réseau');
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sm: flex flex-col w-full h-screen bg-white">
      {/* 🧭 Header */}
      <div className="sm: flex flex-row px-[25px] py-3 items-center gap-x-6 text-sm justify-between sticky top-0 bg-white z-10 border-b shadow-sm">
        <div className="sm: w-[41px]"></div>
        <div className="sm: font-semibold">Nom</div>
        <div className="sm: font-semibold">Distance</div>
        <div className="sm: font-semibold">Status</div>
      </div>

      {/* 📜 Scrollable List */}
      <div className="sm: flex-1 overflow-y-auto px-[25px] py-2">
        {isLoading ? (
          <div className="sm: flex items-center justify-center text-center text-gray-500 py-6">Chargement...</div>
        ) : results.length === 0 ? (
          <div className="sm: flex items-center justify-center text-center text-gray-400 py-6">Aucune station trouvée</div>
        ) : (
          results.map((station, index) => (
            <div key={station.id || index} className="sm: mb-2">
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
