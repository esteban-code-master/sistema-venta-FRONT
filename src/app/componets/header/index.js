import React from 'react'
import './styles.scss'
import mexicoIcon from '../../../public/icon/mexico.png'
import salidaIcon from '../../../public/icon/salida.png'
import configIcon from '../../../public/icon/config.png'
import postIcon from '../../../public/icon/post.png'
import notifyIcon from '../../../public/icon/notificacion.png'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';


const Header = ({Animation}) => {    
    return(
       <div className = "header">     
            <span className = "header__center">
                <IconButton 
                    onClick = {()=>{
                        Animation(true)
                    }}
                >
                    <MenuIcon style = {{color: "white"}} />
                </IconButton>                
            </span>    
            <span className ="header__idioma header__center">
                <Link to = "/app/dashboard">
                    <img className = "header__icon"  src = {mexicoIcon} />
                </Link>                
            </span>
            <span className = "header__fecha">Lunes 3 marzo 2021  7:55 pm</span>
            <ul className = "header__group-icon">                
                <li> 
                    <Link to = "/post">
                        <img className = "header__icon" src = {postIcon} />
                    </Link>                    
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