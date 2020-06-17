const arr = [1,2,3];

console.log(Array.from(arr, x => x*4));
const arr2 = Array.of(10);
const arr3 = new Array(10);
console.log(arr2,arr3);

const arr4 = [1,2,3,4,5];
console.log(arr4.find(x=> x > 3));
console.log(arr4.find(x=> x < 3));

