console.log("1 - console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’");
for (i = 0; i < 5; i++)
console.log("Labas");

console.log("2 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje)");
for (var i = 0; i <= 4; i += 1)
console.log(i); 

console.log("3 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje)");
for (var i = 0; i <= 40; i += 10)
console.log(i);

console.log("4 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje)");
for (var i = 49; i <= 53; i += 1)
console.log(i);

console.log("5 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje)");
 for (var i = 4; i >= 0; i -= 1)
 console.log(i);
 
 console.log("6 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for)");
for (var i = 0; i <= 8; i += 2)
console.log(i);

console.log("7 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje)");
console.log("Variantas - A");
for (var i = 0; i < 5; i++) 
console.log(Math.trunc(Math.random() * 11));
console.log("Variantas - B");
for (var i = 0; i < 5; i++) {
    count = 0;
        for (var j = 0; j < Math.floor(Math.random() * 11); j++){
        count++; 
        }
    console.log(count);
} 
 
console.log("8.	console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5");
let random1
console.log(random1)
for (;;) {
    random1 = Math.floor(Math.random() * 10 * 1);
    console.log(random1);
    if (random1 === 5) break
}

console.log("9.	console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;");
let random2 = 0;
let suma = 0;
while (suma <= 100) {
    random2 = Math.floor(Math.random() * 10 * 1);
    suma += random2;
    console.log(random2)
}

console.log("11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;");
