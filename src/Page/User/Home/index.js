import React from 'react'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';
import { MenuUser } from '../../../Components';
import RoutesProject from '../../../Routes';
import { HomeUser,Global } from '../../../Style';
import "bootstrap/dist/css/bootstrap.css";

const Home = () => {
    return ( 
        <div>
            <div>
                <MenuUser/>
            </div>
            <div className="content-user">
            <RoutesProject filter="user"/>
            </div>
        </div>
     );
}
 
export default Home;