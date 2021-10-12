console.log("1 - console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’");
for (i = 0; i < 5; i++)
console.log("Labas");

console.log("2 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje");
for (let i = 0; i <= 4; i += 1)
console.log(i); 

console.log("3 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje");
for (let i = 0; i <= 40; i += 10)
console.log(i);

console.log("4 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje");
for (let i = 49; i <= 53; i += 1)
console.log(i);

console.log("5 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje");
 for (let i = 4; i >= 0; i -= 1)
 console.log(i);
 
 console.log("6 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for");
for (let i = 0; i <= 8; i += 2)
console.log(i);

console.log("7 - console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje");
for (let i = 0; i < 5; i++) 
console.log(Math.trunc(Math.random() * 11));

console.log("8.	console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5");
let random;
while (random != 5) {
  random = Math.floor(Math.random() * 11);
  console.log(random);
}

console.log("9.	console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;");
let suma = 0;
while (suma <= 100) {
  let random = Math.floor(Math.random() * 11);
  console.log("atsitiktinis skaicius: ", random);
  suma += random;
  console.log("suma yra: ", suma);
}

console.log("10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko");
let ciklas = 0;
let rand;
while (rand !== 5 && rand !== 7) {
  rand = Math.floor(Math.random() * 11);
  ciklas++;
  console.log("atsitiktinis skaicius: ", rand);
}
console.log("ciklu: ", ciklas);

console.log("11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;");
// ATSAKYMAS LYG IR GAUNASI, BET SĄLYGA AR GERA ????

for (let suma = 0; suma <= 20; suma ++) {         
  let random = Math.floor(Math.random() * 2);
  console.log("atsitiktinis skaicius: ", random);
  suma += random;
  console.log("suma yra: ", suma);
}

console.log("12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai");
let skirt;
let nelygin = 0;
while (nelygin < 3) {
    skirt = Math.floor(Math.random() * 11);
    console.log(skirt);
    if (skirt % 2 === 1){
        nelygin++;
    }
}

console.log("13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai");
let pirmas = 0;
let antras = 1;
while (pirmas !== antras) {
    pirmas = Math.floor(Math.random() * 11);
    antras = Math.floor(Math.random() * 11);
    console.log(pirmas,'', antras);  
    }

console.log("14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100");
let pirminis;
let antrinis;
let pirminisSuma = 0;
let antrinisSuma = 0;
while (pirminisSuma <= 100 || antrinisSuma <= 100) {
    pirminis = Math.trunc(Math.random() * 11);
    pirminisSuma += pirminis;
    antrinis = Math.trunc(Math.random() * 11);
    antrinisSuma += antrinis;
    console.log("pirminis skaicius: ", pirminis, " ", "antrinis skaicius: ", antrinis);
    console.log("pirminisSuma: ", pirminisSuma, " ", "antrinisSuma: ", antrinisSuma);
}

console.log("15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.");
let random1;
let random2;
let random1Nelyginis = 0;
let random2Nelyginis = 0;

while (random1Nelyginis <= 3 && random2Nelyginis <= 3) {
    random1 = Math.trunc(Math.random() * 11);
    random2 = Math.trunc(Math.random() * 11);
    console.log("random1: ", random1, " ", "random2: ", random2);
    if (random1 % 2 === 1 || random2 % 2 === 1) {
        random1Nelyginis++;
        random2Nelyginis++;
    }
}