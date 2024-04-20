
import React from 'react'
import img1 from "./Images/profile image.jpg"
import {Container,Row,Col} from 'react-bootstrap';
const Home = () => {
  return (
    <>
   
     
   <div >
        <Container>
        <Row >
          <Col md={4} style={{marginTop:70}} className=' text-center'>
            <img src={img1} alt="img" className=' w-100' style={{borderRadius:200}}/>
            <div style={{fontWeight:500}}>
        <h2 >Contact</h2>
        <i className="bi bi-geo-alt h3 "></i>: Nellakoote, The Nilgiris, 643240  <br/>
        <i className="bi bi-telephone h3"></i> :8903382318  <br/>
        <i className="bi bi-envelope-at-fill h3"></i>:ameerku83@gmail.com
        </div>

         
          </Col>
          <Col md={8} style={{marginTop:70}} className=' text-center align-content-center' >
          <h2> FULL STACK WEB DEVELOPER</h2>
       <h3 >“Creative full stack developer with a strong history of project management and building applications.”</h3>

        
          </Col>
        </Row>
        </Container>
       </div>
       <Container className=' justify-content-center' >
     
       </Container>
    </>
  )
}

export default Home