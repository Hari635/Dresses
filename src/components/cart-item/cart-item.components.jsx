import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import { Avatar } from '@material-ui/core';


const CartItem=({items:{name,price,quantity,imageUrl}})=>{
  const im=`${imageUrl}/171x180`
    return(
        <Container>
          <Row>
            <Col xs={6} md={4}>
            <Avatar alt={name} src={imageUrl} />
            </Col>
            <Col xs={6} md={4}>
              {quantity}X rs{price}
            </Col>
            <Col xs={6} md={4}>
              {name}
            </Col>
          </Row>
        </Container>
    )
}



export default CartItem