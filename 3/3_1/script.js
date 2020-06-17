//zakresy działania zmiennych
function showOrderValue(){
    var orderValue = 100;
    console.log(orderValue);
}

showOrderValue();
//zmienna nie wyświetli wartości, jej zakres jest ograniczony do funkcji
console.log(orderValue);

//zmienna globalna
//można wielokrotnie inicjować jedną zmienną....
var orderValue = 100;
orderValue = 110;
orderValue = 200;
var orderValue = 320;
console.log(orderValue);