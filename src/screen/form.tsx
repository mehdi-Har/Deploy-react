import React, { useState } from 'react';
import {NAME} from '../coponenents/namePrenom';
import {INFO} from '../coponenents/inforp'
import {OTHER} from '../coponenents/other'
import {CAR} from '../coponenents/carrier'
import { useNavigate } from 'react-router-dom';

export const FORME: React.FC = () => {
  const [isNomValid, setIsNomValid] = useState<boolean>(true);//valeur booleanne pour verifier le nom
  const [isPrenomValid, setIsPrenomValid] = useState<boolean>(true);//.............le Prenom
  const [email, setEmail] = useState('');//Etat d'email
  const [telephone, setTelephone] = useState('');//Etat de Cv
  const [titre, setTitre] = useState(''); // Etat de CV
  const [age, setAge] = useState(''); // Etat d'Age
  const [emailError, setEmailError] = useState<string>('');//Etat d'email cas d'erreur
  const [telephoneError, setTelephoneError] = useState<string>('');//etat de telephne cas  d'erreur
  const [titreError, setTitreError] = useState<string>(''); // State for "titre de cv" error
  const [ageError, setAgeError] = useState<string>(''); // State for "Age" error
  const navigate = useNavigate();//navigation 
  const handleFormSubmit = (e: React.FormEvent) => {
    
    e.preventDefault();

    // Validation d'email
    if (!email) {
      setEmailError('entrer votre email');
    } else {
      setEmailError('');
    }

    // Validation de télephone
    if (!telephone) {
      setTelephoneError('entrer votre numéro de téléphone'); // cas il n'y a pas d'input
    } else if (telephone.length !== 10) {
      setTelephoneError('le numéro de téléphone doit contenir 10 chiffre');
    } else {
      setTelephoneError('');
    }
    //validation de Nom
    if (!isNomValid) {
      alert('entrer le nom en majuscule.');
      return;
    }
    //validation de Prénom
    if (!isPrenomValid) {
      alert('la premiére lettre de Prénom doit étre en majuscule.');
      return;
    }
    // Validation de  titre de cv
    if (!titre) {
      setTitreError('Entrer le  "titre de cv."'); // Set error message
      return;
    } else {
      setTitreError(''); // Clear the error if "titre de cv" is provided
    }
    // Validation de l'Age
    if (!age) {
      setAgeError('entrer votre age.');
      return;
    } else if (parseInt(age) < 18) {
      setAgeError('lage doit étre suppérieur ou égale à 18.');
      return;
    } else {
      setAgeError('');
    }
    //validation d'email
    if (!validateEmail(email)) {
      setEmailError('Enter a valid email address.');
      return;
    }
    if (emailError || telephoneError || titreError || ageError) {
      alert('s il vous plait il faut vérifier les formes.');
      return;
    }
    //navigation à la page suivante lorsque tous les condition sont vérifier
    else{
      navigate('/form2');
    }
   
  };
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;//forme regulire de l'email
    return emailRegex.test(email);
  };
  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-3/4 max-w-screen-sm rounded-lg p-4 bg-white shadow-2xl rounded border border-solid">
        <p className="text-center mt-20 text-4xl font-cursive">Formulaire</p>
        <form onSubmit={handleFormSubmit}>
          <div className="content text-gray-700 p-20">
            <NAME
              onNomValidation={(isValid: boolean) => {
                setIsNomValid(isValid);
              }}//le nom et le prénom
              onPrenomValidation={(isValid: boolean) => {
                setIsPrenomValid(isValid);
              }}
            ></NAME>
            <INFO
              onAgeChange={(age: string) => {
                setAge(age);
                setAgeError('');
              }}//info personelles comme le sex et l'age
              ageError={ageError}
            ></INFO>
            <OTHER //email et le telephone .....
              onEmailChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              onTelephoneChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTelephone(e.target.value);//enregistrer la valeur de telephone
                setTelephoneError('');
              }}
              emailError={emailError}
              telephoneError={telephoneError}
            ></OTHER>
            <CAR //carriére...
              onTitreChange={(titre: string) => {
                setTitre(titre);//enregistrer la valeur de setTitre
                setTitreError('');
              }}
              titreError={titreError}
            ></CAR>
            <button
              type="submit"
              className="w-full mt-4 p-2 border-2 rounded-md bg-green-200"
            >
              Suivant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};






