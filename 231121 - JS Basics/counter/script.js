"use strict";

// start-wert counter
let count = 0;

// elemente auswählen
const $value = document.querySelector('#value');

const $btnDec = document.querySelector('.btn--dec');
const $btnRes = document.querySelector('.btn--res');
const $btnInc = document.querySelector('.btn--inc');

// event-binding
$btnDec.addEventListener('click', countDown);
$btnRes.addEventListener('click', countReset);
$btnInc.addEventListener('click', countUp);

// funktionen
function countUp() {
  count++;
  $value.textContent = count;
}

function countDown() {
  if(count>0) count--;
  $value.textContent = count;
}

function countReset() {
  count=0;
  $value.textContent = count;
}