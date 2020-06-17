let p1 = new Promise((resolve, reject)=>{
    resolve('Ok 1');
    // reject('Błąd 1');
});

let p2 = new Promise((resolve, reject)=>{
    // resolve('Ok 2');
    reject('Błąd 2');
});
let p3 = new Promise((resolve, reject)=>{
    resolve('Ok 3');
});

Promise.all([p1,p2,p3]).then(results =>{
    console.log(results);
    
}).catch(error => {
    console.log(error);
});
