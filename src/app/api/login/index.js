import config from '../config/index'

import "core-js/stable";
import "regenerator-runtime/runtime";

export const login = async (data) => {
    try
    {     
       const token =  await fetch(`${config.hostName}/login`,{
            method : 'POST',
            body : JSON.stringify({
                user : data.user,
                password : data.password
            }),
            headers :{
                "Content-Type": "application/json"
            }
        })   
        
        return await token.json()   
    }
    catch(err)
    {
        console.log(err)
    }
}