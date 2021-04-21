import React from 'react'
import Menu from '../../componets/menu/index'
import Header from '../../componets/header/index'
import Drawer from '@material-ui/core/Drawer';

import './style/index.scss'

const TemplateAdmin = (props) => {    
    
    return (
        <div className = "template-admin">                     
            <div className = "template-menu">
                    <Menu />
            </div>                                  
            <div className = "template-body">
                <div className = "template-header">                            
                    <Header />
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