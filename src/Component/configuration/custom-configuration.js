import React, { useState, useEffect } from 'react';
import CustomJsonEditor from '../ui/editor/json-editor';
import CustomButton from '../ui/buttons/custom-button';

export default function CustomConfiguration({ input, setOutput }) {
    const [inputJson, setInputJson] = useState(input);
    const [render, setRender] = useState(Date.now());

    const onChange = (value, type) => {
        try {
            const parsedJson = (value);
            if (type === 'input') {
                setInputJson(parsedJson);
            }
        } catch (error) {
            console.error('Invalid JSON format:', error.message);
        }
    };

    useEffect(() => {
        setOutput(inputJson);
    }, [inputJson, setOutput]);

    return (
        <div>
            <div>
                <label className='font-bold'>Input JSON</label>
                
            </div>
        </div>
    );
}
