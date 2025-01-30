import React, { useState } from 'react';
import { Colors } from '../../../../Constant/Colors/Color';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { SET_AUTH, setAuth } from '../../../../Store/Action/Auth/Sample/AuthAction';

function LoginInput({ icon, placeholder, ispassword, value, error, name }) {
    const [changeType, setType] = useState(ispassword ? 'password' : 'text');
    const AuthReducer = useSelector(state => state.AuthReducer)


    const dispatch = useDispatch()
    const onChange = (value) => {
        var oldJson = AuthReducer.doc
        var json = {
            [name]: value
        }

        Object.assign(oldJson, json)
        dispatch(setAuth(oldJson, SET_AUTH))
    }

    return (
        <div>
            <div className='bg-white rounded-2xl px-5 py-3'>
                <div className='flex items-center gap-x-1'>
                    {icon}
                    <input className="w-full outline-none border-0 rounded-xl text-black" placeholder={placeholder} type={changeType} value={value} onChange={(event) => onChange(event.target.value)} />
                    {ispassword && (
                        changeType === "password"
                            ? <FiEye size={25} color={Colors.LOGINRED} onClick={() => setType("text")} />
                            : <FiEyeOff size={25} color={Colors.LOGINRED} onClick={() => setType("password")} />
                    )}
                </div>
            </div>
            <div className='text-xs mt-1.5 font-medium' style={{ color: Colors.LOGINYELLOW }}>
                {error && AuthReducer?.error[name]}
            </div>
        </div>
    );
}

export default LoginInput;
