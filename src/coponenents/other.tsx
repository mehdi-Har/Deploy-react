import React, { useState } from 'react';

type OtherProps = {
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTelephoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  emailError: string;
  telephoneError: string;
};

export const OTHER: React.FC<OtherProps> = ({
  onEmailChange,
  onTelephoneChange,
  emailError,
  telephoneError,
}) => {
  return (
    <div>
      <div className="form-group mt-4">
        <label htmlFor="email" className="block">
          Email<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={onEmailChange} // Handle email change
          className="appearance-none border-2 p-2 rounded-md w-full focus-border-green-500"
          placeholder="domain@gmail.com"
        />
        {emailError && <p className="text-red-500">{emailError}</p>} {/* affichage d'erreur d'email*/}
      </div>
      <div className="form-group mt-4">
        <label htmlFor="telephone" className="block">
          Téléphone<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="telephone"
          name="telephone"
          onChange={onTelephoneChange} // traitement de change
          placeholder="06********"
          className="appearance-none border-2 p-2 rounded-md w-full"
        />
        {telephoneError && <p className="text-red-500">{telephoneError}</p>} {/* affichage d'erreur de telephone */}
      </div>
    </div>
  );
};