// 1. Create a JavaScript class representing a bank account with private properties for the account holder's name and balance. Implement methods to deposit and withdraw funds, ensuring that the balance is updated securely. Use encapsulation to hide the internal details of the bank account and provide controlled access to its properties.

// class BankAccount {
//   #accountHolder;
//   #balance;
//   constructor(accountHolder, balance) {
//     this.#accountHolder = accountHolder;
//     this.#balance = balance;

//     this.getAccountHolder = () => {
//       return this.#accountHolder;
//     };

//     this.getBalance = function () {
//       return this.#balance;
//     };

//     this.deposit = (amount) => {
//       this.#balance += amount;
//     };

//     this.withdraw = (amount) => {
//       if (amount > this.#balance) {
//         throw new Error("Not enough money on your balance");
//       }
//       this.#balance -= amount;
//     };
//   }
// }

// const account = new BankAccount("temo", 100);

// console.log(account.getAccountHolder());

// console.log(account.getBalance());
// account.deposit(50);
// console.log(account.getBalance());
// try {
//   account.withdraw(1000);
// } catch (error) {
//   console.log(error.message);
// }

// console.log(account.getBalance());

/* 2.
Task: Online Shopping System
Create an Online Shopping System that consists of different classes to represent various entities in the system. Implement features such as products, shopping carts, users, and orders.


Product Class:
    Private properties:
        - productId (string): A unique identifier for each product.
        - productName (string): The name of the product.
        - price (number): The price of the product.
    Public methods:
        - getProductId(): Returns the product ID.
        - getProductName(): Returns the product name.
        - getPrice(): Returns the price.


ShoppingCart Class: 
    Private properties:
        - cartId (string): A unique identifier for each shopping cart.
        - items (array): An array to store the products added to the cart.
    Public methods:
        - getCartId(): Returns the cart ID.
        - addItem(product): Adds a product to the cart.
        - removeItem(product): Removes a product from the cart.
        - calculateTotal(): Calculates and returns the total price of items in the cart.  
        
User Class:
    Private properties:
        - userId (string): A unique identifier for each user.
        - username (string): The username of the user.
        - email (string): The email address of the user.
        - products(array): bought products
    Public methods:
        - getUserId(): Returns the user ID.
        - getUsername(): Returns the username.
        - getEmail(): Returns the email address.
        - getProducts(): Returs the products

Create function called order, that will be used to empty shopping cart and give the products to user

*/

class Product {
  #productId;
  #productName;
  #price;

  constructor(productId, productName, price) {
    this.#productId = productId;
    this.#productName = productName;
    this.#price = price;
  }

  getProductId() {
    return this.#productId;
  }

  getProductName() {
    return this.#productName;
  }

  getPrice() {
    return this.#price;
  }

  getProductInfo() {
    return {
      productId: this.#productId,
      productName: this.#productName,
      price: this.#price,
    };
  }
}

const product1 = new Product("1", "product1", 100);
const product2 = new Product("2", "product2", 200);
const product3 = new Product("3", "product3", 300);
const product4 = new Product("4", "product4", 400);

class ShoppingCart {
  #cartId;
  #items;

  constructor(cartId) {
    this.#cartId = cartId;
    this.#items = [];
  }

  getCartId() {
    return this.#cartId;
  }

  getItems() {
    return this.#items;
  }

  getShoppingCartInfo() {
    return this.#items.map((product) => product.getProductInfo());
  }

  addItem(product) {
    this.#items.push(product);
  }

  removeItem(product) {
    const index = this.#items.indexOf(product);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }

  calculateTotal() {
    return this.#items.reduce(
      (total, product) => total + product.getPrice(),
      0
    );
  }

  clear() {
    this.#items = [];
  }
}

const shoppingCart1 = new ShoppingCart("1");
// console.log(shoppingCart1.getItems());
shoppingCart1.addItem(product1);
shoppingCart1.addItem(product2);
shoppingCart1.addItem(product3);
shoppingCart1.addItem(product4);
shoppingCart1.removeItem(product1);
// console.log(shoppingCart1.getItems());
let mappedArr = shoppingCart1
  .getItems()
  .map((product) => product.getProductInfo());
// console.log(mappedArr);

class User {
  #userId;
  #username;
  #email;
  #products;

  constructor(userId, username, email) {
    this.#userId = userId;
    this.#username = username;
    this.#email = email;
    this.#products = [];
  }

  getUserId() {
    return this.#userId;
  }

  getUsername() {
    return this.#username;
  }

  getEmail() {
    return this.#email;
  }

  getProducts() {
    return this.#products;
  }

  getUserProductsInfo() {
    return this.#products.map((product) => product.getProductInfo());
  }

  orderProduct(product) {
    this.#products.push(product);
  }
}

const user1 = new User("1", "temo", "temo@gmail.com");

class Order {
  static order(user, shoppingCart) {
    shoppingCart.getItems().forEach((product) => {
      user.orderProduct(product);
    });

    shoppingCart.clear();
  }
}

console.log("shopping cart before", shoppingCart1.getShoppingCartInfo());
console.log("user products before", user1.getUserProductsInfo());

Order.order(user1, shoppingCart1);

console.log("user products after", user1.getUserProductsInfo());
console.log("shopping cart after", shoppingCart1.getShoppingCartInfo());
