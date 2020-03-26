
import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = () =>{

    return(
        <nav className="navbar navbar-dark bg-primary" >
            <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Главная<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/about">Информация<span className="sr-only">(current)</span></NavLink>
      </li>
      
    </ul>
</nav>
    )
}