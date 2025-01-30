import { useMemo } from 'react';
import { getAuthenticatedUser, getAuthenticatedUserWithRoles } from '../Storage/Storage';

const usePermissionCheck = (searchValue, action) => {

    const user = getAuthenticatedUserWithRoles();
    
    const permissions = user?.roleObject?.permission;
    // Recursive function to find permission dynamically
    const findPermission = (permissions, searchValue, action) => {
        if (!permissions || !searchValue || !action) return false; // Check if any are undefined or null
        for (let perm of permissions) {
            // Ensure perm.value and searchValue are defined before calling toLowerCase()
            if (perm?.value && searchValue && perm.value.toLowerCase().includes(searchValue.toLowerCase())) {
                // Check if the action is allowed
                if (perm.permission.some(p => p[action] === true)) {
                    return true;
                }
            }
            // If there are child permissions, search recursively
            if (perm?.child && perm.child.length > 0) {
                const childResult = findPermission(perm.child, searchValue, action);
                if (childResult) return true;
            }
        }
        return false;
    };

    // Memoize the result to avoid recalculating on every render
    return useMemo(() => findPermission(permissions, searchValue, action), [permissions, searchValue, action]);
};

export default usePermissionCheck;
