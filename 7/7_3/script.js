let set = new Set();
//przy iteracji pojawią się tylko wartości unikalne
set.add(10);
set.add(20);
set.add('ok');
set.add(true);
set.add(10);
set.add(true);

console.log(set);

for (const v of set){
    console.log(v);
    
}

set.delete(10);
console.log(set.has(10));