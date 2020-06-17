var table = ['Adam', 'Tomek', 'Krzysiek', 'Pawel'];

for (let key in table){
    console.log(key + ' ' + table[key]);
}
console.log('\n');

for (let value of table){
    console.log(value);
}
console.log('\n');

const name = 'Dominik';
for (const char of name){
    console.log(char);
}