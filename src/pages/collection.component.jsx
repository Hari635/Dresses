import React from "react";
import { connect } from "react-redux";
import {Container} from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { selectCollection } from "../redux/shop/shop.selector";
import CollectionItems from "../components/collection-item/collectionItem.components";
const CollectionPage=({collection})=>{
    const {title,items }=collection
    console.log('helloo---',items)
    return(
        <Container maxWidth='md' >
            <h2>{title}</h2>
            <Grid container spacing={3}>
            {items.map((item)=>(
                <CollectionItems key={item.id} item={item} />
            ))}
            </Grid>
            
       </Container>    )
}
//we can pass argument not only in mapdispatchtoprops but also
//mapstatetoprops like below in below the argument is ownProps
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)