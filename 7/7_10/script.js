let s = new WeakSet();

let obj1 = {name: 'Header'};
let obj2 = {name: 'Footer'};
let obj3 = {name: 'main'};

//nie można dodać tych samych obiektów do set, zostaną one pominięte.
s.add(obj1);
s.add(obj2);
s.add(obj2);
s.add(obj2);
s.add(obj3);
s.add(obj3);


console.log(s);
console.log(s.has(obj1));
console.log(s.delete(obj1));
console.log(s.has(obj1));