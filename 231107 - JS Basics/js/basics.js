'use strict'; // Strict Mode aktivieren

// Ausgabe in der Browser-Konsole
console.log(document.querySelector('h1'));

// Kommantare schreiben (einzeilig)

/* Kommentare schreiben
über mehrere
Zeilen... */

// Variablen
var a = 0; // Veraltete Schreibweise
let b = 20; // Veränderbarer Wert
b = 21;

const c = 43; // Konstante, nicht veränderbarer Wert

// Datentypen
const vorname = "Lukas"; // String mit "
const nachname = 'Meier'; // String '
// Template String
const alter = `Ich bin ${vorname} ${nachname} und ${c} Jahre alt`;
// Template String mit Ausdruck
console.log(`In ${a} Jahren bin ich ${c+a} Jahre alt.`);

// Boolean
const happy = true;

// Truthy & Falsy
"1" == 1 // = wahr, weil selber Wert
"1" === 1 // = falsch, weil unterschiedlicher Datentyp

// Number
const luckyNumber = 11;
const temperature = -21;