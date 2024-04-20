import React from 'react'
import {Row,Col} from 'react-bootstrap';
import "./Footer.css";
const Footer = () => {
  return (
    <Row >
        <Col  md={12} className=' text-center bg-black text-white my-4 py-3'> 
        <span > © 2024, Bold Limited. All rights reserved  </span> 
      <div>
        <a href=''  ><i className="fa-brands fa-instagram h3 text-white "  ></i></a> 
      <a href='' > <i className="fa-brands fa-telegram h3 text-white ms-2"></i></a>
      <a href="https://github.com/ameerku83"><i className="fa-brands fa-github h3 text-white ms-2"></i></a>
      </div>
        </Col>
    </Row>
  )
}

export default Footer