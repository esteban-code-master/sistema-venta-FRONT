import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'

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
        </Switch> 
    )
}

export default  SwitchRouter