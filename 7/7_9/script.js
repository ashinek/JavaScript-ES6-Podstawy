let m = new WeakMap();

let obj1 = {id: 1};
let obj2 = {id: 2};
let obj3 = {id: 3};

m.set(obj1,'React');
m.set(obj2,'Ember');
m.set(obj3,'Angular');

console.log(m.get(obj3));

obj3 = null;

console.log(m.get(obj3));

//nie można iterować, ani sprawdzać długości obiektu typu WeakMap
for (const v of m){
    console.log(m);
    
}
