async function wait3seconds(string){
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(string);
        },3000);
    });
}

async function run(string){
    let result = await wait3seconds(string);
    return result;
}

run('Uruchomienie funkcji run').then(res =>{
    console.log(res);
});

console.log(wait3seconds('Header'));