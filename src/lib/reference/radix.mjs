/** Convert complete integer input without floating-point rounding. @param {string} value @param {'hex' | 'dec'} from */
export function convertInteger(value, from) {
  const match = value.trim().match(from === 'hex' ? /^([+-]?)(?:0x)?([0-9a-f]+)$/i : /^([+-]?)([0-9]+)$/);
  if (!match) return null;
  const number = (match[1] === '-' ? -1n : 1n) * BigInt(`${from === 'hex' ? '0x' : ''}${match[2]}`);
  return from === 'hex' ? number.toString() : `${number < 0n ? '-' : ''}0x${(number < 0n ? -number : number).toString(16).toUpperCase()}`;
}
