// var cartValue = document.getElementById("cart-value");
// var cartButton = document.getElementById("cart");

// var addButtons = document.getElementsByClassName("button");

// var items = [
//   {
//     name: "This was our pact",
//     quantity: 0,
//     dollars: 7,
//     cents: 49,
//   },
//   {
//     name: "The famous five",  
//     quantity: 0,
//     dollars: 4,
//     cents: 59,
//   },
//   {
//     name: "Matilda",
//     quantity: 0,
//     dollars: 6,
//     cents: 80,
//   },
//   {
//     name: "Harry Potter",
//     quantity: 0,
//     dollars: 10,
//     cents: 0,
//   },
//   {
//     name: "For Young Readers",
//     quantity: 0,
//     dollars: 7,
//     cents: 29,
//   },
//   {
//     name: "Wimpy Kid - DIY",
//     quantity: 0,
//     dollars: 4,
//     cents: 99,
//   },
//   {
//     name: "Dart Board",
//     quantity: 0,
//     dollars: 17,
//     cents: 49,
//   },
//   {
//     name: "Connect Four",
//     quantity: 0,
//     dollars: 19,
//     cents: 99,
//   },
//   {
//     name: "Jenga",
//     quantity: 0,
//     dollars: 20,
//     cents: 99,
//   },
//   {
//     name: "Monopoly",
//     quantity: 0,
//     dollars: 19,
//     cents: 49,
//   },
//   {
//     name: "Bookmarks",
//     quantity: 0,
//     dollars: 12,
//     cents: 49,
//   },
//   {
//     name: "Birthday Card",
//     quantity: 0,
//     dollars: 12,
//     cents: 49,
//   },
//   {
//     name: "Stuffed toys",
//     quantity: 0,
//     dollars: 15,
//     cents: 99,
//   },
//   {
//     name: "Dream catcher drawing",
//     quantity: 0,
//     dollars: 18,
//     cents: 49,
//   },
// ];

// function updateCart() {
//   let cart = 0;
//   for (index = 0; index < items.length; index++) {
//     cart = cart + items[index].quantity;
//   }
//   cartValue.innerHTML = cart; 
// }

// for (let i = 0; i < addButtons.length; i++) {
//   addButtons[i].onclick = (e) => {
//     items[i].quantity++;
//     updateCart();
//   };
// }

// var finalDollars = 0;
// var finalCents = 0;

// function updatePrice() {
//   let totalPriceInCents = 0;

//   for (index = 0; index < items.length; index++) {
//     totalPriceInCents =
//       totalPriceInCents +
//       items[index].quantity * (items[index].dollars * 100 + items[index].cents);
//   }
//   finalDollars = Math.floor(totalPriceInCents / 100);
//   finalCents = totalPriceInCents % 100;
// }


// cartButton.onclick = () => {
//   updatePrice();


//   for (let index = 0; index < items.length; index++) {
//     if (items[index].quantity != 0) {
//       console.log(
//         "Item name: " +
//           items[index].name +
//           " - Quantity: " +
//           items[index].quantity
//       );
//     }
//   }

//   console.log(
//     "The total amount is " + finalDollars + "$ and " + finalCents + " cents"
//   );
// };


// Different implementation for shopping cart functionality

const cartValueElement = document.getElementById("cart-value");
const cartButtonElement = document.getElementById("cart");
const addButtonElements = document.querySelectorAll(".button");

const products = [
  {
        name: "This was our pact",
        quantity: 0,
        dollars: 7,
        cents: 49,
      },
      {
        name: "The famous five",  
        quantity: 0,
        dollars: 4,
        cents: 59,
      },
      {
        name: "Matilda",
        quantity: 0,
        dollars: 6,
        cents: 80,
      },
      {
        name: "Harry Potter",
        quantity: 0,
        dollars: 10,
        cents: 0,
      },
      {
        name: "For Young Readers",
        quantity: 0,
        dollars: 7,
        cents: 29,
      },
      {
        name: "Wimpy Kid - DIY",
        quantity: 0,
        dollars: 4,
        cents: 99,
      },
      {
        name: "Dart Board",
        quantity: 0,
        dollars: 17,
        cents: 49,
      },
      {
        name: "Connect Four",
        quantity: 0,
        dollars: 19,
        cents: 99,
      },
      {
        name: "Jenga",
        quantity: 0,
        dollars: 20,
        cents: 99,
      },
      {
        name: "Monopoly",
        quantity: 0,
        dollars: 19,
        cents: 49,
      },
      {
        name: "Bookmarks",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Birthday Card",
        quantity: 0,
        dollars: 12,
        cents: 49,
      },
      {
        name: "Stuffed toys",
        quantity: 0,
        dollars: 15,
        cents: 99,
      },
      {
        name: "Dream catcher drawing",
        quantity: 0,
        dollars: 18,
        cents: 49,
      },

];

function updateCart() {
  const cartTotal = products.reduce((total, product) => total + product.quantity, 0);
  cartValueElement.innerHTML = cartTotal;
}

addButtonElements.forEach((button, index) => {
  button.addEventListener("click", () => {
    products[index].quantity++;
    updateCart();
  });
});

function calculateTotalPrice() {
  const totalPrice = products.reduce((total, product) => total + product.quantity * product.price, 0);
  return totalPrice.toFixed(2);
}

cartButtonElement.addEventListener("click", () => {
  const cartItems = products.filter(product => product.quantity > 0);
  
  cartItems.forEach(item => {
    console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
  });

  const totalPrice = calculateTotalPrice();
  console.log(`The total amount is $${totalPrice}`);
});
