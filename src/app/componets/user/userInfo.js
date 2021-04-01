import React from 'react'
import './style.scss'
import userIcon from '../../../public/img/user.png'

const UserInfo = (props) => {
    const {background,color} = props

    return(
    <div className = "menu__info" style = {{background : background}}>
        <div>
            <img className = "menu__user-icon" src={userIcon}/>
        </div>
        <div className = "menu__user-info" style = {{color : color}}>
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