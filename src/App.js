import React from 'react'
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
const App = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path ="/dashboard">DASHBOARD</Route>                
            </Switch>
        </BrowserRouter>
    )
}

export default App