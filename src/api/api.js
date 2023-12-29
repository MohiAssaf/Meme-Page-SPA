import { getUserData } from "../util.js";

let hostname = 'http://localhost:3030';


async function request(url, options) {
    try {
        let response = await fetch(hostname + url, options)

        if (response.ok == false) {
            const error = await response.json()
            throw new Error(error.message)
        }

        if (response.status == 204) {
            return response
        } else {
            return response.json()
        }
    } catch (error) {
        alert(error.message)
        throw error
    }
}



function createOptions(method = "get", data) {
    const options = {
        method,
        headers: {}

    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data)
    }

    let userData = getUserData()

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken
    }

    return options
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
