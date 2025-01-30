import React from 'react';
import { useMedia } from '../../../../Hooks/use-media';
import { useDispatch } from 'react-redux';
import { Checkbox } from 'rizzui';

export default function CustomCheckBox({ name, label, onChange, error, reduxState, setAction, validate, important = true, disabled = false }) {
  const dispatch = useDispatch();
  const isMedium = useMedia('(max-width: 1200px)', false);

  const value = reduxState?.[name] || false;

  const handleChange = (e) => {
    const { name, checked } = e.target;
    let updatedJson = { ...reduxState };
    updatedJson[name] = checked;

    dispatch(setAction(updatedJson));

    // Validate the current field (if needed)
    if (onChange) onChange({ [name]: checked }); // Calls the parent onChange handler if provided
    if (validate) validate({ ...updatedJson });
  };



  return (
    <div className="mb-6">
      <label className="block font-bold mb-2">{label}{important === false ? ' (Optional)' : ''}</label>
      <div className='mt-4 flex items-center'>
        <Checkbox label={label} name={name} checked={value} onChange={handleChange} disabled={disabled} />
      </div>
      {disabled && <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span>}
      {error?.[name] && <span className="text-red-500 text-sm mt-2 block">{error?.[name]}</span>}
    </div>
  );
}
