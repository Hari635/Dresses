import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { Badge } from '@material-ui/core';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { selectCartItemsCount,selectHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
const CartIcon = (props) => {
    console.log(props);
    return (
        <div>
            <div onClick={props.toggleCartHidden}>
                <Badge badgeContent={props.itemCount} color="secondary">
                    <ShoppingIcon />
                </Badge>
            </div>
            <CartDropdown show={!props.hidden} onHide={() => props.toggleCartHidden()} />

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

const mapStateToProps=createStructuredSelector(
    {
      hidden:selectHidden,
      itemCount:selectCartItemsCount
    }
  )

  

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)