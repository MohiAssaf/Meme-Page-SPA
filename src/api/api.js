const host = 'http://localhost:3030';

async function request(url, method, data){
    const options = {
        method,
        headers: {}
    }; 

    if(data != undefined){
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try{

    const res = await fetch(host + url, options)
    
    if(res.ok == false){

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