
import { BusData } from "../buses";

export const kannurKasaragodRoutes: BusData[] = [
  {
    id: 1,
    name: "KSRTC KNR-001",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:00 AM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  // ... Add all Kannur to Kasaragod routes (id: 1-11)
];
