import { AuthenticatedUser } from "../../../Storage/Storage";

const token = JSON.parse(localStorage?.getItem(AuthenticatedUser ))
export const apiHit = (json, api) => {
    return new Promise(function (resolve, reject) {
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token ? `Bearer ${token}` : "",
            },
            body: JSON.stringify(json),
        };
        fetch(api, requestOptions)
            .then((res) => res.json())
            .then(
                (result) => {
                    resolve(result);
                },
                (error) => {
                    resolve("error");
                }
            )
            .catch((err) => {
                resolve("err");
            });
    });
};
