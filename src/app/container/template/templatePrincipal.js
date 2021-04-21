import React, { useEffect, useState } from 'react'
import Menu from '../../componets/menu/index'
import Header from '../../componets/header/index'
import Drawer from '@material-ui/core/Drawer';
import './style/index.scss'

const TemplateAdmin = (props) => {    
    const [show,setShow] = useState(true)
    const Animation = (status) => {      
        if(show){
            setShow(false)
        }     
        else{
            setShow(true)
        }                          
    }
    return (
        <div className = "template-admin">                             
            <div className = {`${show? "template-menu ":"template-menuHidden"}`} onClick = {()=>{
                Animation(false)
            }}>
                <div className = "template__hidden">
                    <Menu />
                </div>                    
            </div>                                             
            <div className = {`${show? "template-body":"template-bodyFit"}`} >
                <div className = "template-header">                                                              
                    <Header Animation = {Animation} />
                </div>   
                <div className = "template-content">
                    {props.children}
                    <div id="root-template">
                    </div>                
                </div>
                <div className = "template-footer">
                    Copyright © 2021 Sistema Cash point
                </div>
            </div>               
        </div>
    )
}

export default TemplateAdmin