import React from 'react';

type InfoProps = {
  onAgeChange: (age: string) => void;
  ageError: string;
};

export const INFO: React.FC<InfoProps> = ({ onAgeChange, ageError }) => {
  return (
    <div>
      <div className="form-group mt-4">
        <label className="block">Sex</label>
        <div className="flex items-center">
          <div className="mr-2">
            <input
              type="radio"
              id="male"
              name="sex"
              value="male"
              className="appearance-none border-2 p-2 rounded-full checked:bg-green-200"
            />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
          </div>
          <div className="ml-5">
            <input
              type="radio"
              id="female"
              name="sex"
              value="female"
              className="appearance-none border-2 p-2 rounded-full checked:bg-green-200"
            />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
          </div>
        </div>
      </div>
      <div className="form-group mt-4">
        <label className="block" htmlFor="age">
          Age<span className='text-green-500 text-2xl'>*</span>
        </label>
        <input
          type="text"
          id="age"
          onChange={(e) => onAgeChange(e.target.value)}
          className="border-2 p-2 rounded-md w-full focus-border-green-500"
        />
        {ageError && <p className="text-red-500">{ageError}</p>}
      </div>
    </div>
  );
};