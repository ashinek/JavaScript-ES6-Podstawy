function *gen(){
    yield "raz";
    yield "dwa";
    yield "trzy";
}

let x = gen();
console.log(x);

console.log(x.next().value);
console.log("drugie przejście generatora");
console.log(x);
console.log(x.next().value);
console.log("trzecie przejście generatora");
console.log(x);
console.log(x.next().value);

console.log(x.next().done);

console.log(x);


