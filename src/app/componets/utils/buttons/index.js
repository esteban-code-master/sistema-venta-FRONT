import React from 'react'
import '../style.scss'

const Button = (props) => {
    const {icon,name,style} = props

    return(
       <React.Fragment>        
            <div className = "buttonContainer defaultColor"  style = {style}>
                <span className = "buttonContainer__icon">
                    <img className = "buttonContainer__img" src = {icon} />
                </span>
                <span className = "buttonContainer__text">
                    {name}
                </span>
            </div>           
       </React.Fragment>
    )
}

export default Button