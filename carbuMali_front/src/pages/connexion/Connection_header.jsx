import { NavLink } from 'react-router-dom'
import AvatarBlack from '/src/assets/Avatar_black.png'

function Connection_header(){
    return(
        <div className='w-full h-3 fixed top-0 left-0 px-7 py-4 '>
            <div className='flex items-center justify-end '>
                <NavLink to={"/connection"} >
                    <img src={AvatarBlack} alt="" className='h-[37px] w-[37px]'/>
                </NavLink>
            </div>
            
        </div>
    )
}
export default Connection_header