import React from 'react'
import Nav from './Nav.js'
import {Outlet} from 'react-router-dom'
function Root() {
    return (
        <div>
            <div>
                <Nav/>
                <div className="mt-5 container" style={{minHeight:"90vh"}}>
                <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default Root
