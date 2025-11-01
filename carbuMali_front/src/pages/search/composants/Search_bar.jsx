import React, { useState, useEffect } from 'react';
import '/src/Globals.css';
import NavBar from '../../navbar/NavBar';
import SearchBlack from '/src/assets/search_black.png';

function Search_bar() {
    const [inputValue, setInputValue] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Si le champ est vide, on efface les résultats
        if (inputValue.trim() === '') {
            setResults([]);
            return;
        }

        // Debounce : attend 400ms après la dernière frappe
        const timeout = setTimeout(() => {
            fetchStations(inputValue);
        }, 400);

        return () => clearTimeout(timeout);
    }, [inputValue]);

    const fetchStations = async (query) => {
        setIsLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/api/stations?query=${encodeURIComponent(query)}`);
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
        <div className="sm: flex flex-col items-center">
            <div className='sm: flex items-center justify-center bg-[#E6E6EA] w-[359px] h-[35px] rounded-2xl px-px shadow-xl'>
                <input
                    type="text"
                    id='search_field'
                    placeholder='Rechercher une station'
                    maxLength={18}
                    minLength={1}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className='sm: w-[300px] h-[35px] rounded-s-2xl px-2 outline-none'
                />

                <div
                    className={`sm: flex items-center justify-center w-[59px] h-[35px] rounded-e-2xl transition-colors duration-300 
                        ${inputValue.length > 0 ? 'bg-[#2AB7CA]' : 'bg-[#E6E6EA]'}`}
                >
                    <img src={SearchBlack} alt="search icon" className='w-[24px] h-[24px]' />
                </div>
            </div>

            {/* Résultats */}
            <div className="sm: bg-white mt-2 w-[359px] rounded-lg shadow-md max-h-60 overflow-y-auto">
                {isLoading && <p className="text-gray-500 text-sm p-2">Recherche...</p>}

                {!isLoading && results.length > 0 && results.map((station) => (
                    <div key={station.id} className="sm: p-2 hover:bg-gray-100 cursor-pointer">
                        {station.name}
                    </div>
                ))}

                {!isLoading && inputValue && results.length === 0 && (
                    <p className="sm: text-gray-500 text-sm p-2">Aucune station trouvée</p>
                )}
            </div>
        </div>
    );
}

export default Search_bar;
