import React, { useState } from 'react'
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
// import Modal from '../../componets/utils/modal/index'
import {Modal,Input,Notify} from '../../componets/utils/index'

import './style/puntoVenta.scss'

const TemplatePuntoVenta = () => {
    const [visible,setVisible] = useState(false)
     const title = [
        {column : "CANTIDAD"},       
        {column : "DESCRIPCION"}, 
        {column : "NOMBRE"}, 
        {column : "PRECIO"}, 
        {column : "DESCUENTO"}, 
        {column : "IMPORTE"}, 
    ]

    const row = [        
        [
            {column:"45599"},
            {column:""},
            {column:"llaves inglesas"},
            {column:"$ 3595.00 MXM"},
            {column:"$ 49389.00 MXM"},
            {column:"$ 43487476.00 MXM"},
        ]    
        
    ]
    return(
        <React.Fragment>
            <Notify />
            <Modal hidden = {visible} setHidden = {setVisible}>
                 <div className = "modalCajero">
                     <h3>BIENVENIDO</h3>
                    <Input                     
                        className = "borderOne"
                        style = {{
                            width : "100%"                        
                        }}
                        placeholder = "ingrese usuario"                        
                    />
                    <div className = "modalCajero__button">                          
                        <Button 
                                    icon = {IconPagar}
                                    name = {"INGRESAR"}
                        />                                                                                                             
                    </div>                                
                 </div>                
            </Modal>          
           <div className =  "page">
                <div className = "page__header">
                    <span className = "page__title">
                            Cash Point v2
                    </span> 
                    <span className = "page__option">
                        <Header />
                    </span>                    
                </div>            
                <div className = "post">               
                    <div className = "post__menu">                                       
                        <div className = "post__menu-buttons">
                            <ButtonAction img = {CajaIcon} name = "CAJERO" onClick = {()=>{
                                   setVisible(true)                                 
                            }} /> 
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
                            <div style = {{flexGrow : 1}}>
                                <Table 
                                        theme = "themeWhite" 
                                        height = "260px" 
                                        title = {title}
                                        row = {row}
                                    >
                                        
                                    </Table> 
                            </div>
                            <div className = "post__cardVenta-button">
                                <Button 
                                        icon = {IconPagar}
                                        name = {"PAGAR"}
                                        style = {{background: "#E9D100"}}
                                />                                                               
                                 <Button 
                                        icon = {IconPagar}
                                        name = {"DEPOSITAR"}
                                        style = {{background: "#6BB6A4"}}
                                />
                                  <Button 
                                        icon = {IconPagar}
                                        name = {"RETIRAR"}
                                        style = {{background : "#EEB988"}}
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