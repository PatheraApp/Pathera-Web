import { readFileSync } from 'fs';

const src = readFileSync('src/lib/media.ts', 'utf8');
const ids = [...src.matchAll(/unsplash\('(photo-[^']+)'/g)].map((m) => m[1]);
const unique = [...new Set(ids)];

let fail = 0;
for (const id of unique) {
  const url = `https://images.unsplash.com/${id}?w=400&q=80`;
  const res = await fetch(url, { method: 'HEAD', redirect: 'follow' });
  const ok = res.status === 200;
  if (!ok) {
    fail++;
    console.log('FAIL', res.status, id);
  }
}
console.log(fail === 0 ? `All ${unique.length} media.ts URLs OK` : `${fail} failed`);
