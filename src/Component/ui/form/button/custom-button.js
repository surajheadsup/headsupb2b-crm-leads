import React from 'react'
import { Button } from 'rizzui'
import cn from '../../../../Utils/class-names'

export default function CustomButton({ title, onClick, LeftIcon, variant='flat', disabled , loading}) {
    return (
        <Button  onClick={onClick} className={cn(' bg-red-main hover:text-white disabled:hover:bg-gray-200 disabled:hover:text-gray-400')} isLoading={loading} variant={variant} disabled={disabled}>
            <span className='mr-1'>{LeftIcon}</span>
            {title}
        </Button>
    )
}
