import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
handleSubmit=async(event)=>{
    event.preventDefault()
    const { displayName,email,password,confirmPassword }=this.state
    if(password!==confirmPassword){
        console.log('helloooooooo-----------------');
        alert('error')
        return
    }
    try{
        const{user}=await auth.createUserWithEmailAndPassword(email,password)
        await createUserProfileDocument(user,{displayName})
        this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        })

    }catch(error){
        console.log(error);

    }
}

handelChange=(event)=>{
    const {name,value}= event.target;
    this.setState({[name]:value})
}
    render() {
        const {displayName,email,password,confirmPassword }=this.state
        return (
            <Container>
                <h2>I do not have a account</h2>
                <span>Sign up with your email and password</span>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control name='displayName' onChange={this.handelChange} type="text" placeholder="Enter name" value={displayName} />
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' onChange={this.handelChange} type="email" placeholder="Enter email" value={email} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' onChange={this.handelChange} type="password" placeholder="Password" value={password} />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name='confirmPassword' onChange={this.handelChange} type="password" placeholder="Confirm Password" value={confirmPassword} />
                </Form.Group>
                <Button   variant="primary" type="submit">
                        SignUp
  </Button>
 
            </Form>
            </Container>
        )
    }
}

export default SignUp