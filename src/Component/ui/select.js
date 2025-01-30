import React, { useState } from 'react'
import { Select as CustomSelect, Text, Title } from 'rizzui'
import cn from '../../Utils/class-names';

function renderOptionDisplayValue(option) {
    return (
        <div className="flex items-center gap-3">
            <Text fontWeight="medium">{option.label}</Text>
        </div>
    );
}


export default function Select({ options, dropdownClassName, className, suffixClassName, title, fieldName, placeholder, error, selectClassName, ...props }) {

    const [value, setValue] = useState(null);

    return (
        <div>
            {title?<span class="rizzui-input-label block text-base mb-2 font-medium">{title}</span>:null}
            <CustomSelect
                options={options}
                value={value}
                onChange={setValue}
                placeholder={placeholder}
                getOptionDisplayValue={(option) => renderOptionDisplayValue(option)}
                selectClassName={cn('h-14 min-w-[150px]', selectClassName)}
                className={cn(className)}
                dropdownClassName={cn('z-[9999] p-1.5', dropdownClassName)}
                suffixClassName={suffixClassName}
                optionClassName={cn('dark:hover:bg-gray-300')}
                error={error}
                {...props}
                disabled={!options}
            />
        </div>
    )
}
