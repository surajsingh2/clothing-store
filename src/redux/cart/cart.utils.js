export const addItemToCart = (cartItems, cartItemsToAdd) => {
    const existingCartItems = cartItems.find(
        cartItem => cartItem.id === cartItemsToAdd.id
    );

    if (existingCartItems) {
        return cartItems.map(cartItem => 
            cartItem.id === cartItemsToAdd.id ? {
                ...cartItem, quantity: cartItem.quantity + 1 
            } : cartItem
            )
    }

    else {
        return [...cartItems, { ...cartItemsToAdd, quantity: 1}]
    }
}