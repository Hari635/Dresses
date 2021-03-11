import React from 'react'
import { Avatar } from '@material-ui/core';
import {connect} from 'react-redux'
import { clearItemFromCart,addItems,removeItem } from "../../redux/cart/cart.action";
import { ReactComponent as Close } from "../../assets/close.svg";
import { ReactComponent as Add } from "../../assets/add.svg";
import { ReactComponent as Remove } from "../../assets/remove.svg";

const checkoutItem = ({cartItem,clearItem,addItem,removeItem}) => {
    const {name,imageUrl,price,quantity}=cartItem
    return (
        <tr>
            <td><Avatar  alt={name} src={imageUrl} /></td>
            <td>{name}</td>
            <td><Add style={{backgroundColor:'white'}} onClick={()=>addItem(cartItem)}/> {quantity} <Remove style={{backgroundColor:'white'}} onClick={()=>removeItem(cartItem)}  /></td>
            <td>{price}</td>
            <td><Close style={{backgroundColor:'white'}} onClick={()=>clearItem(cartItem)}/></td>
        </tr>

    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
      clearItem:(item)=>dispatch(clearItemFromCart(item)),
      addItem:(item)=>dispatch(addItems(item)),
      removeItem:(item)=>dispatch(removeItem(item))
    }
  }

export default  connect(null,mapDispatchToProps)(checkoutItem)