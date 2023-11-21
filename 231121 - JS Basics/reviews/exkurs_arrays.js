"use strict";

const reviews = [
  ['gutschein 1','titel 1', 'beschreibung 1'],
  ['gutschein 2','titel 2', 'beschreibung 2'],
  ['gutschein 3','titel 3', 'beschreibung 3']
];

// Standard-Schleife
for(let i=0; i<reviews.length; i++)
{
  console.log(reviews[i][0], reviews[i][1], reviews[i][2]);
} 

// For-Of-Schleife
for(const review of reviews) {
  console.log(review[0], review[1], review[2]);
}