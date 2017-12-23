var cart = [];

function getCart(item) {
  return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var newItem = {[item]: Math.floor(Math.random()*100)};
  cart.push(newItem);
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }  
  
  else {
    var incartItems = [];
    for (let i = 0; i < cart.length; i++) {
      let item = Object.keys(cart[i])[0];
      let price = cart[i][item];
      incartItems.push(`${item} at $${price}`);
    }
  } if 
    (incartItems.length == 1) {incartItems;
     } else if (incartItems.length == 2) {incartItems = incartItems.join(' and ');
     } else {
       cartContents[cartContents.length - 1] = ', and '.concat(cartContents[cartContents.length - 1]);
       cartContents = cartContents.splice(0, cartContents.length - 1).join(', ') + cartContents[cartContents.length - 1];
     }
   }
   console.log(`In your cart, you have ${cartContents}.`);
    
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
