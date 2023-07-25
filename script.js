let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products1 = [
    {
        id: 1,
        name: 'Fried shrimp with cheese',
        image: './img/product_1.png',
        price: 120000
    },
    {
        id: 2,
        name: 'Avocado and egg toast',
        image: './img/product_2.png',
        price: 120000
    },
    {
        id: 3,
        name: 'Green house salad',
        image: './img/product_3.png',
        price: 220000
    },
    {
        id: 4,
        name: 'Chicken burger',
        image: './img/product_4.png',
        price: 123000
    },
    {
        id: 5,
        name: 'Classic ceasar salad',
        image: './img/product_5.png',
        price: 320000
    },
    {
        id: 6,
        name: 'Grilled fish with orange sauce',
        image: './img/product_6.png',
        price: 120000
    },
    {
        id: 7,
        name: 'Sashimi salmon',
        image: './img/product_7.jpg',
        price: 170000
    },
    {
        id: 8,
        name: 'smoked beef',
        image: './img/product_8.png',
        price: 220000
    },
    {
        id: 9,
        name: 'Seafood pasta',
        image: './img/product_9.png',
        price: 250000
    },
];
let listCards  = [];
function initApp(){
    products1.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <div><img src="${value.image}"></div>
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products1[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products1[key].price;
    }
    reloadCard();
}
