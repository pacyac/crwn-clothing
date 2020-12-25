import cartTypes from './cart.types';
import {addItemToCart,removeItemFromCart} from "./cart.utils";

const INIT_STATE = {
    hidden: true,
    cartItem: []
}

const cartReducer = (state = INIT_STATE,action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_HIDDEN_CART:
            return{
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.ADD_ITEM:
            return{
                ...state,
                cartItem: addItemToCart(state.cartItem,action.payload)
            }
        case cartTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItem: removeItemFromCart(state.cartItem,action.payload)
            }
        case cartTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItem: state.cartItem.filter(cartitem => cartitem.id !== action.payload.id)
            }

        default:
            return state;
    }
}

export default cartReducer;