import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const FORME = () => {
  

  return (
    <div className="flex justify-center items-center mt-20 mb-20">
      <div className="w-3/4 max-w-screen-sm  rounded-lg p-4 bg-white shadow-2xl rounded border border-solid ">
        <p className='text-center mt-20 text-4xl font-cursive'>Formulaire</p>
        <form >
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
                className="border-2 p-2 rounded-md w-full"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="telephone" className="block">Téléphone</label>
              <input
                type="text"
                id="telephone"
                name="telephone"
                
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