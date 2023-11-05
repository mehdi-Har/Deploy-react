import React from 'react';

type CarProps = {
  onTitreChange: (titre: string) => void;
  titreError: string;
};

export const CAR: React.FC<CarProps> = ({ onTitreChange, titreError }) => {
  return (
    <div>
      <div className="form-group mt-4">
        <label htmlFor="bac block ">Type de bac</label>
        <select id="bac" className="border-2 p-2 rounded-md w-full focus:border-green-500">
          <option value="sm">Science math</option>
          <option value="pc">Science physique</option>
          <option value="svt">Science de la vie et de la terre</option>
          <option value="pro">Bac Pro</option>
        </select>
      </div>
      <div className="form-group mt-4">
        <label htmlFor="titre" className="block">
          Titre de CV<span className='text-green-500 text-2xl'>*</span>
        </label>
        <textarea
          id="titre"
          name="titre"
          onChange={(e) => onTitreChange(e.target.value)}
          className="appearance-none border-2 p-2 rounded-md w-full"
        ></textarea>
        {titreError && <p className="text-red-500">{titreError}</p>}
      </div>
      <div className="form-group mt-4">
        <label htmlFor="vous" className="block">
          Parlez un peu de vous
        </label>
        <textarea id="vous" className="appearance-none border-2 p-2 rounded-md w-full"></textarea>
      </div>
    </div>
  );
};