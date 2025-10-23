import React, { useState } from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import Tableau_search_body from './Tableau_search_body';

function Tableau_search() {
    //const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className='sm:flex flex-col items-center justify-center'>

            <div className='sm: flex flex-row max-w-[373px] px-[25px] items-center gap-x-6 text-sm justify-between '>
                <div className='w-[41px]'></div> {/* espace pour l'avatar */}
                <div>Nom</div>
                <div>Distance</div>
                <div>Status</div>
            </div><br />

            <Tableau_search_body></Tableau_search_body> <br />
            <Tableau_search_body></Tableau_search_body> <br />
            
           
        </div>
    );
}

export default Tableau_search;
