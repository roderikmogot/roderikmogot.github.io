import { buildings, districts, type DistrictId } from "@/config/content";
import { layoutCity } from "@/lib/city";

export const city = layoutCity(districts, buildings);

export const lots = city.districts.flatMap((d) => d.lots);

/** Centre (x, z) and span of the union of some districts' platforms. */
export function areaOf(ids: DistrictId[]) {
  const b = city.districts.filter((d) => ids.includes(d.district.id)).map((d) => d.bounds);
  const minX = Math.min(...b.map((v) => v[0]));
  const minZ = Math.min(...b.map((v) => v[1]));
  const maxX = Math.max(...b.map((v) => v[2]));
  const maxZ = Math.max(...b.map((v) => v[3]));
  return { x: (minX + maxX) / 2, z: (minZ + maxZ) / 2, span: Math.max(maxX - minX, maxZ - minZ) };
}

export const colorOf = Object.fromEntries(districts.map((d) => [d.id, d.color])) as Record<
  DistrictId,
  string
>;
