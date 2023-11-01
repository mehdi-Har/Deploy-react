export const INFO = () =>{
    return(
        <div>
            <div className="form-group mt-4">
                <label className="block">Sex</label>
                <div className="flex items-center">
                  <div className="mr-2">
                    <input type="radio" id="male" name="sex" value="male" className="appearance-none border-2 p-2 rounded-full checked:bg-green-200" />
                    <label htmlFor="male" className="ml-2">Mal</label>
                  </div>
                  <div className="ml-5">
                    <input type="radio" id="female" name="sex" value="female" className="appearance-none border-2 p-2 rounded-full checked:bg-green-200 "  />
                    <label htmlFor="female" className="ml-2">Female</label>
                  </div>
                </div>
              </div>
        </div>
    )
}