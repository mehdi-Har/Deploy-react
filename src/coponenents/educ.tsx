import React from 'react';

type EduProps = {
  onDiplomesChange: (diplomes: string) => void;
  onEcoleChange: (ecole: string) => void;
  onFiliereChange: (filiere: string) => void;
  diplomesError: string;
  ecoleError: string;
  filiereError: string;
};

export const EDUC: React.FC<EduProps> = ({
  onDiplomesChange,
  onEcoleChange,
  onFiliereChange,
  diplomesError,
  ecoleError,
  filiereError,
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="Diplomes" className="block">
          Diplomes<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="Diplomes"
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
          onChange={(e) => onDiplomesChange(e.target.value)}
        />
        {diplomesError && <p className="text-red-500">{diplomesError}</p>}
      </div>
      <div className="form-group mt-4">
        <label htmlFor="ecole" className="block">
          la dérniére école fréquentée école<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="ecole"
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
          onChange={(e) => onEcoleChange(e.target.value)}
        />
        {ecoleError && <p className="text-red-500">{ecoleError}</p>}
      </div>
      <div className="form-group mt-4">
        <label htmlFor="fil" className="block">
          filière étudiée<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="fil"
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
          onChange={(e) => onFiliereChange(e.target.value)}
        />
        {filiereError && <p className="text-red-500">{filiereError}</p>}
      </div>
    </div>
  );
};