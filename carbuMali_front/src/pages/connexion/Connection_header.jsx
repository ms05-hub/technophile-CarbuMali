import { NavLink } from 'react-router-dom'
import Avatar from '/src/assets/Avatar.png'

function Connection_header(){
    return(
        <div className='sm: w-full h-3 fixed top-0 left-0 px-7 py-4 '>
            <div className='sm: flex items-center justify-end '>
                <NavLink to={"/inscription"} >
                    <img src={Avatar} alt="" className='sm: h-[37px] w-[37px]'/>
                </NavLink>
            </div>
            
        </div>
    )
}
export default Connection_header