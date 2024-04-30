// A small HTTP server using Node's HTTP module

const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response
  res.end('Hello Holberton School!\n');
});

// Start the server and listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
