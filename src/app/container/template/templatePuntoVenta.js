import React from 'react'
import Header from '../../componets/header/index'
import ButtonAction from '../../componets/box/buttonAction'
import Icon from '../../../public/icon/logo1.png'
import IconPagar from '../../../public/icon/pagar.png'
import UserInfo from '../../componets/user/userInfo'
import Table from '../../componets/utils/table'
import Button from '../../componets/utils/buttons/index'

import './style/puntoVenta.scss'

const TemplatePuntoVenta = () => {
     const title = [
        {column : "CANTIDAD"},        
    ]

    const row = [        
        [
            {column:"lm4pgo3m"}
        ]    
    ]
    return(
        <React.Fragment>
           <div className =  "page">
                <div>
                    <Header />
                </div>            
                <div className = "post">               
                    <div className = "post__menu">                                       
                        <div className = "post__menu-buttons">
                            <ButtonAction img = {Icon} name = "CAJERO" /> 
                            <ButtonAction img = {Icon} name = "CAJERO" /> 
                            <ButtonAction img = {Icon} name = "CAJERO" /> 
                        </div>
                        {/* <div className = "menu__user">
                            <UserInfo />
                        </div> */}
                    </div>    
                    <div className = "post__cardVenta">                    
                        <div className = "post__cardVenta-seccion">
                                <Table 
                                    theme = "themeZebra" 
                                    height = "auto" 
                                    title = {title}
                                    row = {row}
                                >
                                    
                                </Table> 
                                <Button 
                                    icon = {IconPagar}
                                    name = {"DEPOSITAR"}
                                />
                        </div>
                        <div className  = "post__cardVenta-pie">
                            <span className = "post__cardVenta-total">TOTAL:&nbsp;&nbsp;&nbsp;</span>
                            <span className = "post__cardVenta-cantidad">$ {`10.00`} MXN</span>
                        </div>
                    </div>       
                </div>
           </div>
        </React.Fragment>
    )
}

export default TemplatePuntoVenta