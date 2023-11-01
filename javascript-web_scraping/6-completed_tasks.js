#!/usr/bin/node
const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const tasks = JSON.parse(body);

    const completedTasksByUser = {};

    tasks.forEach((task) => {
      if (task.completed) {
        const userId = task.userId.toString();
        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
          completedTasksByUser[userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  } else {
    console.error('Error: Unable to retrieve data from the URL.');
  }
});

