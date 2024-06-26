
import React from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import project1 from './Images/project1.png'
import project2 from './Images/project2.png'
import project3 from "./Images/project3.png"
import project4 from "./Images/project4.png"
const LatestProjects = () => {
  return (
    <>
    <Container className=' text-center' id='project'>
        <Row>
            <Col >
            <h1 style={{marginTop:80}} >Latest projects </h1>
            </Col>
        </Row>

    </Container>
   
        
        <Row className=' mt-3 text-center ' >
            <Col lg={3}  className='shadow'  >
             <img style={{borderRadius:20}} className=' ' width={260}  src={project1} alt="project1" /> <br/>
             <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3'><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/mi-a33/">click here </a></button>
        
            </Col>
            <Col lg={3} className='shadow' >
    <img style={{borderRadius:30}} className=' ' width={260}  src={project2} alt="project2" /> <br/>
     <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3' ><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/news/"> click here</a></button>
        
            </Col>
            <Col lg={3} className='shadow'  >
             <img style={{borderRadius:30,objectFit:'contain'}} className=' ' width={260} height={120} src={project3} alt="project1" /> <br/>
             <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3'><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/project-calculator/">click here </a></button>
        
            </Col>
            <Col lg={3} className='shadow' >
    <img style={{borderRadius:30,objectFit:'contain'}} className=' ' width={260}  height={120}  src={project4} alt="project2" /> <br/>
     <button style={{borderRadius:30,backgroundColor:'black'}} className=' my-3' ><a style={{textDecoration:'none',color:'white'}} href="https://ameerku83.github.io/project-clock/"> click here</a></button>
        
            </Col>
        </Row>
              
      
    </>
  


  )
}

export default LatestProjects
