


import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./Login.css"

function Login() {

const [contactFormData,setContactFormData]=useState({
  fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
})
const [errors,seterror]=useState({
  fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
})

function validateForm(){
  let valid=true
  let newError={
    fullname:"",
  email:"",
  phone:"",
  password:"",
  passwordmatch:""
  }
  if(!contactFormData.fullname.trim()){
    newError.fullname="please enter your name!"
    valid=false
  }
  if(!contactFormData.email.trim()){
    newError.email="email reaquired"
    valid=false
  }else if(!/\S+@\S+\.\S+/.test(contactFormData.email)){
    newError.email="enter valid email"
    valid=false

  }
  if(!contactFormData.phone.trim()){
    newError.phone="enter phone "
    valid=false
  }else if(!/^\d{10}$/.test(contactFormData.phone)){
    newError.phone="phone number must be 10 digit"
    valid=false

  }
  if( !/^(?=.*[A-Z])(?=.*[a-z])[a-zA-Z]{8,}/.test(contactFormData.password) ){
    newError.password="password must be 8 character and 1 capital letter "
    valid=false
  }
  if(contactFormData.passwordmatch!==contactFormData.password){
    newError.passwordmatch=" enter the same password "
    valid=false

  }

  seterror(newError)
  return valid
}

const handleSubmit= (e)=>{
  e.preventDefault()
  if(validateForm()){

  }

}
const onChangeHandler = (e)=>{

  const {name,value}= e.target
  setContactFormData({...contactFormData,[name]:value})
}

const[show,setShow]=useState(false)
// const HandleShow=()=>{
//   setShow(!show)
// }

  return (
  
  <Container>
    <Row className=' text-center '>
        <Col>
        <h2>
            Log in
        </h2>
        </Col>
    </Row>
    <Row className='justify-content-center'>
      <Col md={6} >
      <div className='shadow bg-white p-4 m-4' style={{borderRadius:10}}>
        <h3 className='text-center' >Sign up</h3>
        
        <form className='form-container my-3' onSubmit={handleSubmit}>
        <span> {errors?.fullname ?? ''} </span>
          <input type="text" name="fullname" placeholder='please enter your fullname' onChange={onChangeHandler}/>
          <span> {errors?.email ?? ''} </span>
          <input type="email" name="email" placeholder='please enter your email' onChange={onChangeHandler}/>
          <span > {errors?.phone ?? ''} </span>
          <input type="number" name="phone" placeholder='please enter phone' onChange={onChangeHandler} />
          <span> {errors?.password ?? ''} </span>
          <input type={show?"text":"password"} name='password' placeholder='enter your password' onChange={onChangeHandler}/>  <label onClick={()=>setShow(!show)}> {show?"Hide":"Show"}</label>
         
            <input type={show?"text":"password"} name='passwordmatch' placeholder='conform your password' onChange={onChangeHandler}/>
            <span> {errors?.passwordmatch ?? ''} </span>
            <button className='btn btn-primery'>Sign up</button>
        </form>
      </div>
      </Col>
    </Row>
  </Container>
    
    
   

  )
}

export default Login