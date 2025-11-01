import React from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import AvatarBlack from '/src/assets/Avatar_black.png'

function Tableau_search_body({ station, isPopupOpen, onOpen, onClose }) {
    return (
        <>
            <div
                className="sm: flex justify-center items-center w-full max-w-[373px] max-h-[54px] gap-x-5 text-sm bg-[#2AB7CA] rounded-[25px] p-4 cursor-pointer"
                onClick={onOpen}
            >
                <div className="sm: flex items-center justify-center -[41px] h-[41px] rounded-full bg-[#E6E6EA] overflow-hidden">
                    <img src={AvatarBlack} alt="" className="w-full h-full object-cover" />
                </div>
                <h1>{station.nomStation}</h1>
                <h1>{station.distance}m</h1>
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
