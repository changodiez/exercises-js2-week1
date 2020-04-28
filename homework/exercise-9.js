/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 1,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 0
};
var product2 = {
  id: 2,
  name: "Watch Rocker",
  price: 9.99,
  stock: 2
};
var product3 = {
  id: 3,
  name: "Watch Jamming",
  price: 6.39,
  stock: 4
};
var product4 = {
  id: 4,
  name: "Rocker Rush",
  price: 4.99,
  stock: 6
};

products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: [],
};

function addToShoppingCart(id) {
  //Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
  //the function will add the product to the selectedProduct list, and add the price to the totalPrice
  for (i = 0; i < products.length; i++) {

    if (id === products[i].id) {
      if (products[i].stock > 0) {
        shoppingCart.totalPrice = shoppingCart.totalPrice += products[i].price,
          shoppingCart.selectedProducts.push(products[i]),
          products[i].stock--;
      } else {console.log("Product out of stock")}
    }
  }


}

function removeFromShoppingCart(id) {
  for (i = 0; i < shoppingCart.selectedProducts.length; i++) {
    if (id === shoppingCart.selectedProducts[i].id) {
      shoppingCart.totalPrice = shoppingCart.totalPrice -= shoppingCart.selectedProducts[i].price,
        shoppingCart.selectedProducts.splice(i, 1),
        products[i].stock++;
    }
  }
}

function getProduct(id) {
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    if (product.id === id) {
      return product;
    }
  }
}

function shop() {
  var selectedProducts = shoppingCart.selectedProducts;
  // Loop through all the selected products
  for (var i = 0; i < selectedProducts.length; i++) {
    var selectedProduct = selectedProducts[i];
    // Get the product from the products array using the id
    var product = getProduct(selectedProduct.id);
    // Decrease the stock by 1
    product.stock--;
  }
  // Reset the shopping cart variables because it's now empty
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;

}

//results
addToShoppingCart(1);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log(shoppingCart.selectedProducts)
addToShoppingCart(2);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
addToShoppingCart(4);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log(shoppingCart.selectedProducts)
removeFromShoppingCart(2);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log(shoppingCart.selectedProducts)
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));