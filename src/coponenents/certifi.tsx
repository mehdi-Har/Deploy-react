export const CER = () =>{
    return(
        <div>
             <div className="form-group mt-4">
                <label htmlFor="certification" className="block">liste des certifications</label>
                <input type="text" id="cetification" className="border-2 p-2 rounded-md w-full focus-border-green-500"  />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="recop" className="block">listes des récompenses</label>
                <input type="text" id="recop" className="border-2 p-2 rounded-md w-full focus-border-green-500"  />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="vous" className="block">
                    sitez quelques projets sur lesquels vous avez travailler
                </label>
                <textarea id="vous" className="appearance-none border-2 p-2 rounded-md w-full"></textarea>
            </div>
            <div className="form-group mt-4">
                <label htmlFor="vous" className="block">
                     Parlez un peu de vous
                </label>
                <textarea id="vous" className="appearance-none border-2 p-2 rounded-md w-full"></textarea>
            </div>
            
        </div>
    )
}