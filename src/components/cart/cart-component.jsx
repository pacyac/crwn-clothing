import React from 'react';

import { ReactComponent as CartIcon } from '../../assets/11.2 shopping-bag.svg.svg';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import toggleCartHidden from '../../redux/cart/cart.action';
import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import "./cart-styles.scss";

const ShoppingIcon = ({toggleCartHidden,itemCount}) => (
<div className="cart-icon" onClick={toggleCartHidden}>
    <CartIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
</div>);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingIcon);