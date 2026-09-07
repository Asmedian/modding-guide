import { existsSync, readFileSync } from 'node:fs';
import { resolve, sep } from 'node:path';

type Dimensions = { width: number; height: number };

// The module is bundled into .svelte-kit before prerendering, so paths relative
// to import.meta.url would point at the temporary server output.
const staticRoot = resolve(process.cwd(), 'static');
const cache = new Map<string, Dimensions | null>();
const jpegSizeMarkers = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);

function imageDimensions(path: string): Dimensions | null {
  if (cache.has(path)) return cache.get(path) ?? null;
  let dimensions: Dimensions | null = null;
  if (existsSync(path)) {
    const image = readFileSync(path);
    if (image.length >= 24 && image.subarray(1, 4).toString('ascii') === 'PNG') {
      dimensions = { width: image.readUInt32BE(16), height: image.readUInt32BE(20) };
    } else if (image.length >= 10 && ['GIF87a', 'GIF89a'].includes(image.subarray(0, 6).toString('ascii'))) {
      dimensions = { width: image.readUInt16LE(6), height: image.readUInt16LE(8) };
    } else if (image.length >= 26 && image.subarray(0, 2).toString('ascii') === 'BM') {
      dimensions = { width: Math.abs(image.readInt32LE(18)), height: Math.abs(image.readInt32LE(22)) };
    } else if (image.length >= 12 && image[0] === 0xff && image[1] === 0xd8) {
      let offset = 2;
      while (offset + 8 < image.length) {
        if (image[offset] !== 0xff) { offset += 1; continue; }
        const marker = image[offset + 1];
        if (jpegSizeMarkers.has(marker)) {
          dimensions = { width: image.readUInt16BE(offset + 7), height: image.readUInt16BE(offset + 5) };
          break;
        }
        if (marker === 0xd8 || marker === 0xd9) { offset += 2; continue; }
        const segmentLength = image.readUInt16BE(offset + 2);
        if (segmentLength < 2) break;
        offset += 2 + segmentLength;
      }
    }
  }
  if (dimensions && (!dimensions.width || !dimensions.height)) dimensions = null;
  cache.set(path, dimensions);
  return dimensions;
}

function localImagePath(source: string, articleUrl: string) {
  let url: URL;
  try {
    url = new URL(source.replaceAll('&amp;', '&'), new URL(articleUrl, 'https://content.invalid'));
  } catch {
    return null;
  }
  if (url.origin !== 'https://content.invalid') return null;
  let pathname: string;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return null;
  }
  const path = resolve(staticRoot, `.${pathname}`);
  return path.startsWith(`${staticRoot}${sep}`) ? path : null;
}

export function addImageDimensions(html: string, articleUrl: string) {
  return html.replace(/<img\b([^>]*\bsrc="([^"]+)"[^>]*)>/g, (tag, attributes: string, source: string) => {
    if (/\bwidth="/.test(attributes) && /\bheight="/.test(attributes)) return tag;
    const path = localImagePath(source, articleUrl);
    const dimensions = path && imageDimensions(path);
    if (!dimensions) return tag;
    const selfClosing = /\/\s*$/.test(attributes);
    const cleanAttributes = selfClosing ? attributes.replace(/\/\s*$/, '').trimEnd() : attributes;
    const width = /\bwidth="/.test(attributes) ? '' : ` width="${dimensions.width}"`;
    const height = /\bheight="/.test(attributes) ? '' : ` height="${dimensions.height}"`;
    return `<img${cleanAttributes}${width}${height}${selfClosing ? ' /' : ''}>`;
  });
}
