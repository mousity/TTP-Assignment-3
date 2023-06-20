class ShoppingCart {
    constructor() {
        this.cart = {};
    }

    addToCart(item, quantity) {
        if(typeof item != 'string' || quantity < 1) {
            return false;
        }
        if(!this.cart.item) {
            this.cart[item] = quantity;
        } else {
            this.cart[item] += quantity;
        }
        return true;
    }

    removeFromCart(item, quantity) {
        if(this.cart[item]) {
            this.cart[item] -= quantity;
        }
    }

    calculateTotal() {
        let sum = 0;
        arr = Object.values(cart);
        for(let i of arr) {
            sum += i;
        }
        return sum;
    }

    showCart() {
        for(let i in this.cart) {
            console.log(i);
        }
    }
}

module.exports = {ShoppingCart};