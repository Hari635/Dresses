import React from 'react'
import { Card,Button} from 'react-bootstrap'
import Grid from "@material-ui/core/Grid";
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'




const MenuItemLarge = ({title,imageUrl,linkUrl}) => {
   
     return ( 
        <Grid item xs={12} sm={6} lg={6}>
          <Card style={{ width: '100%', height: '100%' }}>
                    <Card.Img variant="top" src={imageUrl} style={{height:"70%"}} />
                    <Card.Body>
                        <Card.Title>{title.toUpperCase()}</Card.Title>
                        <Link to={linkUrl}>
                        <Button variant="primary">Buy </Button>
                        </Link>
                    </Card.Body>
                </Card>
        </Grid>
     )
}

export default withRouter(MenuItemLarge);