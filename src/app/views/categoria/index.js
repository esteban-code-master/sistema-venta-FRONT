import React from 'react'
import {PostCategoria} from '../../api/categoria/index'

export const CategoriaView = () => {
    return(        
        <div className ="principal" >
            <input id="name" type ="text" placeholder ="crear una categoria"/>
            <button onClick = {obtenerName} >ENVIAR</button>
        </div>
    )
}

const obtenerName = () => {
    const  categoria =  document.getElementById('name').value
    
    const data = {
        name : categoria
    }

    PostCategoria(data)
}