import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import "./cart-dropdown.styles.scss";

import CustomButton from '../custom-button/custom-button.component';
import CartITem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import toggleCartHidden from '../../redux/cart/cart.action';

const CartDropDown = ({cartItem,history,dispatch}) => (<div className="cart-dropdown">
        <div className="cart-items">
            {cartItem.length ? cartItem.map(item => (<CartITem key={item.id} item={item} />)) : <span className="empty-message">Your cart is empty</span>}
        </div>

        <CustomButton onClick={() =>{ 
           history.push('/checkout');
           dispatch(toggleCartHidden())
        }
        }> Checkout</CustomButton>
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItem: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));