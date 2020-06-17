//interpreter na początku wciągnie deklarację zmiennej, lub funkcji,
//natomiast przypisanie do nich wartości będzie rozwiązany w kolejnosci przedstawionej w kodzie
showVariable();

function showVariable(){
    console.log(x);
    var x = 2;
}

showVariable();

//W przypadku let i const interpreter nie 'wyciągnie' inicjalizajci zmiennej
function showVariable2(){
    console.log(x);
    let x = 2;
}

showVariable2();