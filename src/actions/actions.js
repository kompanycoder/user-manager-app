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

// before editing, get single user first into the edit component then edit 
export function getSingleUser(id){
    let userId = `/${id}`;
    let options = {
        method: 'GET'
    };

    let data = fetch(config.baseUrl+ userId,options).then((response)=>{
        return response.json();
    }).then((data)=>{
        // console.log(data);
        return data;
    }).catch((err)=>{
        console.log(err);
    });
    // console.log(data);
    return {
        type : 'GET_SINGLE_USER',
        payload: data
    }

}