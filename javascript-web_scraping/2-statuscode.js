#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 2-statuscode.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

request(url, (error, response, body) => {
  if (!error && response.statusCode) {
    console.log(`code: ${response.statusCode}`);
  } else {
    console.error(error || `code: ${response.statusCode}`);
  }
});

