const typedArr = new Uint8Array([1,2,3,4,5,30000,4.5666,5.1000,-1]);
const typedArr2 = new Float32Array([1,2,3,4,5,30000,4.5666,5.1000,-1]);

console.log('typedArr.length');
console.log(typedArr.length);

console.log('typedArr w for');
for(const b of typedArr){
    console.log(b);
    
}
console.log('\n\ntypedArr2.length');
console.log(typedArr2.length);

console.log('typedArr2 w for');
for(const b of typedArr2){
    console.log(b);
    
}