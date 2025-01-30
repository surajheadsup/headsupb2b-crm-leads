import React from 'react';
import { useMedia } from '../../../../Hooks/use-media';
import cn from '../../../../Utils/class-names';
import { useDispatch } from 'react-redux';
import { Password } from 'rizzui';

export default function PasswordInput({ inputType, type, name, label, onChange, error, placeholder, reduxState, setAction, important, disabled, validate, helperText, maxLength, hide, validateField }) {

    const dispatch = useDispatch()
    const isMedium = useMedia('(max-width: 1200px)', false);

    const value = reduxState?.[name] || '';

    const handleChange = (e) => {

        if (type === 'number') {
            const { name, value } = e.target;
            let number = value;
            let firstSixDigits = number.toString().substring(0, maxLength);

            let updatedJson = { ...reduxState };
            updatedJson[name] = firstSixDigits;
            dispatch(setAction(updatedJson));
            if (onChange) onChange(e);
            // if (validate) validate({ ...updatedJson }); // Old Codes
            // Validate only the current field (validateField is passed as a prop)
            if (validate) validate([name, value]);
        } else {
            const { name, value } = e.target;
            let updatedJson = { ...reduxState };
            updatedJson[name] = value;
            dispatch(setAction(updatedJson));
            if (onChange) onChange(e);
            // if (validate) validate({ ...updatedJson }); // Old code
            // Validate only the current field (validateField is passed as a prop)
            if (validate) validate([name, value]);
        }

    };

    const handleTextKeyDown = (event) => {
        const charCode = event.which ? event.which : event.keyCode;
        if (
            !(charCode >= 65 && charCode <= 90) &&  // Uppercase letters
            !(charCode >= 97 && charCode <= 122) && // Lowercase letters
            !(charCode === 32) &&                   // Space
            !(charCode >= 33 && charCode <= 47) &&  // Special characters: ! " # $ % & ' ( ) * + , - . /
            !(charCode >= 58 && charCode <= 64) &&  // Special characters: : ; < = > ? @
            !(charCode >= 91 && charCode <= 96) &&  // Special characters: [ \ ] ^ _ `
            !(charCode >= 123 && charCode <= 126)   // Special characters: { | } ~
        ) {
            event.preventDefault(); // Prevent input if not valid
        }
    };

    const handleNumberKeyDown = (event) => {
        const charCode = event.which ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            event.preventDefault();
        }
    };

    const handleAnyKeyDown = (event) => {
        // No prevention, allow any input (letters, numbers, and special characters)
    };

    const handleKeyDown = inputType === 'number' ? handleNumberKeyDown : inputType === 'text' ? handleTextKeyDown : handleAnyKeyDown;

    return (
        <>
            {
                !hide && <div className="mb-1">
                    <label className="block font-bold">{label}{important === false ? '(Optional)' : ''}</label>
                    <Password
                        maxLength={maxLength}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder || `Enter ${label} ${important === false ? '(Optional)' : ''}`}
                        className={`w-full text-lg rounded-lg disabled:bg-gray-200`}
                        disabled={disabled}
                        error={error?.[name]}
                    />
                    {disabled ? <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span> : null}
                    {helperText ? <span className='text-red-500 font-bold text-xs tracking-wide'>{helperText}</span> : null}
                </div>
            }
        </>
    );
}
