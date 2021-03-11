import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Grid from "@material-ui/core/Grid";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'



const MenuItemSmall = ({title,imageUrl,linkUrl}) => {
   
     return ( 
        <Grid item xs={12} sm={6} lg={4}>
    <Card style={{ width: '90%' }}>
         <Card.Img variant="top" src={imageUrl} />
         <Card.Body>
             <Card.Title>{title.toUpperCase()}</Card.Title>
             <Link to={linkUrl}>
             <Button variant="primary">Buy</Button>
             </Link>
         </Card.Body>
     </Card>
    </Grid>
    )
}

export default withRouter(MenuItemSmall)