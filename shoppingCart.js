// Beginning of shoppingcart class
class ShoppingCart {
    // Constructor to declare cart object
    constructor() {
        this.cart = {};
    }

    // Adds items to cart under certain conditions; increases value if items are already in cart
    addToCart(item, quantity) {
        if(typeof item != 'string' || quantity < 1 || typeof quantity != 'number') {
            throw new Error();
        }
        if(!this.cart[item]) {
            this.cart[item] = quantity;
        } else {
            this.cart[item] += quantity;
        }
        return this.cart[item];
    }

    // Removes items from cart under certain conditions; removes key from object if the final amount is 0
    removeFromCart(item, quantity) {
        if(typeof item != 'string' || quantity < 1 || typeof quantity != 'number' || !this.cart[item] || quantity > this.cart[item]) {
            throw new Error();
        }

        if(this.cart[item]) {
            this.cart[item] -= quantity;
        }
        if(this.cart[item] == 0) {
            delete this.cart.item;
            return 0;
        }
        return this.cart[item];
    }

    // Calculate the total of all the items
    calculateTotal() {
        let sum = 0;
        let arr = Object.values(this.cart);
        for(let i of arr) {
            sum += i;
        }
        return sum;
    }

    // Shows the contents of the cart
    showCart() {
        for(let i in this.cart) {
            console.log(i + ": " + this.cart[i]);
        }
    }
}

module.exports = {ShoppingCart};