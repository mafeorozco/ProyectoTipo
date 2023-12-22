import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

//Auth
import Login from '../Page/Auth/Login';
import SingUp from '../Page/Auth/SignUp';

//Usuario
import Home from '../Page/User/Home';
import MainInformation from '../Page/User/MainInformation';
import RoutesUser from '../Page/User/Routes';
import Service from '../Page/User/Services';
import Store from '../Page/User/Store';

const allRoutes=[
    {
        link:"/*",
        component:<Home/>,
        ubication:"main"
    },
    {
        link:"/login",
        component:<Login/>,
        ubication:"main"
    },
    {
        link:"/inicioSesion",
        component:<SingUp/>,
        ubication:"main"
    },
    {
        link:"/",
        component:<MainInformation/>,
        ubication:"user"
    },
    {
        link:"rutas",
        component:<RoutesUser/>,
        ubication:"user"
    },
    {
        link:"servicios",
        component:<Service/>,
        ubication:"user"
    },
    {
        link:"tienda",
        component:<Store/>,
        ubication:"user"
    }
]

const RoutesProject = ({filter}) => {
    const [navRoutes,setNavRoutes]=useState([])
    useEffect(()=>{
        if(filter!==""){
            setNavRoutes(allRoutes.filter(item=>item.ubication===filter))
        }else{
            setNavRoutes(allRoutes)
        }
    },[])
   
    return ( 
        <div>
            <Routes>
                {navRoutes.length>0 ?navRoutes.map((item,index)=>(
                    <Route key={index} path={item.link} element={item.component}/>
                )): ''}
                <Route path='*' element={
                    <div><h1>No se encontro</h1></div>
                }/>
            </Routes>
        </div>
     );
}
 
export default RoutesProject;