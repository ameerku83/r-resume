import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import NavContact from './component/NavContact';
import Footer from './component/Footer';

import Login from './component/Login';
import Home from './pages/Home';
import LatestProjects from './component/LatestProjects';


function App() {
  return (

    <BrowserRouter>
    <NavContact/>
   
   
    <Routes>
      
      <Route path='/r-resume' element={<Home/> } />
      <Route path='/login' element={<Login/>} />
      
      
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
