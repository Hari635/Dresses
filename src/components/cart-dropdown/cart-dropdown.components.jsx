import React from "react";

import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartItem from "../cart-item/cart-item.components";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

const CartDropdown=(props)=>{
  console.log(props.cartItems);
    return(
        <Modal {...props} scrollable={true}  aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        {
          props.cartItems.map((cartItem)=>{
            return(<CartItem key={cartItem.id} items={cartItem} />)
          })
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>{props.history.push('/checkout')
        props.toggleCartHidden()
        }
          }>GO TO CHECKOUT</Button>
      </Modal.Footer>
    </Modal>
    )
}
const mapStateToProps=createStructuredSelector(
  {
    cartItems:selectCartItems
  }
)
const mapDispatchToProps=(dispatch)=>{
    return{
        toggleCartHidden:()=>dispatch(toggleCartHidden())
    }}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropdown))