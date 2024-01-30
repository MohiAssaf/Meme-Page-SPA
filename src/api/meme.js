import * as api from './api.js';


export async function getAllMemes(){ // api GET request to get all memes in the server
    return api.get("/data/memes?sortBy=_createdOn%20desc")
}

export async function createMeme(data){ // api POST request to add a new meme
    return api.post('/data/memes', data)
}

export async function detailsMeme(id){ // api GET request to get the details of a specific meme
    return api.get('/data/memes/' + id);
}

export async function deleteMeme(id){ // api DELETE request to delete a specific meme
    return api.del('/data/memes/' + id)
}

export async function updateMeme(id, meme){ // api UPDATE request to update the details of a specific meme
    return api.put('/data/memes/' + id, meme)
}

export async function userMemes(userId){ // api GET request to get all memes posted by a specific user
    return api.get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
}