import React, { useState } from 'react'
import IconExit from '../../../../public/icon/salir.png'
import '../style.scss'


const Modal = (props) => {   
    const {hidden,setHidden} = props
  
    return(
        <div 
            className = "modal" 
            style = {{display : hidden? "flex" : "none" }}          
        >
            <div className = "modal__card">
                <div className = "modal__header">
                   <span className = "modal__icon" onClick= {()=>{
                       setHidden(false)
                    }}
                    >
                        X
                    </span>
                </div>
                <div className = "modal__section">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default  Modal 