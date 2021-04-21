import React from 'react'

const Input = (props) => {
    const {style,className,placeholder,type} = props
    return(
        <div className = "inputContainer" style = {style}>
            <label htmlFor = "labelId" > </label>
            <input 
                id = "labelId"
                className  =  {`inputContainer__box ${className}`}
                placeholder = {placeholder}                
                type = {type? type : "text"}
            />
        </div>
    )
}


export default Input