import React from 'react'
import Header from '../componets/header/index'
import ButtonAction from '../componets/box/buttonAction'
import Icon from '../../public/icon/logo1.png'
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
                    <div>

                    </div>
                </div>           
            </div>
        </React.Fragment>
    )
}

export default TemplatePuntoVenta