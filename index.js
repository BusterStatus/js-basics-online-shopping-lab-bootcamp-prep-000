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
 return item + " has been added to your cart.";
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
    message = "Your shopping cart is empty.";
  }
  return message;
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i]["itemPrice"];
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  if (cart.includes(item) === true) {
    for (i = 0; i < cart.length; i++) {
      if (item === cart[i][itemName]) {
      cart.splice(cart[i], 1);
      }
    }
    return cart;
  } else {
    return "That item is not in your cart.";
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } else {
    cart = [];
    var total = total();
    return "Your total cost is " + total() + ", which will be charged to the card " + cardNumber;
  }
}
