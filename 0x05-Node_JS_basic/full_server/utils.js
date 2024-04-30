// full_server/utils.js

import fs from 'fs';

const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = {};
        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstName);
        });
        resolve(students);
      }
    });
  });
};

export { readDatabase };
