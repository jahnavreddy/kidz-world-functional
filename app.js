const cartValue = document.getElementById("cart-value");
const cartButton = document.getElementById("cart");
const addButtons = document.querySelectorAll(".button");

const items = [
  { name: "This was our pact", quantity: 0, price: 7.49 },
  { name: "The famous five", quantity: 0, price: 4.59 },
  { name: "Matilda", quantity: 0, price: 6.80 },
  { name: "Harry Potter", quantity: 0, price: 10.00 },
  { name: "For Young Readers", quantity: 0, price: 7.29 },
  { name: "Wimpy Kid - DIY", quantity: 0, price: 4.99 },
  { name: "Dart Board", quantity: 0, price: 17.49 },
  { name: "Connect Four", quantity: 0, price: 19.99 },
  { name: "Jenga", quantity: 0, price: 20.99 },
  { name: "Monopoly", quantity: 0, price: 19.49 },
  { name: "Bookmarks", quantity: 0, price: 12.49 },
  { name: "Birthday Card", quantity: 0, price: 12.49 },
  { name: "Stuffed toys", quantity: 0, price: 15.99 },
  { name: "Dream catcher drawing", quantity: 0, price: 18.49 }
];

function updateCart() {
  const cartTotal = items.reduce((total, item) => total + item.quantity, 0);
  cartValue.textContent = cartTotal;
}

addButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    items[index].quantity++;
    updateCart();
  });
});

function updatePrice() {
  let totalPrice = items.reduce((total, item) => total + item.quantity * item.price, 0);
  return totalPrice.toFixed(2);
}

function createWhatsAppLink() {
  let message = "Order details:%0A";
  items.forEach(item => {
    if (item.quantity > 0) {
      message += `${item.name} - ${item.quantity}%0A`;
    }
  });
  const totalPrice = updatePrice();
  message += `Total Price: $${totalPrice}`;
  return `https://api.whatsapp.com/send?phone=919000000000&text=${message}`;
}

cartButton.addEventListener("click", () => {
  const whatsappLink = createWhatsAppLink();
  window.open(whatsappLink, "_blank");

  items.forEach(item => {
    if (item.quantity > 0) {
      console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    }
  });

  console.log(`The total amount is $${updatePrice()}`);
});
