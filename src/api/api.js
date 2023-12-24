const host = 'http://localhost:3030';

async function request(url, method, data){
    const options = {
        method,
        headers: {}
    };

    const res = await fetch(host + url, options)
    
    if(res.ok == false){

        const error = await res.json()
        throw new Error(error.message)
    }
}