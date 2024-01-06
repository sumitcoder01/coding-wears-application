export let cart = [];

export const addToCart = (item) => {
    let found = false;
    let myCart = cart;
    for (let index = 0; index < myCart.length; index++) {
        if (myCart[index].id === item.id) {
            myCart[index].quantity += item.quantity;
            found = true;
            break;
        }
    }
    if (!found) cart = [...myCart, item];
    else cart = myCart;
    saveCart();
}

export const removeFromCart = (id) => {
    cart = cart.filter(item => item.id !== id);
    saveCart();
}

export const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const getCart = () => {
    try {
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
        }  
    } catch (error) {
        console.log(error);
        localStorage.clear();
    }
}
export const clearCart = () => {
    localStorage.removeItem('cart');
    cart = [];
}