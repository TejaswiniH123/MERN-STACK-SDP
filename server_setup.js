// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello World!');
// });

// server.listen(3000, () => {
//     console.log('Server is listening on http://localhost:3000');
// });
const http = require('http');

const server = http.createServer((req, res) => {
  const a = 5;
  const b = 10;
  const sum = a + b;

//   res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`The sum of ${a} and ${b} is ${sum}`);
});

server.listen(5000, () => {
  console.log('Server is listening on http://localhost:5000');
});




    
