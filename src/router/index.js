import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import TemplateAdmin from '../app/container/templatePrincipal'
import TemplateLogin from '../app/container/templateLogin'
import SwitchRouter from './switchRouter'

const App = () =>{
    return(
        <BrowserRouter>                     
            <Switch>
                <Route exact path = "/">
                    <TemplateLogin/>
                </Route>
                <Route exact path = "/dashboard">
                    <TemplateAdmin
                        Component = {SwitchRouter}            
                    />
                </Route>
            </Switch>
        </BrowserRouter>       
    )
}

export default App