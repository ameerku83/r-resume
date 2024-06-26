import React from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"



function NavContact() {


    return (
      <>
      
        <Navbar expand="lg" className=" position-fixed w-100  ">
        <Container >
          <Navbar.Brand style={{fontSize:25,cursor:'pointer' }} as={Link} to={'/r-resume'} >HAMEER KU</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             

            
              
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={'/login'} className=' active nav-link'>Sign up</Nav.Link>
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
       </Navbar>

    
    
      
     
      </>
    );
  }
  
  export default NavContact;