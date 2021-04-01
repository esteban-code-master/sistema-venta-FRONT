import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'
import {CategoriaView}  from '../app/views/categoria/index'
import {ConsultarCategoria} from '../app/views/categoria/consultar'

const SwitchRouter = () => {    
    return(
        <Switch>
            <Route exact path ="/">              
                <div>
                    dashboard
                </div>
            </Route>
            <Route exact path ="/ejemploPOST">    
                <div id="root-template"></div>              
               <Tabla2 />                              
            </Route>                                  
            <Route exact path ="/ejemploGET">            
               <Tabla />                              
            </Route>   
            <Route exact  path = "/crearCategoria" >                       
                <CategoriaView />
            </Route> 
            <Route exact  path = "/consultarCategoria" >                                       
                <ConsultarCategoria />
            </Route> 
        </Switch> 
    )
}
export default  SwitchRouter