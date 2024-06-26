import React from 'react'
import {Row,Col} from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
  return (
    <Row >
        <Col  md={12} className=' text-center bg-warning  my-2 w-100'> 
        <span style={{color:'black'}} > © 2024, Bold Limited. All rights reserved  </span> 
      <div>
        <a href=''  ><i className="fa-brands fa-instagram h4 text-white "  ></i></a> 
      <a href='' > <i className="fa-brands fa-linkedin h4 text-white ms-2"></i></a>
      <a href="https://github.com/ameerku83"><i className="fa-brands fa-github h4 text-white ms-2"></i></a>
      </div>
        </Col>
    </Row>
  )
}

export default Footer