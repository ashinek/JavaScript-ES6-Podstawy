//nie działa wartość nieokreślona

// let product = {
// 	id: 293,
// 	showId: () => this.id
// }

// console.log(product.showId());

//arrow function nie może być konstruktorem

// let product = () => {};

// let p = new product;
let product = () => ({id: 1345});
console.log(product());
