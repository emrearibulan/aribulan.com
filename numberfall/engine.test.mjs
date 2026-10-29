import test from 'node:test';
import assert from 'node:assert/strict';
import {applyOp,generateLevel,bestRoute,MAX_ARMY,hash,localDay} from './engine.mjs';
test('arithmetic, zero floor, rounding and maximum',()=>{
 assert.equal(applyOp(12,{kind:'+',n:8}),20);
 assert.equal(applyOp(12,{kind:'×',n:2}),24);
 assert.equal(applyOp(13,{kind:'÷',n:2}),6);
 assert.equal(applyOp(5,{kind:'fight',n:6}),0);
 assert.equal(applyOp(5,{kind:'−',n:5}),0);
 assert.equal(applyOp(MAX_ARMY,{kind:'×',n:4}),MAX_ARMY);
});
test('campaign and 366 daily seeds each have a winning route',()=>{
 const levels=[...Array.from({length:24},(_,i)=>generateLevel(i+1)),...Array.from({length:366},(_,i)=>generateLevel(9,hash('day:'+i))),...Array.from({length:200},(_,i)=>generateLevel(Math.min(40,i+4),hash('frontier:'+(i+1))))];
 for(const l of levels){const route=bestRoute(l.start,l.rows);assert.equal(route.army,l.optimal);assert.ok(route.army>l.defence);assert.equal(l.rows.length,10);let army=l.start;for(let i=0;i<l.rows.length;i++){army=applyOp(army,l.rows[i][route.route[i]]);assert.ok(army>0);}}
});
test('computed best route matches exhaustive search over all 1024 paths',()=>{
 for(const level of [1,9,24,40]){const l=generateLevel(level);let maximum=0;for(let path=0;path<1024;path++){let n=l.start;for(let i=0;i<10;i++){n=applyOp(n,l.rows[i][(path>>i)&1]);if(n===0)break;}maximum=Math.max(maximum,n);}assert.equal(l.optimal,maximum);}
});
test('daily route is deterministic, and dates use the device calendar',()=>{
 assert.deepEqual(generateLevel(9,hash('2026-10-29')),generateLevel(9,hash('2026-10-29')));
 assert.notDeepEqual(generateLevel(9,hash('2026-10-29')).rows,generateLevel(9,hash('2026-10-30')).rows);
 assert.equal(localDay(new Date(2026,9,29,23,59)),'2026-10-29');
});
