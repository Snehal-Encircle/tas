import React from 'react';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import DestinationListing from './pages/DestinationListing/DestinationListing';


function Routing() {    
    return ( 
        <>              
           <Router>
               <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/destinationlisting" element={<DestinationListing />} />
               </Routes>
           </Router>
        </>
    );
}

export default Routing;