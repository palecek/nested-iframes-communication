const fs = require('fs');
const http = require('http');

module.exports = ({ port, filePath }) => {
  http.createServer((req, res) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404: File not found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }).listen(port);
}
