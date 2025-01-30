import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Switch } from 'rizzui'

export default function CustomSwitch({ reduxState, name, label, value, disabled, setAction, position, labelPlacement, onClick }) {

    const dispatch = useDispatch()

    useEffect(() => {
        var oldJson = reduxState
        oldJson[name] = false;
        dispatch(setAction(oldJson));
    }, [])

    const handleClick = (value) => {
        if (disabled !== true) {
            var oldJson = reduxState
            oldJson[name] = value;
            dispatch(setAction(oldJson));
        }
        if (onClick) { onClick(value) }
    }

    return (
        <div>
            {position === 'top' && <label className="block font-bold ">{label}</label>}
            <Switch
                label={position !== 'top' && label}
                checked={value}
                onClick={() => handleClick(value ? false : true)}
                variant="outline"
                labelPlacement={labelPlacement}
            />
            {disabled ? <span className='text-red-500 text-xs tracking-wide'>This field cannot be edited</span> : null}
        </div>
    )
}
