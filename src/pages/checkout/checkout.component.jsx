import React from 'react';
import "./checkout.styles.scss";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems,selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOutPage = ({cartItems,total}) => (
<div className='checkout-page'>
   <div className="checkout-header">
       <div className="header-block">
           <span>Product</span>
       </div>

       <div className="header-block">
           <span>Quantity</span>
       </div>

       <div className="header-block">
           <span>Price</span>
       </div>

       <div className="header-block">
           <span>Remove</span>
       </div>
   </div>

   {
       cartItems.map(cartitem => <CheckoutItem key={cartitem.id} cartItem={cartitem} /> )
   }

   <div className="total"><span>Total: ${total}</span></div>
</div>)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);