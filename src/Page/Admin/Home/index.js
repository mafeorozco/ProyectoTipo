import React from 'react'
import RoutesProject from '../../../Routes';
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';

const HomeAdmin = () => {
    return ( 
        <div>
            <p>Admin inicio</p>
            <Link to='inicioSesion'>Inicio sesion</Link>
            <RoutesProject filter="user"/>
        </div>
     );
}
 
export default HomeAdmin;