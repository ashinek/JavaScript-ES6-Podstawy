//let ogranicza zakres zmiennej do bloku w tym wypadku do "if'a"

// function showOrderValue() {
// 	var orderValue = 100;
// 	if (orderValue >= 100){
// 		let newOrderValue = orderValue - orderValue*0.1;
// 	}
// 	else{
// 		console.log(newOrderValue);
// 	}
// }

// showOrderValue();

//let nie pozwoli na zadeklarowanie dwa razy tej samej zmiennej w ramach jednego bloku
let score = 10;
let x = 1;
if (x == 1) {
	let score = 20;
	console.log(score);
}
console.log(score);

//same nawiasy klamrowe również są blokami.
{
	let score = 30;
	console.log(score);
}
