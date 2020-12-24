export const addItemToCart = (cartItems,cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);

    //if the items exist in the cart increase the quantity
    if (existingCartItem) {
        return cartItems.map(items => items.id === cartItemToAdd.id ? {...items,quantity: items.quantity + 1} : items)
    }

    return [...cartItems, {...cartItemToAdd,quantity: 1}];
}