import React from 'react'
import {Switch,Route} from 'react-router-dom'
import { Tabla,Tabla2 } from '../app/views/ejemplo/index'
import {CategoriaView}  from '../app/views/categoria/index'
import {ConsultarCategoria} from '../app/views/categoria/consultar'
import NotFound from '../app/container/template/notFound'

const SwitchRouter = () => {    
    return(       
        <Switch>
            <Route
                path = "/app/dashboard"
            >
                <div style = {{padding:'30px'}}>
                    <button style = {{padding:'30px',marginRight: '20px'}} onClick = {async ()=>{
                            await fetch('http://localhost:8001/api/pdpf?gmail=canepaalexis@gmail.com')                             
                            alert('se envio pdf')
                    }}>
                        ENVIAR PDF
                    </button>
                    <button style = {{padding:'30px',marginRight: '20px'}} onClick = {async()=>{
                        await fetch('http://localhost:8001/api/pdpf?excel=canepaalexis@gmail.com')                        
                        alert('se envio excel')
                    }}>
                        ENVIAR EXCEL
                    </button>
                </div>
            </Route>
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
            <Route 
                component = {NotFound}
            />                
        </Switch>            
    )
}

export default  SwitchRouter