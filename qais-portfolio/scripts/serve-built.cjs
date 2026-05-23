const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const host = process.env.HOST || '127.0.0.1';
const port = Number(process.env.PORT || 4200);
const root = path.resolve(__dirname, '../dist/qais-portfolio/browser');
const basePath = normalizeBasePath(process.env.BASE_PATH || '/PortfolioV2/');

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.m4a': 'audio/mp4',
};

const server = http.createServer((request, response) => {
  let requestPath = decodeURIComponent((request.url || '/').split('?')[0]);

  if (basePath !== '/') {
    if (requestPath === '/' || requestPath === basePath.slice(0, -1)) {
      response.writeHead(302, { Location: basePath });
      response.end();
      return;
    }

    if (!requestPath.startsWith(basePath)) {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    requestPath = `/${requestPath.slice(basePath.length)}`;
  }

  let filePath = path.join(root, requestPath === '/' ? 'index.html' : requestPath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  fs.stat(filePath, (statError, stats) => {
    if (statError || stats.isDirectory()) {
      filePath = path.join(root, 'index.html');
    }

    fs.readFile(filePath, (readError, data) => {
      if (readError) {
        response.writeHead(404);
        response.end('Not found');
        return;
      }

      response.writeHead(200, {
        'Content-Type': contentTypes[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      });
      response.end(data);
    });
  });
});

server.listen(port, host, () => {
  console.log(`Serving built portfolio at http://${host}:${port}${basePath}`);
});

function normalizeBasePath(value) {
  if (!value || value === '/') {
    return '/';
  }

  return `/${value.replace(/^\/+|\/+$/g, '')}/`;
}
