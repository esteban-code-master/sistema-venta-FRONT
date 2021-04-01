import React from 'react'
import List from './lista'
import menuIcon from '../../../public/icon/menu.png'
import userIcon from '../../../public/img/user.png'
import UserInfo from '../../componets/user/userInfo'

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
                <div>
                    <UserInfo background = "#4B474C" color ="white" />
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