type DateProps = {
    onEntryDateChange: (entryDate: string) => void;
    onDiplomationDateChange: (diplomationDate: string) => void;
  };
  
  export const DATE: React.FC<DateProps> = ({
    onEntryDateChange,
    onDiplomationDateChange,
  }) => {
    return (
      <div>
        <div className="form-group mt-4 flex">
          <div className="flex items-center">
            <label htmlFor="EntryDate">entrée<span className='text-green-500 text-2xl'>*</span></label>
            <input
              type="date"
              id="EntryDate"
              className="border-2 p-2 rounded-md w-full focus-border-green-500"
              onChange={(e) => onEntryDateChange(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="Diplomation" id="Dip" className="ml-12">
              diplomation<span className='text-green-500 text-2xl'>*</span>
            </label>
            <input
              type="date"
              id="Diplomation"
              className="border-2 p-2 rounded-md w-full focus-border-green-500 "
              onChange={(e) => onDiplomationDateChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    );
  };