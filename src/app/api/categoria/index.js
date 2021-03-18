import config from '../config/index'


export const PostCategoria = async (data)=>{
    try{
            const token =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjozLCJuYW1lIjoiZXN0ZWJhbiIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNTg0OTIxM30.5aIGtP0n3hS2ArA3BINjjLXVx5sM0ut82bUAiEBNSY4`
            await fetch(config.hostName + "/categoria",{
                    method : 'POST',
                    body : JSON.stringify(data),
                    headers : {
                        Authorization: `Bearer: ${token}`,
                        "Content-Type": "application/json"
                    }
                })            
    }
    catch(err){
        console.log(err)
    }
}

export const GetCategoria = async ()=>{
    try{
            const token =  `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjozLCJuYW1lIjoiZXN0ZWJhbiIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNTg0OTIxM30.5aIGtP0n3hS2ArA3BINjjLXVx5sM0ut82bUAiEBNSY4`
            return new Promise(async(resolve,reject)=>{
                await fetch(config.hostName + "/categoria",{
                    method : 'GET',                
                    headers : {
                        Authorization: `Bearer: ${token}`,
                        "Content-Type": "application/json"
                    }
                }) 
                .then((categoria)=>{
                    resolve(categoria.json())
                })
                .catch((err)=>{
                    reject(err)                    
                })
            })                      
    }
    catch(err){
        console.log(err)
    }
}

