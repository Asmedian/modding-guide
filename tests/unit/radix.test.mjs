import assert from 'node:assert/strict';
import test from 'node:test';
import { convertInteger } from '../../src/lib/reference/radix.mjs';

test('radix conversion validates complete signed integer input and keeps large values exact', () => {
  for (const [input,decimal] of [['0xFF','255'], ['ff','255'], [' +0X000a ','10'], ['-0x80','-128'], ['0','0'], ['FFFFFFFFFFFFFFFF','18446744073709551615'], ['20000000000001','9007199254740993']]) {
    assert.equal(convertInteger(input,'hex'),decimal);
    const hex=convertInteger(decimal,'dec');
    assert.equal(convertInteger(hex,'hex'),decimal);
  }
  assert.equal(convertInteger('255','dec'),'0xFF');
  assert.equal(convertInteger('-128','dec'),'-0x80');
  assert.equal(convertInteger('+00012','dec'),'0xC');
  assert.equal(convertInteger('-0','dec'),'0x0');
  for(const input of ['', ' ', '0x', '+', '-', 'ffz', '0x12junk', '12 34', '1.5', '0x-FF']) assert.equal(convertInteger(input,'hex'),null,input);
  for(const input of ['', '0xFF', '255junk', '1e3', '1.5', '1_000', '12 34', '--1', 'Infinity']) assert.equal(convertInteger(input,'dec'),null,input);
});
