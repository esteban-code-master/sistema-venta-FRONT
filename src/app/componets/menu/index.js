import React from 'react'
import { ListItem, ListItemIcon, ListItemText ,List} from '@material-ui/core'
import DashboardIcon from '@material-ui/icons/Dashboard';
import StoreIcon from '@material-ui/icons/Store';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import RemoveFromQueueIcon from '@material-ui/icons/RemoveFromQueue';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {NavLink} from 'react-router-dom'
import UserInfo from '../../componets/user/userInfo'
import './styles.scss'
const Menu = () => {    
    const listOption = [
        { url: "/app/dashboard",text : "Dashboard", icon : <DashboardIcon className = "menu_icon-white"/>},
        { url: "/app/productos",text : "Productos",icon: <StoreIcon className = "menu_icon-white"/>},
        { url: "/app/inventarios",text : "Inventarios",icon: <AssignmentIcon className = "menu_icon-white"/>},
        { url: "/app/reportes",text : "Reportes",icon: <RemoveFromQueueIcon className = "menu_icon-white"/>},
        { url: "/app/usuarios",text : "Usuarios",icon: <AccountCircleIcon className = "menu_icon-white"/>},
        { url: "/app/cortes",text : "Cortes",icon: <RecentActorsIcon className = "menu_icon-white"/>}
    ]
    return(
        <React.Fragment>                  
            <div className = "menu">
                <div className = "menu__title">                   
                    <span className = "menu__title-text">Cash Point v2</span>                                        
                </div>
                <div>
                    <UserInfo background = "#4B474C" color ="white" />
                </div>
                <div className = "menu__option">
                   <List component="nav">
                       {listOption.map((value,index)=>[                       
                            <NavLink  to={ value.url} className = "menu__link" key = {index}>
                                <ListItem button>
                                    <ListItemIcon>
                                        {value.icon}
                                    </ListItemIcon>
                                    <ListItemText primary = {value.text} />
                                </ListItem>
                            </NavLink>
                       ])}                        
                   </List>
                </div>
            </div>      
        </React.Fragment>
    )
}

export default Menu