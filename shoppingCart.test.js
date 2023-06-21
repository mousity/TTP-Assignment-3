let {ShoppingCart} = require('./shoppingCart');
let cart = new ShoppingCart();

// Initial items in cart, more will be added during test cases
cart.addToCart('potato', 2);
cart.addToCart('potato', 2);
cart.addToCart('cheese', 2);
cart.addToCart('corn', 2);
cart.showCart();

// addToCart() testing section
describe(("Testing the addToCart() function of the ShoppingCart class"), () => {
    
    test(("addToCart('tomato', 4) => 4"), () => (expect(cart.addToCart('tomato', 4)).toBe(4)));                        // Adding a new items
    test(("addToCart(1, 1) => Error"), () => (expect(() => cart.addToCart(1, 1)).toThrow(Error)));                  // Wrong data types
    test(("addToCart('tomato', 'potato') => Error"), () => (expect(() => cart.addToCart('tomato', 'potato')).toThrow(Error)));
    test(("addToCart('tomato', -5) => Error"), () => (expect(() => cart.addToCart('tomato', -5)).toThrow(Error)));          // Adding a negative amount of items
    test(("addToCart('tomato', 4) => 8"), () => (expect(cart.addToCart('tomato', 4)).toBe(8)));                        // Adding an item already in the cart
    
})

// removeFromCart() testing section
describe(("Testing the removeFromCart() function of the ShoppingCart class"), () => {
    
    test(("removeFromCart('tomato', 4) => 4"), () => (expect(cart.removeFromCart('tomato', 4)).toBe(4)));                        // Removing an existing item
    test(("removeFromCart(1, 1) => Error"), () => (expect(() => cart.removeFromCart(1, 1)).toThrow(Error)));                  // Wrong data types
    test(("removeFromCart('tomato', 'potato') => Error"), () => (expect(() => cart.removeFromCart('tomato', 'potato')).toThrow(Error)));
    test(("removeFromCart('tomato', 50) => Error"), () => (expect(() => cart.removeFromCart('tomato', 50)).toThrow(Error)));          // Removing more than te existing quantity
    test(("removeFromCart('tomato', 4) => 0"), () => (expect(cart.removeFromCart('tomato', 4)).toBe(0)));                        // Adding an item already in the cart
    
})

// calculateTotal() testing section
describe(("Testing the calculateTotal() function of the ShoppingCart class"), () => {
    
    test(("calculateTotal() => 8"), () => (expect(cart.calculateTotal()).toBe(8)));                        // Calculate funct totals to quantity total of cart
})