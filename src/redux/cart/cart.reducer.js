import cartTypes from './cart.types';
import {addItemToCart} from "./cart.utils";

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

        default:
            return state;
    }
}

export default cartReducer;