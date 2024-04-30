// Using Process stdin

console.log('Welcome to Holberton School, what is your name?');

let closed = false;

function closeProgram() {
  if (!closed) {
    console.log('This important software is now closing');
    closed = true;
    process.exit(0);
  }
}

process.stdin.on('data', (data) => {
  const name = data.toString().trim();

  if (name) {
    console.log(`Your name is: ${name}`);
    closeProgram();
  }
});

process.on('exit', () => {
  closeProgram();
});
