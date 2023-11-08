'use strict';

const geburtsjahr = prompt('Gib bitte deinen Geburtsjahr ein.');
const alter = 2023 - geburtsjahr;

if(alter >= 18){
  console.log('Viel Spaß im Kino.');
} else {
  console.log('Leider bist du noch zu jung für diesen Kinofilm.');
}

// alert('Dein Alter: ' + alter);