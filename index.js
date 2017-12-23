var cart = [];

function getCart(item) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor(Math.random()*100.00)};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log("Your cart is empty.");
  } else if (cart.length === 1) {
    console.log(`In your cart, you have $`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
