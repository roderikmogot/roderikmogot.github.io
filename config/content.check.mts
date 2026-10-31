// Run: node config/content.check.mts
import assert from "node:assert/strict";
import { publications, stationFor } from "./content.ts";

const at = Object.fromEntries(publications.map((p) => [p.id, stationFor(p)]));
assert.equal(at.hydroponic, 1, "2022 paper follows the BCA intern Station");
assert.equal(at["chest-xray"], 2, "2023 paper follows the BCA Application Developer Station");
console.log("content ok");
