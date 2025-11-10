import Green from '/src/assets/green_flag.png';
import Orange from'/src/assets/orange_flag.png'
import Grey from'/src/assets/grey_flag.png'
import Red from'/src/assets/red_flag.png'

function Compte(){
    return(
        <div className="flex flex-col w-[400px] h-[500px] bg-blue-200 rounded-2xl gap-y-10 px-6 py-7" >
            <div className="flex justify-center items-center">
                <p>Station SMC</p>
            </div>
            
            <div className="flex gap-x-2">
                <p>nom utilisateur:  </p>
                <p>moussa</p>
            </div>

            <div className="flex gap-x-3">
                <p>prenom utilisateur: </p>
                <p>sissoko</p>
            </div>

            <div className="flex gap-x-5 items-center">
                <div className=" w-[200px] h-[40px] flex items-center justify-center rounded-2xl px-2 outline-none bg-[#E6E6EA]">Changer la disponibilité</div>
                <img src={Green} alt="" className='w-[50px] h-[50px]'/>
            </div>

            <ol className='flex flex-col justify-center align-center gap-y-4  w-[200px] bg-blue-500 p-5 rounded-2xl'>
                <li  className='flex items-center justify-center bg-white rounded-3xl'>
                    <div className='flex items-center gap-x-2'>
                        <p>Disponible</p>
                        <img src={Green} alt="" className='w-[12px]'/>
                    </div>
                </li>

                <li className='flex items-center justify-center bg-white rounded-3xl'>
                    <div className='flex items-center gap-x-2'>
                        <p>en manque</p>
                        <img src={Orange} alt="" className='w-[12px]'/>

                    </div>
                </li>

                <li className='flex items-center justify-center bg-white rounded-3xl'>
                    <div className='flex items-center gap-x-2'>
                        <p>indisponible</p>
                        <img src={Red} alt="" className='w-[12px]'/>
                    </div>
                </li>
            </ol>
        </div>


    )
}

export default Compte