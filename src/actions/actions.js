import config from '../config/config';

export function getUsers() {
    // console.log(config);
    return fetch(config.baseUrl).then((response)=>{
        return response.json();
    }).then((result)=>{
        // console.log(result);
        return result;
    }).catch((err)=>{
        console.log("Found Error..: \n" + err);
    });
};