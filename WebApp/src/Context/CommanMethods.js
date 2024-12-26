import { BASE_URL } from "../config";

export const commanGet = (url) => {
    var accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);

    return fetch( BASE_URL + url ,{
        method: "get",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`  // Add the access token here
        }
    });

}

export const commanPost = (url , ReqBody) =>{
    var accessToken = sessionStorage.getItem("accessToken");
    console.log(accessToken);
    return fetch(BASE_URL + url ,{
        method : "post",
        headers : {
            "Content-Type" : "application/json",
            "Authorization": `Bearer ${accessToken}`  // Add the access token here
        },
        body: JSON.stringify(ReqBody)

    });
}

export const onLogin = (url , ReqBody) => {
    return fetch(BASE_URL + url ,{
        method : "post",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(ReqBody)

    });
}