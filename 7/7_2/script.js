let m = new Map();
m.set(1,'React');
m.set(2,'Angular');
m.set(3,'Ember');
m.set(4,'Babel');

console.log(m);
console.log('\n');

for (const v of m){
    console.log(v);
}

console.log('\nRozmiar Kolekcji '+m.size+'\n');

const r = m.get(1);
console.log('Pierwsza wartość w obiekcie Map m: '+r);
console.log('\n');

m.delete(1);
for (const v of m){
    console.log(v);
}

//usunięcie elementów w obiekcie m

m.clear();
console.log(m);
