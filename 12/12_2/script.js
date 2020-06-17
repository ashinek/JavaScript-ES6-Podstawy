let n = 4.78;
console.log('Number.isInteger(n): '+n);
console.log(Number.isInteger(n));
n = 4;
console.log('Number.isInteger(n): '+n);
console.log(Number.isInteger(n));

console.log('Number.isNaN(n): '+n);
console.log(Number.isNaN(n));
n=NaN;
console.log('Number.isNaN(n): '+n);
console.log(Number.isNaN(n));
n=2*'OK';
console.log('Number.isNaN(n): '+n);
console.log(Number.isNaN(n));

n=14,34;
console.log('Number.parseInt(n) '+n);
console.log(Number.parseInt(n));

n=23;
console.log('Number.isSafeInteger(n) '+n);
console.log(Number.isSafeInteger(n));
n=500045654312123465456465;
console.log('Number.isSafeInteger(n) '+n);
console.log(Number.isSafeInteger(n));
n=null;
console.log('Number.isSafeInteger(n) '+n);
console.log(Number.isSafeInteger(n));
n=0b010;
console.log('n==0b010');
console.log(n);
n=0b101;
console.log('n==0b101');
console.log(n);




