import Alert_popup from "./composants/Alert_popup"
import { useState } from 'react'
import Connection_header from "../connexion/Connection_header";

function Alert(){
    const [isAlertPopupOpen, setIsAlertPopupOpen] = useState(false);

    return(
        <>
            <Connection_header></Connection_header>

            <div className="sm: flex flex-col items-center justify-center gap-y-5 pt-15 ">
                <div className="sm: w-[376px] h-[433px] bg-[#2AB7CA] rounded-2xl">

                </div>
                <div className="sm: flex items-center justify-center bg-[#2AB7CA] w-[199px] h-[50px] rounded-2xl cursor-pointer" onClick={() => setIsAlertPopupOpen(true)}>
                    <p className="text-base">Conseiller une station</p>
                </div>
                
                <p className="sm: text-sm">
                    Si vous connaissez une station dans laquel <br />
                    il pourait y avoir de l’essence vous pouvez aidez <br />
                    vos consitoyen en apuyant sur le boutton si-dessus
                </p><br /><br />
                {isAlertPopupOpen && (<Alert_popup onClose={() => setIsAlertPopupOpen(false)} />)}
            </div>
        </>
        

    )
}

export default Alert