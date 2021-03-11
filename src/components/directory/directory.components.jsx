import React from 'react'
import Grid from "@material-ui/core/Grid";
import MenuItemSmall from '../menu-item/menu-item-small.component'
import MenuItemLarge from '../menu-item/menu-item-large.component'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

// class Directory extends React.Component {
//     constructor() { we can use this also and also redux for display dummy data
//if you don't use redux then display dummy data in class components 
//beacuse class components has render function and constructor
//don't forget to extend the react.Component
//         super();
//         this.state = {
//             sections: [
//                 {
//                     title: 'hats',
//                     imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//                     id: 1,
//                     linkUrl: 'shop/hats'
//                 },
//                 {
//                     title: 'jackets',
//                     imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//                     id: 2,
//                     linkUrl: 'shop/jackets'
//                 },
//                 {
//                     title: 'sneakers',
//                     imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//                     id: 3,
//                     linkUrl: 'shop/sneakers'
//                 },
//                 {
//                     title: 'womens',
//                     imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
//                     size: 'large',
//                     id: 4,
//                     linkUrl: 'shop/womens'
//                 },
//                 {
//                     title: 'mens',
//                     imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
//                     size: 'large',
//                     id: 5,
//                     linkUrl: 'shop/mens'
//                 }
//             ]
//         }
//     }
//     render() {

const Directory=({ sections })=>{
       return(
        <Grid container spacing={3}>
            {
                sections.map(({id, ...otherSectionProps},ind)=>{
                    if(ind<3){
                        return(
                            <MenuItemSmall key={id} {...otherSectionProps} />
                        )

                    }else{
                        return(
                            <MenuItemLarge key={id} {...otherSectionProps} />
                        )
                    }
                    
                })
            }
            
        </Grid>
       )
        }

const mapStateToProps=createStructuredSelector({
    sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory)