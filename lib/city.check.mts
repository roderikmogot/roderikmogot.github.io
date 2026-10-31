// Run: node lib/city.check.mts
import assert from "node:assert/strict";
import { buildings, districts } from "../config/content.ts";
import { layoutCity, LOT } from "./city.ts";

const { districts: placed } = layoutCity(districts, buildings);
const lots = placed.flatMap((d) => d.lots);

assert.equal(lots.length, buildings.length, "every building gets a lot");

for (const d of placed) {
  for (const { pos } of d.lots) {
    const [minX, minZ, maxX, maxZ] = d.bounds;
    assert.ok(pos[0] - LOT.w / 2 >= minX && pos[0] + LOT.w / 2 <= maxX, `${d.district.id} x`);
    assert.ok(pos[1] - LOT.d / 2 >= minZ && pos[1] + LOT.d / 2 <= maxZ, `${d.district.id} z`);
  }
}

const overlap = (a: number[], b: number[]) =>
  a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
for (const a of placed)
  for (const b of placed)
    if (a !== b) assert.ok(!overlap(a.bounds, b.bounds), `${a.district.id} overlaps ${b.district.id}`);

console.log(`ok: ${lots.length} lots in ${placed.length} districts, no overlaps`);
