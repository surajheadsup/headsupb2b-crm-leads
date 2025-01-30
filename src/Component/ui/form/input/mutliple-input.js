import React from 'react'

function MutlipleInput({onChange ,label}) {
  return (
    <div >
        <div className='font-bold mb-2'>{label}</div>
        <input className='rounded-xl' placeholder={`Enter ${label}`}  onChange={onChange}/>
    </div>
  )
}

export default MutlipleInput