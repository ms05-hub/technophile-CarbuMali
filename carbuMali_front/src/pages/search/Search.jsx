import { useState } from 'react';
import '/src/Globals.css';
import Search_bar from './composants/Search_bar';
import Tableau_search from './composants/Tableau_search';
import Filter from './composants/Filter';
import Connection_header from '../connexion/Connection_header';

function Search() {
  return (
    <div className="sm: flex flex-col h-screen ">
      {/* 🧭 Header fixe */}
      <div className="sm: sticky top-0 z-30 ">
        <Connection_header />
      </div>

      {/* 🔍 Barre de recherche et filtre fixes sous le header */}
      <div className="sm: sticky top-[70px] z-20 "> {/* top = hauteur du header */}
        <div className="sm: px-4 py-2">
          <Search_bar />
          <div className="sm: mt-9">
            <Filter />
          </div>
        </div>
      </div>

      {/* 📋 Tableau scrollable */}
      <div className="sm: flex-1 mt-20 overflow-y-auto">
        <Tableau_search />
      </div>
    </div>
  );
}

export default Search;
