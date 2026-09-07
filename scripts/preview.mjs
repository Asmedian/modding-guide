import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Serve the final artifact, not SvelteKit's intermediate client directory:
// Pagefind is generated after SvelteKit and only exists in build/.
const root = resolve(dirname(fileURLToPath(import.meta.url)), '../build');
const arg = (name, fallback) => process.argv[process.argv.indexOf(name) + 1] && process.argv.includes(name) ? process.argv[process.argv.indexOf(name) + 1] : fallback;
const host = arg('--host', '127.0.0.1');
const port = Number(arg('--port', '4173'));
const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');
const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.gif': 'image/gif', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.md': 'text/plain; charset=utf-8', '.xml': 'application/xml', '.wasm': 'application/wasm' };
if (!existsSync(join(root, 'index.html'))) throw new Error('Run npm run build before preview.');

const server = createServer((request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (base && pathname === '/') { response.writeHead(302, { Location: `${base}/` }).end(); return; }
    if (base && pathname !== base && !pathname.startsWith(`${base}/`)) { response.writeHead(404).end(); return; }
    let target = resolve(root, `.${pathname.slice(base.length) || '/'}`);
    if (target !== root && !target.startsWith(`${root}${sep}`)) { response.writeHead(403).end(); return; }
    if (existsSync(target) && statSync(target).isDirectory()) target = join(target, 'index.html');
    if (!existsSync(target) || !statSync(target).isFile()) { response.writeHead(404).end(); return; }
    response.writeHead(200, { 'Content-Type': mime[extname(target)] ?? 'application/octet-stream', 'Cache-Control': 'no-store' });
    if (request.method === 'HEAD') response.end();
    else createReadStream(target).pipe(response);
  } catch {
    response.writeHead(400).end();
  }
});
server.listen(port, host, () => console.log(`Static preview: http://${host}:${port}${base}/`));
