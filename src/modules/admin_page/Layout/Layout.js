import React from "react"
import { NavLink } from "react-router-dom"




const Layout = () =>{
    return( 
    <div>
        
        <NavLink to='/login' >Login</NavLink>
        <NavLink to='/register' >Register</NavLink>
    </div>
    )
}

export default Layout
