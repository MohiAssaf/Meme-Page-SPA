import { getUserData, removeUserData } from "../util.js";

let hostname = 'http://localhost:3030';


async function request(url, method, data){
    const options = {
        method,
        headers: {}
    };


    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    console.log(userData)
    //console.log(userData.accessToken)
    if(userData){
        options.headers['X-Authorization'] = userData.accessToken;
    }

    try{

    const res = await fetch(hostname + url, options)
    console.log(res)
    if(res.ok == false){

        if(res.status == 403){
            removeUserData(); // to avoid issue with an invalid token
         }

        const error = await res.json()

        throw new Error(error.message)
    }

    if (res.status == 204){ // this is to check if we have an empty response
        return res;

    }else{
        return res.json()
    }

} catch (err) {

    alert(err.message)
    throw err;

}
}

export async function get(url){
    return request(url, 'get')
}

export async function post(url, data){
    return request(url, 'post', data)
}

export async function put(url, data){
    return request(url, 'put', data)
}

export async function del(url){
    return request(url, 'delete')
}
