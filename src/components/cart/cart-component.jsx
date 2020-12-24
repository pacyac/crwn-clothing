import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import {connect} from 'react-redux';

import toggleCartHidden from '../../redux/cart/cart.action'

import "./cart-styles.scss";

const ShoppingIcon = ({toggleCartHidden}) => (
<div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">0</span>
</div>);

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(ShoppingIcon);