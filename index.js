const state = {
  items: [
    {
      id: "001-beetroot",
      name: "beetroot",
      price: 0.35,
    },
    {
      id: "002-carrot",
      name: "carrot",
      price: 0.35,
    },
    {
      id: "003-apple",
      name: "apple",
      price: 0.35,
    },
    {
      id: "004-apricot",
      name: "apricot",
      price: 0.35,
    },
    {
      id: "005-avocado",
      name: "avocado",
      price: 0.35,
    },
    {
      id: "006-bananas",
      name: "bananas",
      price: 0.35,
    },
    {
      id: "007-bell-pepper",
      name: "bell pepper",
      price: 0.35,
    },
    {
      id: "008-berry",
      name: "berry",
      price: 0.35,
    },
    {
      id: "009-blueberry",
      name: "blueberry",
      price: 0.35,
    },
    {
      id: "010-eggplant",
      name: "eggplant",
      price: 0.35,
    },
  ],
  cart: [],
};

function renderListItems() {
  let counter = 0;

  const itemList = document.querySelector(".store--item-list");

  for (const item of state.items) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.setAttribute("class", "store--item-icon");

    const img = document.createElement("img");
    img.src = `assets/icons/${state.items[counter].id}.svg`;
    counter++;

    const button = document.createElement("button");
    button.setAttribute("class", "add-to-cart");
    button.innerText = "ADD TO CART";
    button.addEventListener("click", function () {
      const cartItem = {
        name: item.name,
        price: item.price,
        img: img.src,
        quantity: 1,
      };
      const itemExistsInCart = state.cart.find((i) => i.name === item.name);
      if (itemExistsInCart) {
        itemExistsInCart.quantity++;
      } else {
        state.cart.push(cartItem);
      }
      render();
    });

    itemList.append(li);
    li.append(div, button);
    div.append(img);
  }
}

function updateItemType(){
  for (const item of state.cart){
    if (item.name === 'apple' ||  item.name === 'blueberry' || item.name === 'apricot' || item.name === 'bananas' || item.name === 'avocado' || item.name === 'berry') {
      item.type = "fruit"
    }
    else {
      item.type = "veg"
    }
  }
}

function clear() {

  const cartItemList = document.querySelector(".cart--item-list");
  const itemList = document.querySelector(".store--item-list");
  cartItemList.innerHTML = "";
  itemList.innerHTML = "";
  
}

function renderCart() {
  const cartItemList = document.querySelector(".cart--item-list");
  for (const item of state.cart) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = item.img;

    const p = document.createElement("p");
    p.innerText = item.name;
    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "quantity-btn remove-btn center");
    removeButton.innerText = "-";
    removeButton.addEventListener("click", function () {
      item.quantity--;
      if (item.quantity === 0) {
        const cartItemIndex = state.cart.findIndex((i) => i === item);
        state.cart.splice(cartItemIndex, 1);
      }
      render();
    });

    const span = document.createElement("span");
    span.setAttribute("class", "quantity-text center");
    span.innerText = item.quantity;

    const addButton = document.createElement("button");
    addButton.setAttribute("class", "quantity-btn add-btn center");
    addButton.innerText = "+";
    addButton.addEventListener("click", function () {
      item.quantity++;
      render();
    });

    const fruitButton = document.querySelector(".fruit-btn");
    fruitButton.addEventListener('click', function(){
      //update the state.cart array by filtering only fruit items
      updateItemType()
      state.cart = state.cart.filter(item => item.type === 'fruit')
      //render
      render()
    })
    const vegButton = document.querySelector(".veg-btn");
    vegButton.addEventListener('click', function(){
      //update the state.cart array by filtering only fruit items
      updateItemType()
      state.cart = state.cart.filter(item => item.type === 'veg')
      //render
      render()
    })

    cartItemList.append(li);
    li.append(img, p, removeButton, span, addButton);
  }
}

function renderCartTotal() {
  let totalCost = document.querySelector(".total-number");
  let counter = 0;
  for (const item of state.cart) {
    if (item) {
      counter += item.price * item.quantity;
    } else {
      totalCost;
    }
  }
  totalCost.innerText = '£' + counter.toFixed(2);
}




function render() {
  clear();
  renderListItems();
  renderCart();
  renderCartTotal();
}

render();
