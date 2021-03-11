import React from 'react'
import CollectionsOverview from '../components/collections-overview/collections-overview.components'
import { Route } from "react-router-dom";
import CollectionPage from "./collection.component";
//  class ShopPage extends React.Component{
// similar comment in directory components checkout directory components
//      constructor(props){
//          super(props)
//          this.state={
//              collections:SHOP_DATA
//          }
//      }

//      render(){
//          const {collections}=this.state
const ShopPage=({ match })=>{
         return(
             <div>
                 <Route exact path={`${match.path}`} component={CollectionsOverview}  />
                 <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
             </div>
         )
     }

 export default ShopPage