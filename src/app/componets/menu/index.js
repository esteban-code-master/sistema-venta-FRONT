import React from 'react'
import List from './lista'
import menuIcon from '../../../public/icon/menu.png'
import userIcon from '../../../public/img/user.png'
import './styles.scss'

const Menu = () => {
    return(
        <React.Fragment>
            <div className = "menu">
                <div className = "menu__title">                   
                    <span className = "menu__title-text">Cash Point v2</span>
                    <span className = "menu__title-icon">
                        <img className = "menu__icon" src = {menuIcon}/>
                    </span>                    
                </div>
                <div className = "menu__info">
                   <div>
                       <img className = "menu__user-icon" src={userIcon}/>
                   </div>
                   <div className = "menu__user-info">
                       <span>Esteban Guzman</span>
                       <span className ="menu--text-small">
                           <div className = "menu_user-status"></div>
                           admin
                       </span>
                   </div>
                </div>
                <div className = "menu__option">
                    <ul className = "menu__option-ul">
                       {/* <List icon ={"j.png"} text = {"dasboard"}/>
                       <List icon ={"j.png"} text = {"dasboard"}/>
                       <List icon ={"j.png"} text = {"dasboard"}/> */}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Menu