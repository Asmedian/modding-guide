import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import test from 'node:test';

const root = join(import.meta.dirname, '../..');
const read = (path) => JSON.parse(readFileSync(join(root, path), 'utf8'));
const supported = new Set(['$schema', '$id', 'title', 'description', 'type', 'const', 'enum', 'required', 'properties', 'additionalProperties', 'pattern', 'items', 'minItems', 'maxItems', 'uniqueItems', 'minimum']);

// This deliberately small validator supports the complete keyword set used by
// our checked-in schemas. A new schema keyword fails closed until implemented.
function validate(value, schema, path = '$') {
  for (const key of Object.keys(schema)) assert.ok(supported.has(key), `Unsupported schema keyword ${key}`);
  if (schema.type) {
    const actual = value === null ? 'null' : Array.isArray(value) ? 'array' : typeof value;
    const types = Array.isArray(schema.type) ? schema.type : [schema.type];
    assert.ok(types.includes(actual) || (types.includes('integer') && Number.isInteger(value)), `${path}: expected ${types}`);
  }
  if ('const' in schema) assert.deepEqual(value, schema.const, `${path}: constant`);
  if (schema.enum) assert.ok(schema.enum.includes(value), `${path}: enum`);
  if (schema.pattern) assert.match(value, new RegExp(schema.pattern), `${path}: pattern`);
  if (schema.minimum !== undefined) assert.ok(value >= schema.minimum, `${path}: minimum`);
  if (Array.isArray(value)) {
    if (schema.minItems !== undefined) assert.ok(value.length >= schema.minItems, `${path}: minItems`);
    if (schema.maxItems !== undefined) assert.ok(value.length <= schema.maxItems, `${path}: maxItems`);
    if (schema.uniqueItems) assert.equal(new Set(value.map((item) => JSON.stringify(item))).size, value.length, `${path}: uniqueItems`);
    if (schema.items) value.forEach((item, index) => validate(item, schema.items, `${path}[${index}]`));
  } else if (value && typeof value === 'object') {
    for (const key of schema.required ?? []) assert.ok(Object.hasOwn(value, key), `${path}.${key}: required`);
    for (const [key, item] of Object.entries(value)) {
      if (schema.properties?.[key]) validate(item, schema.properties[key], `${path}.${key}`);
      else assert.notEqual(schema.additionalProperties, false, `${path}.${key}: unexpected property`);
    }
  }
}

function entities(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? entities(path) : entry.name === 'entity.json' ? [path] : [];
  });
}

test('entities, sources, and navigation satisfy their checked-in JSON schemas', () => {
  const articleSchema = read('content/_schemas/article.schema.json');
  for (const path of entities(join(root, 'content'))) validate(JSON.parse(readFileSync(path, 'utf8')), articleSchema, path);
  const sourceSchema = read('content/_schemas/source.schema.json');
  for (const source of read('content/_sources/sources.json')) validate(source, sourceSchema, source.id);
  for (const section of ['docs', 'erm', 'plugins']) validate(read(`content/_navigation/${section}.json`), read('content/_schemas/navigation.schema.json'));
});

test('schema validation rejects malformed or unsupported data', () => {
  assert.throws(() => validate({ status: 'pending' }, { type: 'object', properties: { status: { enum: ['published'] } } }));
  assert.throws(() => validate([], { type: 'array', minItems: 1 }));
  assert.throws(() => validate({ extra: true }, { type: 'object', additionalProperties: false }));
  assert.throws(() => validate('value', { unknownKeyword: true }));
});
