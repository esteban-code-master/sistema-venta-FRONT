import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'
import {Registro} from '../app/views/usuarios/index'

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
            <Route exact path = "/registro">
                <Registro/>
            </Route>           
        </Switch> 
    )
}

export default  SwitchRouter