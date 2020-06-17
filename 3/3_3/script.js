//stałe mają zakres jak zmienne deklarowane za pomocą let
const env = 'DEV';

{
    const env='PROD';
    console.log(env);
}

//env='PROD';

console.log(env);

//w przypadku obiektu do niego nie możemy nic przypisać, ale bez problemu zmodyfikujemy jego właściwości
const config = {};

config.env = 'PROD';
console.log(config.env);

config.env = 'DEV';
console.log(config.env);
