
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import project1 from './Images/project1.png'
import project2 from './Images/project2.png'
const LatestProjects = () => {
  return (
    <>
    <Container className=' text-center'>
        <Row>
            <Col >
            <h1 style={{marginTop:80}} >Latest projects </h1>
            </Col>
        </Row>

    </Container>
   
        
        <Row className=' mt-3 text-center' >
            <Col md={6}   >
             <img style={{borderRadius:30}} className=' mx-2' width={400} height={300} src={project1} alt="project1" /> <br/>
             <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3'><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/mi-a36/">click here </a></button>
        
            </Col>
            <Col md={6}  >
    <img style={{borderRadius:30}} className=' mx-2' width={400} height={300}  src={project2} alt="project2" /> <br/>
     <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3' ><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/news/"> click here</a></button>
        
            </Col>
        </Row>
   
    </>
  


  )
}

export default LatestProjects
