import React from 'react'
import {BrowserRouter,Switch,Route, Router} from 'react-router-dom'
import TemplateAdmin from '../app/container/templatePrincipal'
import TemplateLogin from '../app/container/templateLogin'
import SwitchRouter from './switchRouter'

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
        </Switch>                             
        </BrowserRouter>       
    )
}

export default App