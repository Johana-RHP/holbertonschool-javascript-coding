#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <film_id>');
  process.exit(1);
}

const filmId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${filmId}`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const filmData = JSON.parse(body);
    console.log(filmData.title);
  } else {
    console.error('Error: Unable to retrieve film title.');
  }
});

