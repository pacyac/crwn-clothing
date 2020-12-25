export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    //if the items exist in the cart increase the quantity
    if (existingCartItem) {
        return cartItems.map(items => items.id === cartItemToAdd.id ? {...items,quantity: items.quantity + 1} : items)
    }

    return [...cartItems, {...cartItemToAdd,quantity: 1}];
}

export const removeItemFromCart = (cartItems,cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);

    if (existingCartItem.quantity == 1) {
        return cartItems.filter(cartitem => cartitem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartitem => cartitem.id === cartItemToRemove.id ? {...cartitem,quantity: cartitem.quantity -1 } : cartitem);
}