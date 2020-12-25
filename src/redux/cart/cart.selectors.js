import { createSelector } from 'reselect';

//the non memerozed input selector
const selectCart = state => state.cart;

//the memorized selector
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItem);

export const selectCartHidden = createSelector([selectCart], 
    cart => cart.hidden
    
    )

//the memorized selector
export const selectCartItemCount = createSelector([selectCartItems], 
    (cartItem) => cartItem.reduce((acculator,cartItem) => acculator + cartItem.quantity,0) 
    );

export const selectCartTotal = createSelector([selectCartItems],
    (cartItem) => cartItem.reduce((acculator,cartItem) => acculator + cartItem.quantity * cartItem.price,0) 
    )