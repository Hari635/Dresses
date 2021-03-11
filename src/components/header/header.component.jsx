import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.components";
import { Container } from "react-bootstrap";
import { createStructuredSelector } from "reselect";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header=({ currentUser,hidden})=>{

return(<Container>
    <Navbar bg="dark" variant="dark">
      <Link to='/'>   
        <Navbar.Brand >
          <Logo/>
        </Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
     
    </Nav>
    <Nav className="justify-content-end">
    <Nav.Item>
    <Nav.Link >
      <Link style={{textDecoration:'none',color:'white'}} to='/shop'>SHOP</Link>
    </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link>
      <Link style={{textDecoration:'none',color:'white'}} to='/shop'>CONTACT</Link>
      </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
      {currentUser ?(
        <Link style={{textDecoration:'none',color:'white'}} onClick={()=>auth.signOut()}>Sign Out</Link>
      ):(
        <Link style={{textDecoration:'none',color:'white'}} to='/signin'> Sign In</Link>
      )
      }
      </Nav.Link>
    </Nav.Item>
    <Link>   
        <Navbar.Brand >
          <CartIcon/>
        </Navbar.Brand>
      </Link>
  </Nav>
  
  </Navbar>
  
  </Container>
)

}

const mapStateToProps=createStructuredSelector(
  {
    currentUser:selectCurrentUser,
    hidden:selectHidden
  })


export default connect(mapStateToProps)(Header)