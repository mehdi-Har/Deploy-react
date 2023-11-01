import React, { useState } from 'react';

export const NextPage = () => {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
    email: '',
    nationalité: '',
    telephone: '',
    titre: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.Nom !== formData.Nom.toUpperCase() || formData.Prenom[0] !== formData.Prenom[0].toUpperCase()) {
      alert('la premiére lettre du prenom et le nom doivent étre en majuscule');
      return;
    }

    const gmailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if (!gmailRegex.test(formData.email)) {
      alert('entrez une adresse Email Valide');
      return;
    }

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(formData.telephone)) {
      alert('entrer un numéro de telephone valide');
      return;
    }

    if (formData.nationalité.trim() === '') {
      alert('entrer votre nationalité');
      return;
    }

    if (formData.titre.trim() === '') { 
      alert('Please enter something in "titre de cv"');
      return;
    }

    setFormData({
      Nom: '',
      Prenom: '',
      email: '',
      nationalité: '',
      telephone: '',
      titre: '',
    });
  };

  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-3/4 max-w-screen-sm  rounded-lg p-4 bg-white shadow-2xl rounded border border-solid ">
        <p className='text-center mt-20 text-4xl font-cursive'>Formulaire</p>
        <form onSubmit={handleSubmit}>
          <div className="content text-gray-700 p-20">
            <div className="form-group">
              <label htmlFor="Nom" className="block">Nom</label>
              <input
                type="text"
                id="Nom"
                name="Nom"
                value={formData.Nom}
                onChange={handleInputChange}
                className="border-2 p-2 rounded-md w-full focus-border-green-500"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="Prenom" className="block">Prénom</label>
              <input
                type="text"
                id="Prenom"
                name="Prenom"
                value={formData.Prenom}
                onChange={handleInputChange}
                className="border-2 p-2 rounded-md w-full focus-border-green-500"
              />
            </div>
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
            <div className="form-group mt-4">
              <label htmlFor="email" className="block">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="appearance-none border-2 p-2 rounded-md w-full focus-border-green-500"
                placeholder="domain@gmail.com"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="nationalité" className="block">Nationalité</label>
              <input
                type="text"
                id="nationalité"
                name="nationalité"
                value={formData.nationalité}
                onChange={handleInputChange}
                className="border-2 p-2 rounded-md w-full"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="telephone" className="block">Téléphone</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                value={formData.telephone}
                onChange={handleInputChange}
                placeholder="06********"
                className="appearance-none border-2 p-2 rounded-md w-full"
              />
            </div>
            <div className="form-group mt-4">
                <label htmlFor="bac block ">type de bac</label>
                <select id="bac" className=" border-2 p-2 rounded-md w-full focus:border-green-500">
                    <option value="sm">sience math</option>
                    <option value="pc">science physiaue</option>
                    <option value="svt">science de vie et de terre</option>
                    <option value="pro">bac pro</option>
                  </select>
              </div>
            <div className="form-group mt-4">
              <label htmlFor="titre" className="block">titre de cv</label>
              <textarea
                id="titre"
                name="titre"
                value={formData.titre}
                onChange={handleInputChange}
                className="appearance-none border-2 p-2 rounded-md w-full"
              ></textarea>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="vous" className="block">Parlez un peu de vous</label>
              <textarea id="vous" className="appearance-none border-2 p-2 rounded-md w-full"></textarea>
            </div>
            <button type="submit" className="w-full mt-4 p-2 border-2 rounded-md bg-green-200">
              Suivant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
