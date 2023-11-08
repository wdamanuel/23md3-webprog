'use strict'; // Strict Mode aktivieren

let meineVariable = "amazing";
console.log(meineVariable);

// Mathematische Operatoren
console.log(40 + 8 + 23 - 10);

// Werte und Variablen ausgeben
console.log("Stefanie");
console.log(12);

// Variablen
let firstname = "Martina";

console.log(firstname);
console.log(firstname);
console.log(firstname);

// Konventionen bei Variablennamen
// darf nicht mit einer zahl beginnen
// keine Leerzeichen, keine Sonderzeichen

////////////////////////////
// Datentypen

// Boolean
let jsIsFun = true;
console.log(jsIsFun);

// Variablentyp ausgeben
console.log(typeof jsIsFun);

// Strings / Zeichenkette
let myName = "Martina";
console.log(myName);

// Number
let myAge = 23;
console.log(myAge);

// Template Strings (Funktioniert nur mit Backticks ``)
console.log(`Mein name ist ${myName} und ich bin ${myAge} Jahre alt.`);

////////////////////////////
// let, const, var

// let = veränderbarer Wert
let age = 30;
age = 31;

console.log(age);

// const = unveränderbarer Wert
const birthYear = 1987;
//birthYear = 1988;
console.log(birthYear);

/////////////////////////////
// Operatoren

const jahr = 2048;
const alterManuel = jahr - 1987;
const alterMary = jahr - 1995;
console.log(alterManuel, alterMary);

// String-Verknüpfung
const vorname = "Manuel";
const nachname = "Haigermoser";
console.log(vorname + " " + nachname);

// Zuweisungsoperatoren
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

/////////////////////////////
// BMI berechnen
// BMI = mass / height^2 = mass / (height * height) (meter / kg)

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / heightJohn ** 2;
const higherBMI = BMIMark > BMIJohn;

//console.log(BMIMark, BMIJohn, higherBMI);

// IF-Statement
// Wenn es stimmt (true), dass Mark schwer ist als John...
if(higherBMI){
  // ...dann führe diesen Anweisungsblock aus
  console.log('Mark hat einen höhreren BMI als John.');
}
// Sonst, führe den Inhalt des Else-Blocks aus
else {
  console.log('John hat einen höhreren BMI als Mark.');
}