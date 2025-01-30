import React, { useState } from 'react';

const MultiInput = () => {
  const [inputs, setInputs] = useState(['']);

  // Handle input change
  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index] = event.target.value;
    setInputs(values);
  };

  // Add a new input field
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  // Remove an input field
  const handleRemoveInput = (index) => {
    const values = [...inputs];
    values.splice(index, 1);
    setInputs(values);
  };

  return (
    <div className='flex'>
      {inputs.map((input, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            value={input}
            onChange={(event) => handleInputChange(index, event)}
            placeholder={`Input ${index + 1}`}
          />
          <button onClick={() => handleRemoveInput(index)} disabled={inputs.length === 1}>
            Remove
          </button>
        </div>
      ))}
      <button onClick={handleAddInput}>Add Input</button>

    </div>
  );
};

export default MultiInput;
