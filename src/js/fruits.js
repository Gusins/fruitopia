const products = [{
	product: "Orange",
	price: 60,
	cardColor: "#F47F4C",
	count: 1,
	id: 8
},
{
	product: "Strawberry",
	price: 100,
	cardColor: "#F8766B",
	count: 1,
	id: 1

}, {
	product: "Banana",
	price: 80,
	cardColor: "#EDD251",
	count: 1,
	id: 2

}, {
	product: "Watermelon",
	price: 40,
	cardColor: "#9DC262",
	count: 1,
	id: 3

}, {
	product: "Lime",
	price: 60,
	cardColor: "#BFD663",
	count: 1,
	id: 4
}, {
	product: "Apple",
	price: 50,
	cardColor: "#E93F29",
	id: 5,
	count: 1,
	id: 5

}, {
	product: "Peach",
	price: 80,
	cardColor: "#DB4F4B",
	count: 1,
	id: 6

}, {
	product: "Plums",
	price: 40,
	cardColor: "#9B5366",
	count: 1,
	id: 7

},
{
	product: "Kiwi",
	price: 90,
	cardColor: "#98B37E",
	count: 1,
	id: 9

},
];

const list = document.querySelector('.fruits-list');

list.addEventListener('click', e => {
	const selector = e.target.closest('.fruits-card');
	if (!selector) return;
	const cardId = Number(selector.dataset.id);

	if (e.target.classList.contains("quantity-increase")) {
		products.forEach((el) => {
			if (el.id === cardId) {
				el.count += 1;
				selector.querySelector('.product-counter').textContent = el.count;
			}
		});
	} else if (e.target.classList.contains("quantity-decrease")) {
		products.forEach((el) => {
			if (el.id === cardId) {
				if (el.count <= 0) return;
				el.count -= 1;
				selector.querySelector('.product-counter').textContent = el.count;
			}
		});
	}
}); 