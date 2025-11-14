import React from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import AvatarBlack from '/src/assets/Avatar_black.png'

function Tableau_search_body({ station, isPopupOpen, onOpen, onClose }) {
    
    return (
        <>
            <div
                className="sm: flex justify-between items-center  w-[400px] max-h-[54px] gap-x-6 text-sm bg-[#2AB7CA] rounded-[25px] p-2 cursor-pointer"
                onClick={onOpen}
            >
                
                <h1>{station.station.nomStation}</h1>
                <h1>{Math.floor(station.distance)} m</h1>
                <div
                    className={`sm: w-[30px] h-[30px] rounded-full ${
                        station.status === "OK" ? "bg-[#5CDA0E]" : "bg-red-500"
                    }`}
                ></div>
            </div>

            {/* Popup spécifique à ce tableau */}
            {isPopupOpen && <Popup_Tableau_Search station={station} onClose={onClose} />}
        </>
    );
}

export default Tableau_search_body;
