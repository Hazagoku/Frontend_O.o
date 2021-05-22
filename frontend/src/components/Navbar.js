import React, {Component} from "react";
import logo_kavak from "../assets/images/logo_kavak.png"
import "../assets/css/Navbar.css"
import { Link, withRouter } from "react-router-dom";

const Navbar = () => {

    const MenuItems = [
        {title: "Compra un auto", url: "/", name: "nav_links"},
        {title: "Carrito", url: "./VehicleCard", name: "nav_links"},
        {title: "Añadir carro", url: "./Formulario", name: "nav_links"},
        {title: "Paginacion", url: "./Paginacion", name: "nav_links"}
    ]

    return(
        <div>
            <nav className="NavbarItems">
                
                <a href="/" className="navbar_logo"><img src={logo_kavak} height="50px" alt="logo_kavak"/></a>
    
                <ul className="nav_menu">
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}><Link to={item.url} className={item.name}>{item.title}</Link></li>
                        )
                    })}
                </ul>

            </nav>

            <div className="barra_horizontal" >
                <p className="lugar">Autos en Quintana Roo</p>
            </div>
        </div>     
    )
        
}

export default withRouter(Navbar);