
import { BusData } from "../buses";

export const trivandrumKottayamRoutes: BusData[] = [
  {
    id: 17,
    name: "KSRTC TVM-006",
    from: "Trivandrum",
    to: "Kottayam",
    departure: "1:00 AM",
    bus_type: "Super Fast",
    route_highlights: "Thiruvananthapuram → Venjaramoodu → Kilimanoor → Chadayamangalam → Ayoor → Valakom → Kottarakkara → Yenath → Adoor → Pandalam → Chengannur → Thiruvalla → Changanassery → Kottayam",
    route_sequence: ["Thiruvananthapuram", "Venjaramoodu", "Kilimanoor", "Chadayamangalam", "Ayoor", "Valakom", "Kottarakkara", "Yenath", "Adoor", "Pandalam", "Chengannur", "Thiruvalla", "Changanassery", "Kottayam"],
    depot_location: [8.4855, 76.9492]
  },
  // ... Add all Trivandrum to Kottayam routes (id: 17-24)
];
