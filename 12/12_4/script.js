const string = 'okok ok ok';
const pattern = /ok/y;

console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
console.log(pattern.exec(string));
console.log(pattern.lastIndex);
