import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import TemplateAdmin from '../app/container/templatePrincipal'
import TemplateLogin from '../app/container/templateLogin'
import SwitchRouter from './switchRouter'
import NotFound from '../app/container/notFound'

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
                    component = {NotFound}
                />            
        </Switch>                             
        </BrowserRouter>       
    )
}

export default App