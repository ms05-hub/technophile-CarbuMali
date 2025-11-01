import StationEssence from '/src/assets/station-essence.png'
import Cancel from '/src/assets/cancel.png'
function Alert_popup({ onClose }){
    return(
        <div className="sm: flex flex-col relative w-[328px] items-center justify-center h-[187px] rounded-3xl bg-[#FED766]">
            
            <div className='sm: absolute top-3 right-4 cursor-pointer' onClick={onClose} >
                <img src={Cancel} alt="cancel" className='sm: w-[39px] h-[39px]' />
            </div>

            <div className='sm: flex items-center gap-x-1'>
                <p className="sm: text-base">Nom de la station</p>
                <img src={StationEssence} alt="" />
            </div>

            <div>
                <input type="text" maxLength={18} minLength={1} className='sm: w-[278px] h-[23px] bg-[#E6E6EA] rounded-s-2xl px-2 outline-none'/>
            </div>

            <div>
                <img src="" alt="" />
                <p className="sm: text-base">Localisation</p>
            </div>
        </div>
    )
}
export default Alert_popup