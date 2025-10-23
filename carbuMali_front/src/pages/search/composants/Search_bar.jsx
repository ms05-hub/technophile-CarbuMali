import React, { useState } from 'react';
import '/src/Globals.css';
import NavBar from '../../navbar/NavBar';

import SearchBlack from '/src/assets/search_black.png';

function Search_bar() {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className='flex items-center justify-center bg-[#E6E6EA] w-[359px] h-[35px] rounded-2xl px-px shadow-xl'>
            
            <input  type="text" id='search_field' maxLength={18} minLength={1} value={inputValue} onChange={(e) => setInputValue(e.target.value)} className='w-[300px] h-[35px] rounded-s-2xl px-2 outline-none' />

            <div 
                className={`flex items-center justify-center w-[59px] h-[35px] rounded-e-2xl transition-colors duration-300 
                    ${inputValue.length > 0 ? 'bg-[#2AB7CA]' : 'bg-[#E6E6EA]'}`}
            >
                <img src={SearchBlack} alt="search icon" className='w-[24px] h-[24px]' />
            </div>

        </div>
    );
}

export default Search_bar;
