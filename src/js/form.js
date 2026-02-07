const products = [{
	product: "Orange",
	price: 60,
	cardColor: "#F47F4C",
},
{
	product: "Strawberry",
	price: 100,
	cardColor: "#F8766B",

}, {
	product: "Banana",
	price: 80,
	cardColor: "#EDD251",

}, {
	product: "Watermelon",
	price: 40,
	cardColor: "#9DC262",

}, {
	product: "Lime",
	price: 60,
	cardColor: "#BFD663",

}, {
	product: "Apple",
	price: 50,
	cardColor: "#E93F29",

}, {
	product: "Peach",
	price: 80,
	cardColor: "#DB4F4B",

}, {
	product: "Plums",
	price: 40,
	cardColor: "#9B5366",

},
{
	product: "Kiwi",
	price: 90,
	cardColor: "#98B37E",

},
];


const form = document.querySelector(".modal-form");
const btn = document.querySelector('.order-submit');
const order = document.querySelector('.mw-your-order');
const overlay = document.querySelector('.overlay');
const value = document.querySelector('.value');
const list = document.querySelector('.order-list');
const counter = document.querySelector('.product-counter');
const price = document.querySelector('.product-price');


form.addEventListener("submit", e => {
	e.preventDefault();



	// overlay.classList.remove("active");
	// order.classList.remove('active');
	form.reset();
});

// list.addEventListener('click', e => {
// 	const targetClass = e.target.classList.value;
// 	const currentNumber = Number(counter.textContent);

// 	if (targetClass === "quantity-increase") {
// 		e.preventDefault();
// 		counter.textContent = currentNumber + 1;
// 		price.textContent = `${60 * (currentNumber + 1)} UAH`;

// 	} else if (targetClass === "quantity-decrease") {
// 		e.preventDefault();
// 		if (currentNumber <= 1) return;
// 		counter.textContent = Number(counter.textContent) - 1;
// 		price.textContent = `${60 / (currentNumber - 1)} UAH`;

// 	}

// });
