import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import TemplateAdmin from '../app/container/templatePrincipal'

import SwitchRouter from './switchRouter'

const App = () =>{
    return(
        <BrowserRouter> 
            <TemplateAdmin
                Component = {SwitchRouter}            
            />                                                               
        </BrowserRouter>       
    )
}

export default App