import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import RoutesProject from './Routes';
import Home from './Page/User/Home';

const App = () => {
    return ( 
        <div>
            <Router>
                <RoutesProject filter="main"/>
            </Router>
        </div>
     );
}
 
export default App;