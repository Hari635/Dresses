import { React } from "react";
import Table from 'react-bootstrap/Table'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems,selectCartTotal } from "../redux/cart/cart.selectors";
import { Container } from "react-bootstrap";
import CheckoutItem from "../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../components/stripe-button/stripe-button.components";


const CheckoutPage=({cartItems,total})=>{
    return(
        <Container>
        <br/>
        <br/>
        <br/>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Product</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(cartItem=>(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </tbody>
      </Table>
      <h1>TOTAL:-{total}</h1>
      <h2>*please use the following test credit card for payments *</h2>
      <br/>
      <h3>4242 4242 4242 4242 - Exp:01/55 - CVV:123 </h3>
      {total!=0?
      <StripeCheckoutButton price={total} />:
      null}
      </Container>
    )
}
const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)