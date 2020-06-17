function getNumbers(){
    return [1,2,3,4,5];
}

var [a, ,b, ,c] = getNumbers();
console.log(a);
console.log(b);
console.log(c);
