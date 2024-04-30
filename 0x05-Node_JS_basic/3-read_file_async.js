// 3. Reading a file asynchronously with Node JS

const fs = require('fs');

/**
 * Counts the number of students in each field from a CSV file asynchronously.
 * @param {string} path - The path to the CSV file.
 * @returns {Promise} A promise that resolves when the counting is done.
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content into lines
        const lines = data.trim().split('\n');

        // Initialize counters for each field
        const counters = {};

        // Iterate over each line and count students in each field
        lines.forEach((line) => {
          // Split the line into fields
          const [, , , field] = line.split(',');
          if (field && field.trim() !== '') {
            counters[field] = (counters[field] || 0) + 1;
          }
        });

        // Display the total number of students
        const totalStudents = lines.length - 1; // Exclude the header line
        console.log(`Number of students: ${totalStudents}`);

        // Display the number of students in each field
        Object.entries(counters).forEach(([field, count]) => {
          const studentsList = lines
            .filter((line) => {
              const [, , , lineField] = line.split(',');
              return lineField === field;
            })
            .map((line) => line.split(',')[0]); // Extract the first name

          console.log(`Number of students in ${field}: ${count}. List: ${studentsList.join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
