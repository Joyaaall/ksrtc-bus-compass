
import { kannurKasaragodRoutes } from "./routeData/kannurKasaragod";
import { trivandrumAlappuzhaRoutes } from "./routeData/trivandrumAlappuzha";
import { trivandrumKottayamRoutes } from "./routeData/trivandrumKottayam";
import { otherRoutes } from "./routeData/otherRoutes";
import { ernakulamRoutes } from "./routeData/ernakulamRoutes";

export interface BusData {
  id: number;
  name: string;
  from: string;
  to: string;
  departure: string;
  bus_type: string;
  route_highlights: string;
  route_sequence: string[];
  depot_location: [number, number];
}

// Combine all route data into a single array
export const busData: BusData[] = [
  ...kannurKasaragodRoutes,
  ...trivandrumAlappuzhaRoutes,
  ...trivandrumKottayamRoutes,
  ...otherRoutes,
  ...ernakulamRoutes
];

// Debugging to ensure data is loaded correctly
console.log(`Total buses loaded: ${busData.length}`);
console.log(`Routes from Kannur to Kasaragod: ${kannurKasaragodRoutes.length}`);
console.log(`Routes from Trivandrum to Alappuzha: ${trivandrumAlappuzhaRoutes.length}`);
console.log(`Routes from Trivandrum to Kottayam: ${trivandrumKottayamRoutes.length}`);
console.log(`Routes from Ernakulam: ${ernakulamRoutes.length}`);
console.log(`Other routes: ${otherRoutes.length}`);
