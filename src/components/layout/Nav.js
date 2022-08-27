// import React from 'react';
import { NavLink } from "react-router-dom";
import '../../styles/Nav.css'
const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined }>Home</NavLink></li>
                    <li><NavLink to="/nosotros" className={({isActive}) => isActive ? "activo" : undefined }>Nosotros</NavLink></li>
                    <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" : undefined }>Próximos Viajes</NavLink></li>
                    <li><NavLink to="/galeria" className={({isActive}) => isActive ? "activo" : undefined }>Galeria</NavLink></li>
                    {/* <li><NavLink to="/novedades" className={({isActive}) => isActive ? "activo" : undefined }>Novedades</NavLink></li> */}
                    <li><NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined }>Contacto</NavLink></li>
                    {/* <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/viajes">Viajes</Link></li>
                    <li><Link to="/galeria">Galería</Link></li>
                    <li><Link to="/novedades">Novedades</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li> */}
                </ul>
            </div>
        </nav>
    );
}
export default Nav;