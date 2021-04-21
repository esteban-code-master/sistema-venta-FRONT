import React, { useEffect } from 'react'
import '../style.scss'

const Notify = () => {    
    useEffect(()=>{                
        setTimeout(()=>{
            console.log("hola");
        },5000)        
    },[])

    return(
        <div className = "notify">
                se creo correctamente !!!
        </div>
    )
}

export default Notify