import config from '../config/config';

const GET_USERS = 'GET_USERS';

// get user
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
    // console.log(data);
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
// edit user
export function editUser(id,user){
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

    let data = fetch(config.baseUrl+userId,restOfOptions).then((response)=>{ 
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