import config from '../config/index'

import "core-js/stable";
import "regenerator-runtime/runtime";

export const Productos = async () => {
    try
    {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjozLCJuYW1lIjoibHVpcyIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNDI4OTIzOH0.B8qIh0fDA51yROkSuaMn_CB56ONFS1EYVvzhDf8evVM`
        return new Promise(async(resolve,reject)=>{
           await fetch(`${config.hostName}/producto?offset=1&limit=10`,{
                method: "GET",
                headers: {
                    Authorization: `Bearer: ${token}`,
                    "Content-Type": "application/json"
                  },
                })               
                .then((res)=>{
                  resolve(res.json())
                })
                .catch((err)=>{
                    reject(err)
                    console.log(err);
                })
                
        })
      
    }   
    catch(err){
        console.log("se produjo un error");
        console.log(err);
    }
}


export const ProductosCreate = async (data) => {
    try
    {
        const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZEVtcGxlYWRvIjozLCJuYW1lIjoiZXN0ZWJhbiIsInJvbGUiOjEsIlBvc3QiOjEsImlhdCI6MTYxNTg0OTIxM30.5aIGtP0n3hS2ArA3BINjjLXVx5sM0ut82bUAiEBNSY4`      
           await fetch(`http://localhost:8001/api/producto`,{
                method: "POST",                           
                headers: {                                  
                    Authorization: `Bearer: ${token}`,
                    "Content-Type": "application/json"
                },
                body:  JSON.stringify(data),
            }) 
            .then((resp)=>{
                console.log(resp.json());
            })  
            .catch((er)=>{
                console.log(er);
            })                          
                  
    }   
    catch(err){
        console.log("se produjo un error");
        console.log(err);
    }
}