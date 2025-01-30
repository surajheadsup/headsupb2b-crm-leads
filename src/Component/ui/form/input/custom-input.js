import React from 'react';
import { useMedia } from '../../../../Hooks/use-media';
import cn from '../../../../Utils/class-names';
import { useDispatch } from 'react-redux';
import { Input, Password } from 'rizzui';

export default function CustomInput({ inputType, type, name, label, onChange, error, placeholder, reduxState, setAction, important, disabled, validate, helperText, maxLength, hide, parent, index, helperTextClass }) {

    const dispatch = useDispatch()
    const isMedium = useMedia('(max-width: 1200px)', false);
    const value = parent && index !== undefined ? reduxState?.[parent]?.[index]?.[name] ?? '' : reduxState?.[name] ?? '';

    
    const handleChange = (e) => {
        const { name, value } = e.target;

        let updatedJson = { ...reduxState }; // Copy the Redux state

        if (type === 'number') {
            let number = value;
            let firstSixDigits = number.toString().substring(0, maxLength);

            // If parent and index are provided, update that specific index in the parent array
            if (parent && index !== undefined) {
                if (!updatedJson[parent]) {
                    updatedJson[parent] = []; // Ensure the parent array exists
                }
                updatedJson[parent][index] = { ...updatedJson[parent][index], [name]: firstSixDigits };
            } else {
                updatedJson[name] = firstSixDigits; // Regular update if no parent/index
            }

            if (setAction) {
                dispatch(setAction(updatedJson)); // Dispatch the updated JSON to Redux
            }
            if (onChange) onChange(e); // Call the onChange callback if provided
            if (validate) validate([name, firstSixDigits]); // Validate only the current field

        } else {
            // For non-number types
            if (parent && index !== undefined) {
                if (!updatedJson[parent]) {
                    updatedJson[parent] = []; // Ensure the parent array exists
                }
                updatedJson[parent][index] = { ...updatedJson[parent][index], [name]: value };


            } else {
                updatedJson[name] = value; // Regular update if no parent/index


            }

            if (setAction) {
                dispatch(setAction(updatedJson)); // Dispatch the updated JSON to Redux
            }
            if (onChange) onChange(e); // Call the onChange callback if provided
            if (validate) validate([name, value]); // Validate only the current field
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
            !(charCode >= 123 && charCode <= 126) && // Special characters: { | } ~
            !(charCode === 8)   // Special characters: { | } ~
        ) {
            event.preventDefault(); // Prevent input if not valid
        }
    };


    const handleNumberKeyDown = (event) => {
        if (
            ['Backspace', 'Delete', 'Tab', 'Escape', 'Enter'].includes(event.key) ||
            event.key.startsWith('Arrow') ||
            ((event.ctrlKey || event.metaKey) && event.key === 'a') ||
            /^[0-9]$/.test(event.key)
        ) {
            return;
        }

        event.preventDefault();
    };


    const handleAlphanumericKeyDown = (event) => {
        const key = event.key;
        const inputValue = event.target.value;
        const isLastCharSpace = inputValue.slice(-1) === ' ';
        // Allow letters, numbers, backspace, Ctrl + A, and prevent consecutive spaces
        if (
            /^[a-zA-Z0-9]$/.test(key) ||
            key === 'Backspace' ||
            ((event.ctrlKey || event.metaKey) && key === 'a') ||
            (key === ' ' && !isLastCharSpace) // Allow space if not consecutive
        ) {
            return;
        }

        // Prevent other inputs
        event.preventDefault();
    };

    const handleAnyKeyDown = (event) => { };
    const handleKeyDown = inputType === 'number' ? handleNumberKeyDown : inputType === 'alphanumeric' ? handleAlphanumericKeyDown : inputType === 'text' ? handleTextKeyDown : handleAnyKeyDown;

    return (
        <>
            {
                !hide && <div className="">
                    <label className="block text-[13px] font-bold">{label}{important === false ? '(Optional)' : ''}</label>
                    <Input
                        type={type || 'text'}
                        maxLength={maxLength}
                        name={name}
                        value={value}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder || `Enter ${label} ${important === false ? '(Optional)' : ''}`}
                        className={`w-full text-lg rounded-lg disabled:bg-gray-200`}
                        error={error?.[name]}
                        disabled={disabled}
                    />
                    {disabled ? <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span> : null}
                    {helperText ? <span className={cn('font-bold text-xs tracking-wide text-red-500', helperTextClass )}>{helperText}</span> : null}
                </div>
            }
        </>
    );
}
