import React, { useState } from 'react';
import Select from 'react-select';



function SearchCountryStateCity({ important, label, error, name, options, onChange, value }) {

    return (
        <div >
            <label className="block font-bold mb-2">{label}{important === false ? '(Optional)' : ''}</label>
            <div >
            <Select
                defaultInputValue={value}
                onChange={onChange}
                options={options || []}
                isClearable={false}
                className={`w-full text-lg rounded-lg
                disabled:bg-gray-200
               ${error?.[name] ? 'border-2 border-red-400 focus:outline-none focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
                placeholder="Select ..."
            />
            </div>
            {error?.[name] && <span className="text-red-500 text-sm mt-2 block">{error?.[name]}</span>}


        </div>
    );
}

export default SearchCountryStateCity;
