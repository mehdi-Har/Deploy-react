import React, { useState } from 'react';

type NamePrenomProps = {
  onNomValidation: (isValidNom: boolean) => void;
  onPrenomValidation: (isValidPrenom: boolean) => void;
};

export const NAME: React.FC<NamePrenomProps> = ({ onNomValidation, onPrenomValidation }) => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [nomError, setNomError] = useState<string>(''); // State for "Nom" error
  const [prenomError, setPrenomError] = useState<string>(''); // State for "Prénom" error

  const handleNomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredNom = e.target.value;
    const isValidNom = /^[A-Z]+$/.test(enteredNom);
    setNom(enteredNom);
    onNomValidation(isValidNom);

    if (!enteredNom) {
      setNomError('nom ne doit pas étre vide.');//s'il n y a pas d'input
    } else {
      setNomError(''); // Clear the error when valid data is entered
    }
  };

  const handlePrenomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const enteredPrenom = e.target.value;
    const isValidPrenom = /^[A-Z][a-zA-Z]*$/.test(enteredPrenom); // Check if the first letter is uppercase
    setPrenom(enteredPrenom);
    onPrenomValidation(isValidPrenom);

    if (!enteredPrenom) {
      setPrenomError('Prénom ne doit pas étre vide.');//s'il n y a pas d'input
    } else {
      setPrenomError(''); // Clear the error when valid data is entered
    }
  };

  return (
    <div>
      <div className="form-group">
        <label htmlFor="Nom" className="block">
          Nom<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="Nom"
          name="Nom"
          value={nom}
          onChange={handleNomChange}
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
        />
        {nomError && <p className="text-red-500">{nomError}</p>} {/* Display "Nom" error */}
      </div>
      <div className="form-group mt-4">
        <label htmlFor="Prenom" className="block">
          Prénom<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="Prenom"
          name="Prenom"
          value={prenom}
          onChange={handlePrenomChange}
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
        />
        {prenomError && <p className="text-red-500">{prenomError}</p>} {/* Display "Prénom" error */}
      </div>
    </div>
  );
};





