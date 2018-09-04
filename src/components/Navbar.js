import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {

  
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="" className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          {/* Navlink faz ao acessar a rota o link fique com uma classe active
                assim podemos alterar o comportamento da pagina de forma fácil */}
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
