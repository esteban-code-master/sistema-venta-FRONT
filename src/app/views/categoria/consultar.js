import React from 'react'
import {GetCategoria} from '../../api/categoria/index'

export const ConsultarCategoria = () =>{
    GetCategoria()
    .then((resp)=>{
        const data = resp.message;
        console.log(data)
        let parrafo = ""
        for (let index = 0; index < data.length; index++) {            
            parrafo += `
                <p class ="categoria">
                    ${data[index].name}      
                <p>
            `
        }                  
        
        document.getElementById('root-template').innerHTML = parrafo;
    })   
    return <div></div>
}