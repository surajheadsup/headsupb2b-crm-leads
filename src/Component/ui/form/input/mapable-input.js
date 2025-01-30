import React from 'react'

function MapableInput({label,important,placeholder,name,disabled,error,onChange,defaultValue}) {
  return (
    <div>
          <label className="block font-bold mb-2">{label}{important === false ? '(Optional)' : ''}</label>
        <input 
         placeholder={placeholder || `Enter ${label} ${important === false ? '(Optional)' : ''}`}
         className={`w-full py-1.5 px-3 text-lg rounded-lg border 
         disabled:bg-gray-200
         ${error?.[name] ? 'border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500' : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'}`}
             disabled={disabled}
             onChange={onChange}
             defaultValue={defaultValue}
        />
    </div>
  )
}

export default MapableInput