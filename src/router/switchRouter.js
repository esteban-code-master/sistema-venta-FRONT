import React from 'react'
import {Switch,Route, BrowserRouter} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'
import {CategoriaView}  from '../app/views/categoria/index'
import {ConsultarCategoria} from '../app/views/categoria/consultar'

const SwitchRouter = () => {    
    return(       
        <Switch>                    
            <Route path ="/app/post">    
                <div id="root-template"></div>              
               <Tabla2 />                              
            </Route>                                  
            <Route path ="/app/get">            
               <Tabla />                                           
            </Route>   
            <Route path = "/app/categoria" >                       
                <CategoriaView />
            </Route> 
            <Route path = "/app/consultar" >                                       
                <ConsultarCategoria />
            </Route>   
        </Switch>            
    )
}

export default  SwitchRouter