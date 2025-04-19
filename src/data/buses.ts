
import { kannurKasaragodRoutes } from "./routeData/kannurKasaragod";
import { trivandrumAlappuzhaRoutes } from "./routeData/trivandrumAlappuzha";
import { trivandrumKottayamRoutes } from "./routeData/trivandrumKottayam";
import { otherRoutes } from "./routeData/otherRoutes";

export interface BusData {
  id: number;
  name: string;
  from: string;
  to: string;
  departure: string;
  bus_type: string;
  route_highlights: string;
  route_sequence: string[];
  depot_location: [number, number]; // [lat, lng]
}

export const busData: BusData[] = [
  ...kannurKasaragodRoutes,
  ...trivandrumAlappuzhaRoutes,
  ...trivandrumKottayamRoutes,
  ...otherRoutes
];
