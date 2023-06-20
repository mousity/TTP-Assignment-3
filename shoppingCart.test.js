let {ShoppingCart} = require('./shoppingCart');
let cart = new ShoppingCart();

cart.addToCart('potato', 2);
    cart.showCart();


describe(("Testing the various functions of the ShoppingCart class"), () => {
    
    test(("test"), () => (expect(cart.addToCart('tomato', 1)).toBe(true)));

})