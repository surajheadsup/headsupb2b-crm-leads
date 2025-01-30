import { useState } from 'react';

const useValidation = (schema) => {
  const [errors, setErrors] = useState({});
  const [hide, setHide] = useState(false); // Controlled both internally and externally

  const validate = (fieldOrValues) => {
    let tempErrors = { ...errors };
    let hasErrors = false; // Track if there are any errors

    if (schema) {
      if (typeof fieldOrValues === 'object' && !Array.isArray(fieldOrValues)) {
        // Validate all fields
        Object.keys(schema).forEach((key) => {
          const validation = schema[key];
          const error = validation.validate(fieldOrValues[key]);
          if (error) {
            tempErrors[key] = error;
            hasErrors = true; // Set flag if any error exists
          } else {
            delete tempErrors[key]; // Remove error if validation passes
          }
        });
      } else {
        // Validate a single field (field name and value are passed as arguments)
        const [field, value] = fieldOrValues;
        const validation = schema[field];
        const error = validation.validate(value);
        if (error) {
          tempErrors[field] = error;
          hasErrors = true; // Set flag if any error exists
        } else {
          delete tempErrors[field]; // Remove error if validation passes
        }
      }
    }

    // Update the error state
    setErrors(tempErrors);

    // Automatically control hide based on errors
    if (hasErrors) {
      setHide(true); // If there are errors, hide is set to true
    } else {
      setHide(false); // If no errors, hide is set to false
    }

    return tempErrors;
  };

  // Allow dynamic external control of hide, without affecting internal validation behavior
  const toggleHide = (value) => {
    setHide(value);
  };



  return { errors, validate, hide, setHide: toggleHide }; // Expose setHide as toggleHide for external control
};

export default useValidation;
