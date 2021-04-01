import React from 'react'
import './style/notFound.scss'
import IconNotFound from '../../../public/icon/404.png'
import {NavLink} from 'react-router-dom'

const NotFound = () => {
    return(
        <React.Fragment>
            <div 
                className = "notFound"
                style = {{
                    backgroundImage: `url(${IconNotFound})`,                   
                }}
            >
                   <p className = "notFound__title">
                       404
                   </p>
                   <p className = "notFound__subtitle">
                       Ooops !
                   </p>
                   <p className = "notFound__text">
                       Pagina no encontrada
                   </p>
                   <span className = "notFound__box">                      
                        <NavLink to = "/app/dashboard" className = "notFound__button">
                                REGRESAR A HOME
                        </NavLink>                                                                                                                     
                   </span>
            </div>
        </React.Fragment>
    )
}

export default NotFound