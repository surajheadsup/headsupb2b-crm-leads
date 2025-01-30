import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';

export default function SearchSelect({
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



    const value = options.find(option => option.value === reduxState?.[name]) || null;

    const handleChange = (selectedValue) => {


        let updatedJson = { ...reduxState };
        updatedJson[name] = selectedValue?.value || '';
        dispatch(setAction(updatedJson));

        if (validate) validate({ ...updatedJson });

        if (onChange) onChange({ target: { name, value: selectedValue?.value } }, updatedJson);
    };

    return (
        <div className="mb-6 relative">
            <label className="block font-bold mb-2">
                {label}{important === false ? ' (Optional)' : ''}
            </label>
            <div className="relative">
                <Select
                    name={name}
                    value={value}
                    placeholder={placeholder || `Select ${label}`}
                    options={options}
                    onChange={handleChange}
                    isDisabled={disabled}
                    isSearchable={true}
                    className={`w-full text-lg rounded-lg border
                        ${error?.[name] ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
                />
            </div>
            {disabled && <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span>}
            {error?.[name] && <span className="text-red-500 text-sm mt-2 block">{error?.[name]}</span>}
        </div>
    );
}
