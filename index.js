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

 // define cart
 var c = cart;

 //create dictionary
 var dict = {};
 //determine price
 var price = (Math.random() * 100) + 1;
 price = Math.floor(price);
 //assign item and price to dictionary
 dict = {[item] : price}
 //add dictionary to end of cart
 c.push(dict);

 // log message to console and return cart
 console.log(`${item} has been added to your cart.`);
 return c;
}

function viewCart() {
  // write your code here

  // if statement for empty cart string, else list items
  if (cart.length === 0) {
    console.log ("Your shopping cart is empty.");
  } else {
    var itemsInCart = "In your cart, you have";
    for (let i = 0; i < cart.length; i++) {
      var pair = cart[i];
      var item = Object.keys(pair);
      var price = pair[item];

      //Add 'and' if last iteration
      if (i + 1 === cart.length && cart.length > 1) {itemsInCart = itemsInCart.concat(' and');}

      //Add items
      itemsInCart = itemsInaaCart.concat(` ${item} at \$${price}`);
      //Add punctuation
       //punctuation = itemsInCart.concat(',')) ? (i + 1 === cart.length) : itemsInCart.concat('.');

       var punctuation = ((i + 1 !== cart.length && cart.length > 2) ? ',' : '');
       itemsInCart = itemsInCart.concat(punctuation);
    }
    itemsInCart = itemsInCart.concat('.');
    return itemsInCart;
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
