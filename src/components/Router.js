import React from 'react'
import { Route } from 'react-router'
import App from '../App'
import Trailer from './Trailer'

function Router() {
    return (
        <div>
            <Route exact path='/' component={App}/>
            <Route path='/trailer'component={Trailer}/>
            
        </div>
    )
}

export default Router
