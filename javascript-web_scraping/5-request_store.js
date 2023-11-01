#!/usr/bin/node
const request = require('request');
const fs = require('fs');

if (process.argv.length !== 4) {
  console.error('Usage: node 5-request_store.js <URL> <output_file>');
  process.exit(1);
}

const url = process.argv[2];
const outputFile = process.argv[3];

request(url, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFile(outputFile, body, 'utf-8', (err) => {
      if (!err) {
        console.log(`Data from ${url} saved to ${outputFile}`);
      } else {
        console.error('Error writing to the output file:', err);
      }
    });
  } else {
    console.error('Error: Unable to retrieve data from the URL.');
  }
});

