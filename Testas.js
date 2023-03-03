// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
console.log("-----1-----");

const a = 7;
const b = 5;

if (a > b) {
  console.log("a yra didesnis nei b");
} else if (a < b) {
  console.log("b yra didesnis nei a");
} else {
  console.log("a ir b lygūs");
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log("-----2-----");

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log("-----3-----");

let numbers = "";

for (let i = 0; i < 11; i += 2) {
  numbers += i + " ";
}

console.log(numbers);

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log("-----4-----");

let randomFive = [];
for (let i = 0; i < 5; i++) {
  randomFive.push(Math.floor(Math.random() * 6) + 1);
}
console.log(randomFive);

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log("-----5-----");

let randomUpToTen = 0;

while (randomUpToTen !== 5) {
  randomUpToTen = Math.floor(Math.random() * 10) + 1;
  console.log(randomUpToTen);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log("-----6-----");

const randomArrayLength = [...Array(Math.floor(Math.random() * 11) + 20)];

const masyvas = [...randomArrayLength].map((_) =>
  Math.floor(Math.random() * 20 + 10)
);

const maxNum = Math.max(...masyvas);

console.log(masyvas);
console.log(maxNum);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
console.log("-----7-----");

const Abcd = "ABCD";

const randomAbcd = [...Array(100)].map(
  (_) => Abcd[Math.floor(Math.random() * Abcd.length)]
);

const sumA = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "A" ? sum + 1 : sum),
  0
);

const sumB = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "B" ? sum + 1 : sum),
  0
);

const sumC = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "C" ? sum + 1 : sum),
  0
);

const sumD = randomAbcd.reduce(
  (sum, currentEl) => (currentEl === "D" ? sum + 1 : sum),
  0
);

console.log(randomAbcd);
console.log(sumA);
console.log(sumB);
console.log(sumC);
console.log(sumD);

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti
// arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.
// Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
console.log("-----8-----");

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas,
// kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
console.log("-----9-----");

function pirminisSkaicius(number) {
  if (typeof number !== "number") {
    return "Klaida: Gražinta reikšmė nėra skaičius";
  }
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(pirminisSkaicius("h"));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10.
// Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų)
console.log("-----10-----");
