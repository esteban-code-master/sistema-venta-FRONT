import React from 'react'
import './style.scss'
import userIcon from '../../../public/img/user.png'

const UserInfo = () => {
    return(
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
    )
}

export default UserInfo