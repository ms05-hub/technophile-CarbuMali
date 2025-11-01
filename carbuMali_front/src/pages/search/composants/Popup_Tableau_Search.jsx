import React from 'react';
function Popup_Tableau_Search({ station, onClose }) {
    return (
        <div className="sm: flex items-center justify-center">
            <div className='sm: relative flex flex-col w-[328px] h-[344px] bg-[#FED766] rounded-[20px] p-[20px] gap-y-5'>
                
                {/* Bouton cancel */}
                <div 
                    className='sm: absolute top-3 right-4 cursor-pointer'
                    onClick={onClose}
                >
                    <img src="/src/assets/cancel.png" alt="cancel" className='w-[39px] h-[39px]' />
                </div>

                {/* Avatar */}
                <div className='sm: flex flex-col justify-center items-center gap-y-5'>
                    <div className='sm: w-[141px] h-[114px] rounded-full bg-red-900 overflow-hidden'>
                        <img src="/src/assets/avatar.png" alt="avatar" className="sm: object-cover w-full h-full" />
                    </div>
                    <h1 className='sm: text-lg font-bold'>{station.nom}</h1>
                </div>
                
                {/* Informations */}
                <div className='sm: flex flex-col gap-y-5 text-sm'>
                    <div className='sm: flex justify-between'>
                        <p>Distance</p>
                        <p>{station.distance}m</p>
                    </div>

                    <div className='sm: flex justify-between'>
                        <p>Disponibilité</p>
                        <p>Disponible</p>
                    </div>

                    <div className='sm: flex justify-between'>
                        <p>Localisation</p>
                        <p>Paris 12e</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup_Tableau_Search;
