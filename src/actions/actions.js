import config from '../config/config';

const GET_USERS = 'GET_USERS';

export function getUsers() {
    // console.log(config);
    let data = fetch(config.baseUrl).then((response)=>{
        return response.json();
    }).then((result)=>{
        // console.log(result);
        return result;
    }).catch((err)=>{
        console.log("Found Error..: \n" + err);
    });
    console.log(data);
    return {
        type: GET_USERS,
        payload: data
    }
};