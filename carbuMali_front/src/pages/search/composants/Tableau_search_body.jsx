import React, { useState } from 'react';
import Popup_Tableau_Search from './Popup_Tableau_Search';
import Tableau_search from './Tableau_search';

function Tableau_search_body (){
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    return(
        <>
            <div className='sm: flex justify-center items-center w-full max-w-[373px] max-h-[54px] gap-x-5 text-sm bg-[#2AB7CA] rounded-[25px] p-4 cursor-pointer' onClick={() => setIsPopupOpen(true)} >
                <div className='w-[41px] h-[41px] rounded-full bg-red-900 overflow-hidden'>
                    <img src="" alt="" className="w-full h-full object-cover" />
                </div>
                <h1>Station Jhon Doe</h1>
                <h1>600m</h1>
                <div className='bg-[#5CDA0E] w-[30px] h-[30px] rounded-full'></div>
            </div>  
            {isPopupOpen && (<Popup_Tableau_Search onClose={() => setIsPopupOpen(false)} />)}
        </>
        
    )
}   
export default Tableau_search_body