import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.action";



const CollectionItems = ({item,addItems}) => {
    console.log('hello there---',item)
   
     return ( 
        
        <Grid item xs={12} sm={6} lg={4}>
    <Card style={{ width: '90%' }}>
         <Card.Img variant="top" src={item.imageUrl} />
         <Card.Body>
             <Card.Title>{item.name}</Card.Title>
             <Button onClick={()=>addItems(item)}  variant="primary">Buy</Button>
             
         </Card.Body>
     </Card>
    </Grid>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
      addItems:(item)=>dispatch(addItems(item))
    }
  }
  
  export default connect(null,mapDispatchToProps)(CollectionItems)
