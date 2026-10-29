// Deterministic, dependency-free game rules. Rendering never changes the arithmetic.
export const MAX_ARMY = 999999;
export const TITLES = ['The beginning','Green passage','Two roads','The old bridge','Rolling hills','The divide','Watchtower','Copper coast','High ground','The crossing','Wild garden','The ascent','Mossy walls','The long march','Quiet valley','The outpost','Stone country','Hidden trail','The frontier','Last light','The ramparts','Crown road','The final turn','Homeward'];
export function random(seed) { let a = seed >>> 0; return () => { a += 0x6D2B79F5; let t = a; t = Math.imul(t ^ t >>> 15, t | 1); t ^= t + Math.imul(t ^ t >>> 7, t | 61); return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
export function hash(text) { let h = 2166136261; for (const c of String(text)) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
export function applyOp(army, op) {
  const value = op.kind === '+' ? army + op.n : op.kind === '×' ? army * op.n : op.kind === '÷' ? Math.floor(army / op.n) : army - op.n;
  return Math.max(0, Math.min(MAX_ARMY, value));
}
export function label(op) { return `${op.kind === 'fight' ? '−' : op.kind} ${op.n.toLocaleString('en-US')}`; }
export function equation(before, op, after) { return `${before.toLocaleString('en-US')} ${label(op)} = ${after.toLocaleString('en-US')}${op.kind === '÷' && before % op.n ? ' (rounded down)' : ''}`; }
export function bestRoute(start, rows) { let value = start; const route = []; for (const row of rows) { const a = applyOp(value, row[0]), b = applyOp(value, row[1]); const lane = b > a ? 1 : 0; value = Math.max(a, b); route.push(lane); } return { army: value, route }; }
export function generateLevel(level = 1, seed = level * 731 + 31) {
  const rng = random(seed), pick = (a,b) => Math.floor(rng() * (b-a+1)) + a;
  const start = 12 + Math.min(24, level - 1), rows = []; let optimal = start;
  for (let i=0; i<10; i++) {
    let row;
    if (level === 1 && i === 0) row = [{kind:'+',n:8},{kind:'×',n:2}];
    else if (i % 3 === 2) { const cost = Math.max(2, Math.floor(optimal * (.1 + rng()*.2))); row = [{kind:'fight',n:cost},{kind:'fight',n:Math.max(1,cost + pick(-Math.ceil(cost*.5), Math.ceil(cost*.6)))}]; }
    else if (i === 4 || (level > 4 && i === 7)) { row = [{kind:'÷',n:pick(2,3)},{kind:'−',n:Math.max(2,Math.floor(optimal * (.35+rng()*.35)))}]; }
    else { const factor = pick(2,level > 8 ? 4 : 3); row = [{kind:'+',n:Math.max(3,Math.round(optimal*(.5+rng()*1.6)))},{kind:'×',n:factor}]; }
    if (rng()>.5 && !(level===1 && i===0)) row.reverse();
    rows.push(row); optimal = Math.max(...row.map(op=>applyOp(optimal,op)));
  }
  // Every operation is monotone, so the greedy route is also the global maximum.
  // Boss strength is always below it: every generated stage has a winning path.
  const defence = Math.max(1,Math.floor(optimal * Math.min(.82,.39+level*.018)));
  return { level, seed, start, rows, defence, optimal, title:TITLES[(level-1)%TITLES.length] };
}
export function starsFor(army, optimal) { const ratio = army / optimal; return ratio >= .92 ? 3 : ratio >= .75 ? 2 : 1; }
export function localDay(date = new Date()) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
