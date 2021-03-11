import React from "react";
import SignIn from "../components/sign-in/sign-in.component";
import SignUp from "../components/sign-up/sign-up.components";
import Container from 'react-bootstrap/Container'
import { Row,Col } from "react-bootstrap";


const SignInAndSignUpPage=()=>{
    return(
    <Container>
        <Row >
    <Col sm={12} md={6} lg={6}><SignIn/></Col>
    <Col sm={12} md={6} lg={6} > <SignUp/></Col>
  </Row>
        
       
      </Container>
    )
}

export default SignInAndSignUpPage