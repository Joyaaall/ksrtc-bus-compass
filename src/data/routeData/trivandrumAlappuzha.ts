
import { BusData } from "../buses";

export const trivandrumAlappuzhaRoutes: BusData[] = [
  {
    id: 12,
    name: "KSRTC TVM-001",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "12:00 AM",
    bus_type: "Low Floor AC",
    route_highlights: "Trivandrum → Kazhakkoottam → Kaniyapuram → Attingal → Kollam → Karunagappalli → Kayamkulam → Haripad → Ambalapuzha → Alappuzha",
    route_sequence: ["Trivandrum", "Kazhakkoottam", "Kaniyapuram", "Attingal", "Kollam", "Karunagappalli", "Kayamkulam", "Haripad", "Ambalapuzha", "Alappuzha"],
    depot_location: [8.4855, 76.9492]
  },
  // ... Add all Trivandrum to Alappuzha routes (id: 12-16)
];
