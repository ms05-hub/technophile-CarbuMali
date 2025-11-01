import { NavLink } from 'react-router-dom'

import SearchWhite from '/src/assets/search_white.png'
import SearchBlack from '/src/assets/search_black.png'

import BellWhite from '/src/assets/Bell_white.png'
import BellBlack from '/src/assets/Bell_black.png'

import MapWhite from '/src/assets/Map_white.png'
import MapBlack from '/src/assets/Map_black.png'

function NavBar(){
    const recherche_text = <p className='sm: text-base'>Recherches</p>
    const alert_text = <p className='sm: text-base'>Alertes</p>
    const map_text = <p className='sm: text-base'>Map</p>
    return(
        <div className='sm: flex  items-center justify-center w-full h-[100px] bg-[#2AB7CA] fixed bottom-0 left-0 z-50 rounded-t-2xl'>
            <ul className='sm: flex items-center justify-center w-[326px] h-[81px] gap-x-12'>
                <li>
                    <NavLink to={"/"} className={'sm: flex flex-col items-center justify-center w-[50px]'}>

                        {({ isActive }) => (
                            <>
                                <img src={isActive ? SearchWhite : SearchBlack} className='sm: w-[37px] h-[37px]'/>
                                <p className={isActive ? 'text-white' : 'text-black'}>{recherche_text}</p>

                            </>
                        )}  
                        
                    </NavLink>
                </li>

                <li>
                    <NavLink to={"/alerte"} className={'sm: flex flex-col items-center justify-center w-[50px]'}>
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? BellWhite : BellBlack} className='sm: w-[37px] h-[37px]'/>
                                <p className={isActive ? 'text-white' : 'text-black'}>{alert_text}</p>
                            </>
                        )}
                    </NavLink>
                   
                </li>

                <li>

                        
                    <NavLink to={"/map"} className={'sm: flex flex-col items-center justify-center w-[50px]'}>
                        {({ isActive }) => (
                            <>
                                <img src={isActive ? MapWhite : MapBlack} className='sm: w-[37px] h-[37px]'/>
                                <p className={isActive ? 'text-white' : 'text-black'}>{map_text}</p>
                            </>
                        )}
                    </NavLink>
            
                </li>

            </ul>
        </div>
    )
}

export default NavBar