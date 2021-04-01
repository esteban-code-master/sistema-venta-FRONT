import React from 'react'
import Header from '../../componets/header/index'
import ButtonAction from '../../componets/box/buttonAction'
import Icon from '../../../public/icon/logo1.png'
import UserInfo from '../../componets/user/userInfo'
import Table from '../../componets/utils/table'

import './style/puntoVenta.scss'

const TemplatePuntoVenta = () => {
    return(
        <React.Fragment>
            <div>
                <Header />
            </div>            
            <div className = "contenido">               
                <div className = "menu">                                       
                    <div className = "menu__buttons">
                        <ButtonAction img = {Icon} name = "CAJERO" /> 
                        <ButtonAction img = {Icon} name = "CAJERO" /> 
                        <ButtonAction img = {Icon} name = "CAJERO" /> 
                    </div>
                    <div className = "menu__user">
                        <UserInfo />
                    </div>
                </div>    
                <div className = "cardVenta">                    
                    <Table theme = "themeZebra">
                        
                    </Table>
                    <div className  = "cardVenta__pie">
                        <span className = "cardVenta__total">TOTAL:&nbsp;&nbsp;&nbsp;</span>
                        <span className = "cardVenta__cantidad">$ {`10.00`} MXN</span>
                    </div>
                </div>       
            </div>
        </React.Fragment>
    )
}

export default TemplatePuntoVenta