import * as api from './api.js';

// export const login = api.login
// export const register = api.register
// export const logout = api.logout


export async function getAllMemes(){
    return api.get("/data/memes?sortBy=_createdOn%20desc")
}

export async function createMeme(data){
    return api.post('/data/memes', data)
}

export async function detailsMeme(id){
    return api.get('/data/memes/' + id);
}

export async function deleteMeme(id){
    return api.del('/data/memes/' + id)
}

export async function updateMeme(id, meme){
    return api.put('/data/memes/' + id, meme)
}