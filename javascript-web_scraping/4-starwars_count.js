#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filmsData = JSON.parse(body).results;
    const count = filmsData.filter(film => film.characters.includes(characterId)).length;
    console.log(count);
  } else {
    console.error('Error: Unable to retrieve data from the API.');
  }
});

