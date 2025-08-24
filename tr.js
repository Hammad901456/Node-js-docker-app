// Simple Node.js server
const http = require("http");

const hostname = "0.0.0.0";  // sab network interfaces par listen karega
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello from Node.js + Jenkins!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});