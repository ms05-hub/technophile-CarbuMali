function Sign_in(){
    return(
        <div className="flex justify-center items-center pt-20">
            <div className="flex flex-col  justify-center w-[400px] h-[500px] bg-blue-200 rounded-2xl">
                <div><h1>Connection</h1></div>
                <form action="" className="flex flex-col items-center justify-center gap-y-6">
                    <div className="flex flex-col justify-center gap-y-px">
                        <label htmlFor="mail">Email</label> <br />
                        <input type="text" id="mail" className="w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]"/>
                    
                    </div>
                    

                    <div className="flex flex-col justify-center gap-y-px">
                        <label htmlFor="mail">Mot de passe</label><br />
                        <input type="text" id="mail"className='w-[255px] h-[45px] rounded-2xl px-2 outline-none bg-[#E6E6EA]'/>
                    
                    </div>
                    
                    <div className="flex items-center justify-center w-[200px] h-[45px] rounded-2xl px-2  bg-[#E6E6EA]">
                        <p>Se connecter</p>
                    </div>

                
                </form>
            </div>
        </div>
    )
}
export default Sign_in