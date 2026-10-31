import type { Building, District } from "../config/content";

export const LOT = { w: 7, d: 5, gap: 2, pad: 1.5 };

export interface Placed {
  building: Building;
  /** Lot centre (x, z). */
  pos: [number, number];
  /** Order the building rises in during the intro. */
  index: number;
}

export interface PlacedDistrict {
  district: District;
  /** Platform bounds: minX, minZ, maxX, maxZ. */
  bounds: [number, number, number, number];
  lots: Placed[];
}

export function layoutCity(districts: District[], buildings: Building[]) {
  let index = 0;
  const placed = districts.map((district): PlacedDistrict => {
    const own = buildings.filter((b) => b.district === district.id);
    const [ox, oz] = district.origin;
    const lots = own.map((building, i) => {
      const col = i % district.cols;
      const row = Math.floor(i / district.cols);
      const x = ox + LOT.pad + col * (LOT.w + LOT.gap) + LOT.w / 2;
      const z = oz + LOT.pad + row * (LOT.d + LOT.gap) + LOT.d / 2;
      return { building, pos: [x, z] as [number, number], index: index++ };
    });
    const cols = Math.min(district.cols, Math.max(own.length, 1));
    const rows = Math.max(Math.ceil(own.length / district.cols), 1);
    return {
      district,
      lots,
      bounds: [
        ox,
        oz,
        ox + LOT.pad * 2 + cols * LOT.w + (cols - 1) * LOT.gap,
        oz + LOT.pad * 2 + rows * LOT.d + (rows - 1) * LOT.gap,
      ],
    };
  });
  const all = placed.map((p) => p.bounds);
  const center: [number, number] = [
    (Math.min(...all.map((b) => b[0])) + Math.max(...all.map((b) => b[2]))) / 2,
    (Math.min(...all.map((b) => b[1])) + Math.max(...all.map((b) => b[3]))) / 2,
  ];
  return { districts: placed, center };
}
