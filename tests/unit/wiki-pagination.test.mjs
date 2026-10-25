import test from 'node:test';
import assert from 'node:assert/strict';
import { paginationPages } from '../../src/lib/wiki/pagination.mjs';
test('Wiki pagination keeps the current and final pages in a bounded local window',()=>{
  assert.deepEqual(paginationPages(1,15),[1,2,3,4,'gap',15]);
  assert.deepEqual(paginationPages(7,15),[6,7,8,9,'gap',15]);
  assert.deepEqual(paginationPages(15,15),[11,12,13,14,15]);
  for(let total=1;total<=200;total++)for(let current=1;current<=total;current++){
    const entries=paginationPages(current,total),numbers=entries.filter(x=>typeof x==='number');
    assert.ok(numbers.length<=5);assert.ok(numbers.includes(current));assert.equal(numbers.at(-1),total);
    assert.equal(new Set(numbers).size,numbers.length);
    for(const number of numbers)assert.ok(number>=1&&number<=total);
    if(entries.includes('gap')){assert.equal(entries.at(-2),'gap');assert.ok(numbers.at(-2)<total-1);}
  }
});
