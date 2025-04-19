
import { BusData } from "../buses";

export const otherRoutes: BusData[] = [
  {
    id: 25,
    name: "KSRTC TVM-014",
    from: "Trivandrum",
    to: "Ernakulam",
    departure: "12:30 AM",
    bus_type: "Super Fast",
    route_highlights: "Thiruvananthapuram → Kaniyapuram → Attingal → Kollam → Karunagappally → Kayamkulam → Haripad → Ambalapuzha → Alappuzha → Cherthala → Ernakulam",
    route_sequence: ["Thiruvananthapuram", "Kaniyapuram", "Attingal", "Kollam", "Karunagappally", "Kayamkulam", "Haripad", "Ambalapuzha", "Alappuzha", "Cherthala", "Ernakulam"],
    depot_location: [8.4855, 76.9492]
  },
  // ... Add remaining routes (id: 25-45)
];
