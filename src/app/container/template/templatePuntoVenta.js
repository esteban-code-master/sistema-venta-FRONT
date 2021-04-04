import React from 'react'
import Header from '../../componets/header/index'
import ButtonAction from '../../componets/box/buttonAction'
import CajaIcon from '../../../public/icon/cajaIcon.png'
import DevolucionIcon from '../../../public/icon/devolucion.png'
import CorteIcon from '../../../public/icon/corte.png'
import IconPagar from '../../../public/icon/pagar.png'
import codeIcon from '../../../public/icon/codigo.png'
import UserInfo from '../../componets/user/userInfo'
import Table from '../../componets/utils/table'
import Button from '../../componets/utils/buttons/index'
import Search from '../../componets/utils/search/index'

import './style/puntoVenta.scss'

const TemplatePuntoVenta = () => {
     const title = [
        {column : "CANTIDAD"},        
    ]

    const row = [        
        [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ],
        [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
            {column:"lm4pgo3m"}
        ]    
        , [
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
                            <ButtonAction img = {CajaIcon} name = "CAJERO" /> 
                            <ButtonAction img = {DevolucionIcon} name = "CAJERO" /> 
                            <ButtonAction img = {CorteIcon} name = "CAJERO" /> 
                        </div>                      
                        <div className = "post__user-info">
                            <div className = "post__user--width">
                                <UserInfo 
                                    background = "#ECF0F5" 
                                    color  = "black"
                                />
                            </div>                            
                        </div>
                    </div>    
                    <div className = "post__cardVenta">                                          
                            <div className = "post__cardVenta-search">
                                <span className = "margin-right post_box">
                                    <img className = "imgFill" src = {codeIcon} />
                                </span>                                
                                <Search style= {{maxWidth: "500px"}}/>                                                                
                            </div>
                            <div>
                                <Table 
                                        theme = "themeZebra" 
                                        height = "260px" 
                                        title = {title}
                                        row = {row}
                                    >
                                        
                                    </Table> 
                            </div>
                            <div className = "post__cardVenta-button">
                                <Button 
                                        icon = {IconPagar}
                                        name = {"DEPOSITAR"}
                                        style = {{background : "red"}}
                                />                                                               
                                 <Button 
                                        icon = {IconPagar}
                                        name = {"DEPOSITAR"}
                                />
                                  <Button 
                                        icon = {IconPagar}
                                        name = {"DEPOSITAR"}
                                />
                            </div>                                               
                        </div>
                        <div className  = "post__cardVenta-pie">
                            <span className = "post__cardVenta-total">TOTAL:&nbsp;&nbsp;&nbsp;</span>
                            <span className = "post__cardVenta-cantidad">$ {`10.00`} MXN</span>
                        </div>
                    
                </div>
           </div>
        </React.Fragment>
    )
}

export default TemplatePuntoVenta