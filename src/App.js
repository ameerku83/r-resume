import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import NavContact from './component/NavContact';
import Footer from './component/Footer';
import LatestProjects from './pages/LatestProjects';
import Login from './pages/Login';
import Home from './pages/Home';


function App() {
  return (

    <BrowserRouter>
    <NavContact/>
    <Home/>
   
    <Routes>
   
      <Route path='/project' element={<LatestProjects/>} />
      <Route path='/login' element={<Login/>} />
      
      <Route/>
    </Routes>
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
