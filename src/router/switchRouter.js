import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'
import {CategoriaView}  from '../app/views/categoria/index'
import {ConsultarCategoria} from '../app/views/categoria/consultar'
import {Prueba} from '../app/views/dashboard/actividadesrR'
import NotFound from '../app/container/template/notFound'

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
            <Route path = "/app/dashboard">
                <Prueba/>
            </Route>
            <Route 
                component = {NotFound}
            />                
        </Switch>            
    )
}
export default  SwitchRouter