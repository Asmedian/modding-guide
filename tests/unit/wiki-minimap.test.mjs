import assert from 'node:assert/strict';
import test from 'node:test';
import H3Map from '../../scripts/wiki/explorer-map-parser.mjs';

function render(map, level=0) {
  let image;
  const previous=globalThis.document;
  globalThis.document={createElement:()=>({getContext:()=>({
    createImageData:(width,height)=>({data:new Uint8ClampedArray(width*height*4)}),
    putImageData:value=>{image=value;}
  })})};
  try { H3Map.renderMinimap(map,level); }
  finally { if(previous===undefined)delete globalThis.document;else globalThis.document=previous; }
  return (x,y)=>[...image.data.slice((y*map.mapSize+x)*4,(y*map.mapSize+x)*4+3)];
}
const grass=H3Map.TERRAIN_COLORS[2].slice(0,3);
const forest=H3Map.TERRAIN_COLORS[2].slice(3);
function mapWith(objects=[],objectTemplates=[]) {
  return {mapSize:8,terrain:Array.from({length:2},()=>Array.from({length:8},()=>Array.from({length:8},()=>({terrain:2,flags:1,road:1})))),objects,objectTemplates};
}
function template(blocks=[],visits=[]) {
  const blockMask=new Uint8Array(6).fill(255),visitMask=new Uint8Array(6);
  for(const [row,bit] of blocks)blockMask[row]&=~(1<<bit);
  for(const [row,bit] of visits)visitMask[row]|=1<<bit;
  return {blockMask,visitMask};
}

test('minimap uses object masks at the H3M anchor, independently of tile transform and road flags',()=>{
  const pixels=render(mapWith([{x:7,y:7,z:0,templateIdx:0}],[template([[0,0],[5,7]])]));
  assert.deepEqual(pixels(0,2),forest);
  assert.deepEqual(pixels(7,7),forest);
  assert.deepEqual(pixels(1,2),grass);
  assert.deepEqual(pixels(0,0),grass);
});

test('minimap shows visits as open ground and colors the full blocked ownership footprint',()=>{
  const pixels=render(mapWith([
    {x:3,y:3,z:0,templateIdx:0},
    {x:7,y:7,z:0,templateIdx:1,owner:1},
    {x:4,y:4,z:0,templateIdx:2,owner:255}
  ],[template([[5,7]],[[5,7]]),template([[5,6],[5,7]]),template([[5,7]])]));
  assert.deepEqual(pixels(3,3),grass);
  assert.deepEqual(pixels(6,7),H3Map.PLAYER_COLORS[1]);
  assert.deepEqual(pixels(7,7),H3Map.PLAYER_COLORS[1]);
  assert.deepEqual(pixels(4,4),H3Map.NEUTRAL_COLOR);
});

test('minimap clips masks at map edges and separates surface and underground objects',()=>{
  const map=mapWith([{x:0,y:0,z:1,templateIdx:0}],[template([[0,0],[5,7]])]);
  assert.deepEqual(render(map,0)(0,0),grass);
  const pixels=render(map,1);
  assert.deepEqual(pixels(0,0),forest);
  assert.deepEqual(pixels(7,7),grass);
});
