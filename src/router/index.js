import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import TemplateAdmin from '../app/container/template/templatePrincipal'
import TemplateLogin from '../app/container/template/templateLogin'
import TemplatePuntoVenta from '../app/container/template/templatePuntoVenta'
import SwitchRouter from './switchRouter'
import NotFound from '../app/container/template/notFound'

const App = () =>{
    return(
        <BrowserRouter>                   
            <Switch>
                <Route 
                    path = "/" 
                    exact
                    component = {TemplateLogin} 
                />                                       
                <Route 
                    path = "/app"
                    render = {()=>{
                        return (
                            <TemplateAdmin>
                                <SwitchRouter />
                            </TemplateAdmin>
                        )
                    }}
                />
                <Route 
                    path = "/post"
                    component = {TemplatePuntoVenta}
                />
                <Route 
                    component = {NotFound}
                />            
        </Switch>                             
        </BrowserRouter>       
    )
}

export default App