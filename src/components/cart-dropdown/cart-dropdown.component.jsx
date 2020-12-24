import React from 'react';
import { connect } from 'react-redux';

import "./cart-dropdown.styles.scss";

import CustomButton from '../custom-button/custom-button.component';
import CartITem from '../cart-item/cart-item.component'

const CartDropDown = ({cartItem}) => (<div className="cart-dropdown">
        <div className="cart-items">
            {cartItem.map(item => (<CartITem key={item.id} item={item} />))}
        </div>

        <CustomButton> Checkout</CustomButton>
        
    </div>
);

const mapStateToProps = ({cart: {cartItem}}) => ({
    cartItem
})

export default connect(mapStateToProps)(CartDropDown);