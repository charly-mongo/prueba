const http = require('http');
const fs = require('fs');
const path = require('path');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  // Construir la ruta al archivo solicitado de forma segura
  // Si piden "/", servimos "index.html". Si no, el archivo que pidan.
  let filePath = path.join(
    __dirname,
    'public',
    req.url === '/' ? 'index.html' : req.url
  );

  // Obtener la extensión del archivo para saber qué Content-Type enviar
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Leer el archivo del disco
  fs.readFile(filePath, (error, content) => {
    if (error) {
      // Si hay un error (ej. archivo no encontrado)
      if (error.code == 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1><p>El recurso solicitado no existe.</p>');
      } else {
        // Otro error del servidor
        res.writeHead(500);
        res.end('Error del servidor: ' + error.code);
      }
    } else {
      // Si se encontró el archivo, lo servimos
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(port, host, () => {
  console.log(`🚀 Servidor web corriendo en http://${host}:${port}`);
});
