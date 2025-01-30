import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { IoAlertCircleOutline } from "react-icons/io5";
import { Text, Title } from 'rizzui';
import cn from '../Utils/class-names';

const useCustomAlertController = () => {
    const [result, setResult] = useState(null);

    const showCustomAlert = (alertResult, duration = 3000) => {

        setResult({ ...alertResult, duration }); // Set result and duration for toast
    };

    const handleDismiss = (toastId) => {
        toast.dismiss(toastId); // Dismiss the toast by its ID
    };

    useEffect(() => {
        if (result) {
            const alertType = result?.status === 201 || result?.status === 200 ? 'success' : 'error';
            const alertTitle = result?.status === 201 || result?.status === 200 ? 'Operation Successful' : 'Operation Failed';
            const alertMessage = result?.message || (result?.status === 201 || result?.status === 200 ? result?.message : result?.error?.message);

            const toastId = toast.custom((t) => (
                <div className={cn('relative bg-white shadow-lg ring-1 ring-black ring-opacity-5 flex items-center')}>
                    <div className="absolute bottom-0 left-0 h-1 bg-red-700"
                        style={{
                            width: '100%',
                            animation: `progressBar ${result.duration}ms linear forwards`
                        }}></div>

                    <div className={cn('py-2 px-4 flex-1')}>
                        <Title as="h6" className={cn('mb-0.5 flex items-center text-sm', alertType === 'success' ? 'text-green-600' : 'text-red-600')}>
                            <IoAlertCircleOutline className="mr-1 h-[17px] w-[17px]" /> {alertTitle}
                        </Title>
                        <Text className="mt-1 leading-relaxed text-gray-500 font-bold tracking-wide">{alertMessage}</Text>
                    </div>

                    <div className="border-l border-gray-200 hover:cursor-pointer">
                        <label onClick={() => handleDismiss(t?.id)} className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:cursor-pointer" > Close </label>
                    </div>
                </div>
            ), { duration: result.duration });
        }
    }, [result]);

    return { showCustomAlert };
};

export default useCustomAlertController;
