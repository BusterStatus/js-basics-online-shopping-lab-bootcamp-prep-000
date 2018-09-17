var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)});
 return "${item} jas been added to your cart.";
}

function viewCart() {
  // write your code here
  var message = "In your cart, you have ";
  if (cart.length > 0) {
    for (i = 0; i < cart.length; i++) {
      var cartContents = cart[i][itemName] + " at " + cart[i][itemPrice];
      if (cart.length === i) {
        message = message + " and " + cartContents + ".";
      }
      else if (cart.length > i) {
        message = message + cartContents + ", ";
      }
      else {
        message = message + cartContents + ".";
      }
    }
  } else {
    "Your shopping cart is empty.";
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
