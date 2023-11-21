"use strict";

const reviews = [
  {
    id: 1,
    name: "Manuel Haigermoser",
    job: "Mediendesigner",
    img: "img/manuel.jpg",
    text: "Die Zeit war schön, nur ein's ist blöd, dass mit der Zeit die Zeit vergeht."
  },
  {
    id: 2,
    name: "Sandra Haigermoser",
    job: "Chemikerin",
    img: "img/sandra.jpg",
    text: "Ich mag Hexamethylendiamine..."
  },
  {
    id: 3,
    name: "Teddy Haigermoser",
    job: "Hund",
    img: "img/teddy.jpg",
    text: "Wo sind meine Frolics?!"
  },
];

// elemente auswählen
const $img = document.querySelector('#person-img');
const $author = document.querySelector('#author');
const $job = document.querySelector('#job');
const $info = document.querySelector('#info');

const $prevBtn = document.querySelector('.prev-btn');
const $nextBtn = document.querySelector('.next-btn');
const $randomBtn = document.querySelector('.random-btn');

// Start-Element
let currentItem = 0;

// Lade erstes Element
window.addEventListener('DOMContentLoaded', function(){
  showPerson(currentItem);
});

// zeige Person auf Basis des aktuellen Items
function showPerson(person) {
  const item = reviews[person];
  $img.src = item.img;
  $author.textContent = item.name;
  $job.textContent = item.job;
  $info.textContent = item.text;
}

// Zeige nächste Person
$nextBtn.addEventListener('click', function(){
  currentItem++;
  if(currentItem > reviews.length-1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// Zeige vorherige Person
$prevBtn.addEventListener('click', function(){
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length-1;
  }
  showPerson(currentItem);
});

// zeige zufällige Person
$randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});