import React, { useEffect, useState } from 'react';
import CustomJsonEditor from '../ui/editor/json-editor';
import { CompileConfiguration } from './mapper.promiss';
import CustomButton from '../ui/buttons/custom-button';
import { useSelector } from 'react-redux';

export default function CustomMapper({ input, mapping, setOutput, output, editorRef }) {
    const [inputJson, setInputJson] = useState(input);
    const [outputJson, setOutputJson] = useState(null);
    const [mappingJson, setMappingJson] = useState(mapping);

    const [render, setRender] = useState(Date.now())

    useEffect(() => {

    }, [mappingJson, render]); 
    
    const onChange = (value, type) => {
        try {
            const parsedJson = JSON.parse(value);
            if (type === 'input') {
                setInputJson(parsedJson);
            } else if (type === 'mapping') {
                setMappingJson(parsedJson);
            }
        } catch (error) {
            console.error('Invalid JSON format:', error.message);
        }
    };

    const GenerateOutput = (e) => {
        e.preventDefault();
        CompileConfiguration(mappingJson, inputJson).then((CompiledData) => {
            if (CompiledData) {

                setOutputJson(CompiledData);
                setOutput(CompiledData);
                setRender(Date.now())
            }
        });
    };


    return (
        <div>
            <form>
                <div className='my-6'>
                    <div className='grid grid-cols-3 gap-4'>
                        <div>
                            <label className='font-bold'>Input JSON</label>
                            <CustomJsonEditor detectRender={render} json={inputJson} onChange={(value) => onChange(value, 'input')} />
                        </div>
                        <div>
                            <label className='font-bold'>Configuration</label>
                            <CustomJsonEditor  detectRender={render} json={mappingJson} onChange={(value) => onChange(value, 'mapping')} />
                        </div>
                        <div>
                            <label className='font-bold'>Output JSON</label>
                            <CustomJsonEditor detectRender={render} json={outputJson} readOnly />
                        </div>
                    </div>
                </div>
                <div>
                    <CustomButton text={'Generate Output'} onClick={GenerateOutput} />
                </div>
            </form>
        </div>
    );
}
