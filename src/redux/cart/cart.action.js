import cartTypes from './cart.types';

const toggleCartHidden = () => ({
    type: cartTypes.TOGGLE_HIDDEN_CART
})

export const addItem = item => ({
    type: cartTypes.ADD_ITEM,
    payload: item
})

export default toggleCartHidden;