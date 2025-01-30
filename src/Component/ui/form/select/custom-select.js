import React from 'react';
import { useMedia } from '../../../../Hooks/use-media';
import { useDispatch } from 'react-redux';

export default function CustomSelect({ 
  name, 
  label, 
  onChange, 
  error, 
  placeholder, 
  reduxState, 
  setAction, 
  important = true, 
  disabled = false, 
  validate,
  options = []
}) {
    const dispatch = useDispatch();
    const isMedium = useMedia('(max-width: 1200px)', false);

    // Fetch the value from reduxState using the name prop
    const value = reduxState?.[name] || '';

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Automatically insert the selected value (e.g., ID) into the Redux state
        let updatedJson = { ...reduxState };
        updatedJson[name] = value; // This assumes 'value' is the ID or relevant data
        dispatch(setAction(updatedJson));

        // Validate the current field (if needed)
        if (validate) validate({ ...updatedJson });

         // If a custom onChange handler is provided, call it
         if (onChange) onChange(e, updatedJson);
    };




    return (
        <div className="mb-6 relative">
            <label className="block font-bold mb-2">{label}{important === false ? ' (Optional)' : ''}</label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={handleChange}
                    disabled={disabled}
                    className={`w-full p-2 text-lg rounded-lg border appearance-none 
                    disabled:bg-gray-200
                    ${error?.[name] ? 'border-red-500 border-2 focus:outline-none focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
                >
                    <option value="" disabled>{placeholder || `Select ${label}`}</option>
                    {options?.map((option, index) => (
                        <option key={index} _id={option?._id} value={option?.value}>
                            {option.label}
                        </option>
                        
                    )) }
                </select>
            </div>
            {disabled && <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span>}
            {error?.[name] && <span className="text-red-500 text-sm mt-2 block">{error?.[name]}</span>}
        </div>
    );
}
