// Reading a file synchronously with Node JS

const fs = require('fs');

/**
 * Counts the number of students in each field from a CSV file.
 * @param {string} path - The path to the CSV file.
 */
function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
