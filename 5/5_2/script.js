var person = {
    name: 'Tomek',
    age: 30,
    city: 'Warszawa'
}

var {name: n, age: a, city: c = 'Poznań'} = person;
console.log(n);
console.log(a);
console.log(c);

