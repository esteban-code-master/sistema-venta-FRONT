import React from 'react'
import './styles.scss'
import mexicoIcon from '../../../public/icon/mexico.png'
import salidaIcon from '../../../public/icon/salida.png'
import configIcon from '../../../public/icon/config.png'
import postIcon from '../../../public/icon/post.png'
import notifyIcon from '../../../public/icon/notificacion.png'

const Header = () => {
    return(
       <div className = "header">         
            <span className ="header__idioma">
                <img className = "header__icon"  src = {mexicoIcon} />
            </span>
            <span className = "header__fecha">Lunes 3 marzo 2021  7:55 pm</span>
            <ul className = "header__group-icon">                
                <li> 
                    <img className = "header__icon" src = {postIcon} />
                </li>    
                <li>
                    <img className = "header__icon" src = {configIcon} />                
                </li> 
                <li>
                    <img className = "header__icon" src = {notifyIcon} />
                </li> 
                <li>
                    <img className = "header__icon" src = {salidaIcon} />
                </li>                                               
            </ul>        
       </div>
    )
}

export default Header