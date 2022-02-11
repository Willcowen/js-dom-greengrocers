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

/*Implement the following requirements
A user can view a selection of items in the store -- DONE
From the store, a user can add an item to their cart -- DONE
From the cart, a user can view and adjust the number of items in their cart
If an item's quantity equals zero it is removed from the cart
A user can view the current total in their car */

function renderListItems() {
  //loop through all items in the initial state.
  for (let i = 0; i < state.items.length; i++) {

    //find the itemlist on the page
    const itemList = document.querySelector(".store--item-list");

    //create li element
    const li = document.createElement("li");
 
    //create div element
    const div = document.createElement("div");
    div.setAttribute("class", "store--item-icon");

    //create img element and assign src for each iteration of the loop
    const img = document.createElement("img");
    img.src = `assets/icons/${state.items[i].id}.svg`

    const button = document.createElement("button");
    button.setAttribute('class', 'add-to-cart')
    button.innerText = 'ADD TO CART'
    button.addEventListener('click', function(){
      addItemToCart(state.items[i])
    }) 

    itemList.append(li);
    li.append(div, button);
    div.append(img);
  }
}


function addItemToCart(item){
  console.log('You added an item to the cart!')
  for (const fruit of state.items) {
    if (fruit.name === item.name)
    state.cart.push(item)
    fruit.quantity = 0
  }
  renderCart()
}

function renderCart() {
  
  //target the ul element by its class
  const cartItemList = document.querySelector('.cart--item-list')

  //create li element
  const li = document.createElement("li");
  console.log(state.cart)

  //create img element
  const img = document.createElement("img")
  img.src = `assets/icons/${state.cart[state.cart.length-1].id}.svg`

  //create text element
  const p = document.createElement("p")
  p.innerText = state.cart[state.cart.length-1].name

  //create buttons
  const removeButton = document.createElement("button")
  removeButton.setAttribute('class', 'quantity-btn remove-btn center')
  removeButton.innerText = '-'

  const span = document.createElement("span")
  span.setAttribute('class', 'quantity-text center')
  let counter = 0
  for (let i = 0; i < state.cart.length; i++) {
      if (state.cart.includes(state.cart[i])) {
        state.cart[i].quantity++
      }
      
      counter = state.cart[i].quantity
  }
  span.innerText = counter
  

  const addButton = document.createElement("button")
  addButton.setAttribute('class', 'quantity-btn add-btn center')
  addButton.innerText = '+'

  cartItemList.append(li)
  li.append(img, p, removeButton, span, addButton)

}

renderListItems();
//renderCart with added items




