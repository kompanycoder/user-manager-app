import config from '../config/config';
// used fetch instead of axios
// import axios from 'axios';
const GET_USERS = 'GET_USERS';

// look into this -solved
// get user
export async function getUsers() {
    // console.log(config);
    let data = await fetch(config.baseUrl).then((response)=>{
        // console.log(response);
        return response.json();
    }).then((result)=>{
        // console.log(result);
        return result;
    }).catch((err)=>{
        console.log("Found Error..: \n" + err);
    });
    // console.log(data);
    return {
        type: GET_USERS,
        payload: data
    }
};

// before editing, get single user first into the edit component then edit 
export async function getSingleUser(id) {
    let userId = `/${id}`;
    let options = {
        method: 'GET'
    };

    let data = await fetch(config.baseUrl+ userId,options).then((response)=>{
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
// edit user
export async function editUser(id,user){
    // note this works. after adding body plus json integrity for object
    let userId = `/${id}`;
    // console.log(user, userId);
    let restOfOptions = {
        headers: {
            // 'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'PATCH',
        // cors mode not supported. tested this...
        // mode: 'CORS'
        body: JSON.stringify(user)
    };
    // let body = JSON.stringify(user);
    // console.log(body);

    let data = await fetch(config.baseUrl+userId,restOfOptions).then((response)=>{ 
        return response.json()
    }).then((data)=>{
        return data
    }).catch((err)=>{
        console.log(err);
    });
    return {
        type: 'EDIT_USER',
        payload: data
    }
}