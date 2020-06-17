const string = 'ES2015';
//sprawdzamy czy dane wyrazenie znajduje się w zmiennej
console.log(string.includes('2015'));
//sprawdzenie czy konczy sie danym ciagiem znakow
console.log(string.endsWith('2015'));
//sprawdzenie czy zaczyna sie danym ciagiem znakow
console.log(string.startsWith('ES'));
//sprawdzenie czy zawiera znaki na danej pozycji w tym wypadku sprawdzamy drugi znak
console.log(string.startsWith('S',1));
//powtorzenie stringa
console.log(string.repeat(10));