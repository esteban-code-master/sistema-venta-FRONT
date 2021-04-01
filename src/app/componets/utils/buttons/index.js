import React from 'react'
import '../style.scss'

const Button = (props) => {
    const {icon,name} = props

    return(
       <React.Fragment>
           <div className = "prueba">
           <div className = "buttonContainer">
              <span className = "buttonContainer__icon">
                  <img className = "buttonContainer__img" src = {icon} />
              </span>
              <span className = "buttonContainer__text">
                  {name}
              </span>
           </div>
           </div>           
       </React.Fragment>
    )
}

export default Button