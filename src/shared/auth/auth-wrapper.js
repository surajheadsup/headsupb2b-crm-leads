import React from 'react'
import cn from '../../Utils/class-names'
import { PiArrowLeftBold } from 'react-icons/pi'
import { Title } from 'rizzui'

export default function AuthWrapper({ title, backHomeClassName = '', wrapperClassName = '', formClassName = '', children }) {
    return (
        <div className='grid grid-cols-2 h-[100vh]'>
            <div className='login'></div>
            <div>{children}</div>
        </div>
    )
}
