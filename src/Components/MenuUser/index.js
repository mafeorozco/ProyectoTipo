import React from 'react'
import { Link } from 'react-router-dom';
import { MenuUserStyle } from '../../Style';

export const MenuUser = () => {
    return ( 
        <div className='all-menu'>
            <div className='Menu'>
                <div className="menu-logo">
                    <div className="logo"></div>
                </div>
                <div className='menu-content-user'>
                    <Link className="link-menu-right" to='/'>Inicio</Link>
                    <Link className="link-menu-right" to='rutas'>Rutas</Link>
                    <Link className="link-menu-right" to='servicios'>Servicios</Link>
                    <Link className="link-menu-right" to='tienda'>Tienda</Link>
                    <Link className="link-menu-right" to='/login'>Iniciar sesion</Link>
                </div>
            </div>
        </div>
     );
}
