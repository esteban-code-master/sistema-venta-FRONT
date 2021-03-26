import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import TemplateAdmin from '../app/container/templatePrincipal'
import TemplateLogin from '../app/container/templateLogin'
import SwitchRouter from './switchRouter'

const App = () =>{
    return(
        <BrowserRouter> 
            {/* <TemplateAdmin
                Component = {SwitchRouter}            
            /> */}
            <TemplateLogin
                Component = {SwitchRouter}
            />
        </BrowserRouter>       
    )
}

export default App