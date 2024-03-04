var valueOfCart = document.getElementById("cart-value");
var button = document.getElementById("cart");
var addTheButton = document.getElementsByClassName("button");
var list = [
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

function finalCart() {
  let a = 0;
  for (index = 0; index < list.length; index++) {
    a = a + list[index].quantity;
  }
  valueOfCart.innerHTML = a;
}

for (let i = 0; i < addTheButton.length; i++) {
  addTheButton[i].onclick = (function(index) {
    return function(e) {
      list[index].quantity++;
      finalCart();
    };
  })(i);
}


var totalDollars = 0;
var totalNoOfCents = 0;
function finalPrice() {
  let totalInCents = 0;

  let index = 0;
while (index < list.length) {
  totalInCents =
    totalInCents +
    list[index].quantity * (list[index].dollars * 100 + list[index].cents);
  index++;
}
  totalNoOfCents = totalInCents % 100;
  totalDollars = Math.floor(totalInCents / 100);
}
button.onclick = () => {
  finalPrice();
  let index = 0;
while (index < list.length) {
  if (list[index].quantity !== 0) {
    console.log("Item name: " + list[index].name + " - Quantity: " + list[index].quantity);
  }
  index++;
}
  console.log("The total amount is " + totalDollars + "$ and " + totalNoOfCents + " cents");
};
