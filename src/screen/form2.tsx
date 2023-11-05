import { EDUC } from "../coponenents/educ"
import { DATE } from "../coponenents/date"
import { CER } from "../coponenents/certifi"
import { useNavigate } from 'react-router-dom';


import React, { useState } from 'react';


export const FORM2 = () => {
  const navigate = useNavigate();
  const [diplomes, setDiplomes] = useState<string>('');//etat de diplome
  const [ecole, setEcole] = useState<string>('');//etat de l'ecole
  const [filiere, setFiliere] = useState<string>('');//etat de filiére
  const [diplomesError, setDiplomesError] = useState<string>('');//etat de diplome cas d'erreur
  const [ecoleError, setEcoleError] = useState<string>('');//etat ecole cas d'erreur
  const [filiereError, setFiliereError] = useState<string>('');//etat filiére cas d'erreur
  const [entryDate, setEntryDate] = useState<string>('');//etat de date
  const [diplomationDate, setDiplomationDate] = useState<string>('');//etat de date de diplomation
  const handlePreviousStep = () => {
    // navigation vers la premiére forme
    navigate('/Deploy-react');
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!diplomes) {
      setDiplomesError('entrer un diplome.');
    } else {
      setDiplomesError('');//reinitialisation de l'erreur
    }

    if (!ecole) {
      setEcoleError('entrer votre école.');//erreur cas de non vérification de l'erreur
    } else {
      setEcoleError('');//reinitialisation de l'erreur
    }

    if (!filiere) {
      setFiliereError('entrer votre filiére.');
    } else {
      setFiliereError('');//reinitialisation de l'erreur
    }

    if (!entryDate && !diplomationDate) {//les deux dates
      alert('entrer les deux dates.');
    }
    
    
  };

  return (
    <div>
      <div className="flex justify-center items-center mt-20 mb-20">
        <div className="w-3/4 max-w-screen-sm rounded-lg p-14 bg-white shadow-2xl rounded border border-solid">
          <p className="p1 text-center mt-20 text-4xl font-cursive">Informations personelles</p>
          <form className="mt-8 " onSubmit={handleSubmit}>
            <div>
            <EDUC
                onDiplomesChange={(value: string) => setDiplomes(value)}
                onEcoleChange={(value: string) => setEcole(value)}
                onFiliereChange={(value: string) => setFiliere(value)}
                diplomesError={diplomesError}
                ecoleError={ecoleError}
              filiereError={filiereError}
            />
            <DATE //date d'entrée et de sortie
              onEntryDateChange={(value: string) => setEntryDate(value)}
              onDiplomationDateChange={(value: string) => setDiplomationDate(value)}
/>
            </div>
            <CER ></CER> 
            <div className="flex mt-4">
              <label htmlFor="agreeToPolicies" className="block">
                <input
                  type="checkbox"
                  id="agreeToPolicies"
                  className="mr-2"
                required/>
                En cliquant dessus, vous acceptez nos politiques
              </label>
            </div>
            <div className="flex mt-4">
              <button type="button"onClick={handlePreviousStep} className="Prec w-24 mt-4 p-2 border-2 rounded-md bg-green-200">Precedent</button>
              <button type="submit" className="Sub w-24 mt-4 p-2 border-2 rounded-md bg-green-200">Submit</button>
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};