// Create a JavaScript program that manages a shopping cart using object methods

// Define a cart object with properties such as items (an array), total price, and discount
// Add methods to
// Add an item to the cart, including name, price, and quantity
// Remove an item from the cart
// Calculate the total price of all items in the cart
// Apply a discount and update the total price
// Display the shopping cart details after each transaction
const cart = {
    items:[],
    totalPrice:0,
    discount:0,
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
        this.calculateTotal();
        this.displayCart();
    },
    removeItem(name) {
        this.items = this.items.filter(item => item.name !== name);
        this.calculateTotal();
        this.displayCart();
    },
    calculateTotal() {
        this.totalPrice = this.items.reduce((accum, item) => accum + (item.price * item.quantity), 0);
        this.totalPrice -= this.totalPrice * (this.discount / 100);
    },
    applyDiscount(percent) {
        this.discount = percent;
        this.calculateTotal();
        this.displayCart();
    },
    displayCart() {
        console.log("cart details:");
        this.items.forEach(item => {
            console.log(`${item.name} - ₹${item.price} x ${item.quantity}`);
        });
        console.log(`discount: ${this.discount}%`);
        console.log(`total price: ₹${this.totalPrice}\n`);
    }
};

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.removeItem("Mouse");
cart.applyDiscount(10);
cart.addItem("Keyboard", 1200, 1);
