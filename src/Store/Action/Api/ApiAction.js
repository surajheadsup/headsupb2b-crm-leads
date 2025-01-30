
import { _id } from "../../../Constant/Common/common-variable";
import { getAuthToken, getAuthenticatedUser, logOutAuthenticatedUser } from "../../../Storage/Storage";

export const SET_API_JSON = 'SET_API_JSON'

export const setApiJson = (data) => ({
    type: SET_API_JSON,
    value: data
});

export const HitApi = (json, api) => {

    const MyPromise = new Promise((resolve, reject) => {
        const user = getAuthenticatedUser()
       
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : 'token',
            },
            body: JSON.stringify(json)
        };
        
        fetch(api, requestOptions)
            .then(res => res.text())
            .then(
                (res) => {
                    var result = JSON.parse(res)
                    if (result?.status === 401 && result?.error === "Invalid token signature") {
                        window.location.href = '/login'
                        logOutAuthenticatedUser()
                    } else {
                        resolve(result)
                    }
                },
                (error) => resolve(error)
            )

        // fetch(api, requestOptions)
        //     .then(res => {

        //         if (!res.ok) {

        //             if (res?.status !== 401) {
        //                 return res.json().then(err => {

        //                     resolve({
        //                         success: false,
        //                         status: res.status,
        //                         statusText: res.statusText,
        //                         error: err,
        //                     });
        //                 });
        //             } else if (res?.status === 401 && res?.statusText === "Unauthorized") {
        //                 // window.location.href = '/login'
        //                 // logOutAuthenticatedUser()
        //             }
        //         }
        //         return res.json();
        //     })
        //     .then(result => {
        //         if (result) {
        //             resolve(result)
        //         }
        //     })
        //     .catch(err => {
        //         resolve({
        //             success: false,
        //             message: 'An error occurred during the API call.',
        //             error: err,
        //         });
        //     });
    });

    return MyPromise;
}



export const HitApiFormData = (data, api) => {
    const MyPromise = new Promise((resolve, reject) => {
        const user = getAuthenticatedUser();

        // Check if we are sending FormData or JSON
        let requestOptions = {
            method: 'POST',
            headers: {},
            body: null
        };

        // If data is a FormData object, skip setting content-type
        if (data instanceof FormData) {
            if (api.includes('add')) {
                data.append('updatedBy', user?.userId);
                data.append('createdBy', user?.userId);
                data.append('status', 'active');
            } else if (api.includes('update') || api.includes('delete')) {
                data.append('updatedBy', user?.userId);
            }
            requestOptions.body = data;
        } else {
            // Handle JSON data
            if (api.includes('add')) {
                Object.assign(data, { updatedBy: user?.userId, createdBy: user?.userId, status: 'active' });
            } else if (api.includes('update')) {
                Object.assign(data, { updatedBy: user?.userId });
            } else if (api.includes('delete')) {
                Object.assign(data, { updatedBy: user?.userId });
            }
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(data);
        }

        // Add authorization token
        requestOptions.headers.Authorization = getAuthToken() ? `Bearer ${getAuthToken()}` : 'token';

        // Fetch API request
        fetch(api, requestOptions)
            .then(res => res.text())
            .then(
                (res) => {
                    const result = JSON.parse(res);
                    if (result?.status === 401 && result?.error === "Invalid token signature") {
                        window.location.href = '/login';
                        logOutAuthenticatedUser();
                    } else {
                        resolve(result);
                    }
                },
                (error) => resolve(error)
            )
            .catch(err => {
                resolve({
                    success: false,
                    message: 'An error occurred during the API call.',
                    error: err,
                });
            });
    });

    return MyPromise;
};



export const HitApiXML = (json, api) => {
    const MyPromise = new Promise((resolve, reject) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : 'token',
            },
            body: JSON.stringify(json)
        };
        fetch(api, requestOptions)
            .then(res => res.text())
            .then(
                (result) => {
                    if (result) {
                        resolve(result)
                    }
                },
                (error) => {

                    resolve(error);
                }
            )
    });

    return MyPromise;
}


export const AllApiCallHere = async (json, api, xml, setAction) => {
    try {
        // Set a default status if 'search' doesn't exist in the json
        json = json?.search ? json : { ...json, status: json?.status || 'active' };

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: getAuthToken() ? `Bearer ${getAuthToken()}` : 'token',
            },
            body: JSON.stringify(json),
        };

        const response = await fetch(api, requestOptions);

        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                status: response.status,
                statusText: response.statusText,
                error: errorData,
            };
        }

        // Return XML as text if requested, else return JSON
        const result = xml ? await response.text() : await response.json();

        return result;

    } catch (err) {
        return {
            success: false,
            message: 'An error occurred during the API call.',
            error: err,
        };
    }
};
