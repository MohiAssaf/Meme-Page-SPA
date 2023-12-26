import { del, post } from "./api.js";

export async function login(username, password){
    return post('/users/login', {email, password})
}

export async function register(username, email, password, gender){
    return post('/users/register', {username, email, password, gender})
}

export async function logout(){
    return del('/users/logout')
}