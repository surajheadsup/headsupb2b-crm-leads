import React, { useState } from 'react'
import CustomJsonEditor from '../ui/editor/json-editor'
import CustomButton from '../ui/buttons/custom-button';
import { CompileConfiguration } from './mapper.promiss';

export default function CustomMapper({ input, setInput, mapping, setMapping, output, setOutput, onMyClick, hide, setHide }) {
    const [hideInput, setHideInput] = useState(false)
    const [hideOutput, setHideOutput] = useState(false)
    const [hideMapper, setHideMapper] = useState(false)
    const onChange = (value, type) => {
        try {
            if (type === 'input') {
                setInput(value);
            } else if (type === 'mapping') {
                setMapping(value);
            }
        } catch (error) {
            console.error('Invalid JSON format:', error.message);
        }
    };

    const GenerateOutput = (e) => {
        e.preventDefault();
        CompileConfiguration(mapping, input).then((CompiledData) => {

            if (CompiledData) {
                setOutput(CompiledData);
                if (onMyClick) { onMyClick(CompiledData) }
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
                            <CustomJsonEditor json={input} onChange={(value) => onChange(value, 'input')} />
                        </div>
                        <div>
                            <label className='font-bold'>Configuration</label>
                            <CustomJsonEditor json={mapping} onChange={(value) => onChange(value, 'mapping')} />
                        </div>
                        <div>
                            <label className='font-bold'>Output JSON</label>
                            <CustomJsonEditor json={output} readOnly />
                        </div>
                    </div>
                </div>
                <div className='flex space-x-4'>
                    <div><CustomButton variant='flat' text={'Generate Output'} onClick={GenerateOutput} /></div>
                </div>
            </form>
        </div>
    )
}
