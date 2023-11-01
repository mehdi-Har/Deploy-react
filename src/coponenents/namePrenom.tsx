export const NAME = () => {
    return(
        <div className="content text-gray-700 p-20">
            <div className="form-group">
              <label htmlFor="Nom" className="block">Nom</label>
              <input
                type="text"
                id="Nom"
                name="Nom"
                className="border-2 p-2 rounded-md w-full focus-border-green-500"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="Prenom" className="block">Prénom</label>
              <input
                type="text"
                id="Prenom"
                name="Prenom"
                className="border-2 p-2 rounded-md w-full focus-border-green-500"
              />
            </div>
        </div>
    )
}