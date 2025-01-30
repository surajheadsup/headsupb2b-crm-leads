import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export function useReduxReset(actionType) {
    const dispatch = useDispatch();
    const resetState = useCallback(() => {
        if (actionType === 'ALL') {
            // Dispatch action to reset the entire Redux store (global reset)
            dispatch({ type: 'RESET_ALL_STATE' });
        } else {
            // Dispatch action to reset a specific part of the state
            dispatch({ type: actionType });
        }
    }, [dispatch, actionType]);

    return resetState;
}
