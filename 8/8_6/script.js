let s1 = Symbol('Logowanie');
let s2 = Symbol('Logowanie');
console.log(s1);
console.log(s2);
//symbole są zawsze unikalne, nawet jeśli posiadają te same wartości
console.log(s1===s2);

let person = {
    name: 'Paweł',
    age: 40,
    city: 'Warszawa'
}

let s = Symbol();
person[s] = '1376';

console.log(person);

for (let i in person){
    console.log(i);
    
}
console.log('zakończyliśmy listowanie konsoli');

console.log(person[s]);

console.log('Object.getOwnPropertySymbols():');
console.log(Object.getOwnPropertySymbols(person));

