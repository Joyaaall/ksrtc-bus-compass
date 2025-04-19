
import { BusData } from "../buses";

export const ernakulamRoutes: BusData[] = [
  {
    id: 47,
    name: "KSRTC EKM-001",
    from: "Ernakulam",
    to: "Thrissur",
    departure: "12:05 PM",
    bus_type: "KSRTC Fast Passenger",
    route_highlights: "Ernakulam → Aluva → Ankamaly → Chalakudy → Puthukkad → Thrissur",
    route_sequence: ["Ernakulam", "Aluva", "Ankamaly", "Chalakudy", "Puthukkad", "Thrissur"],
    depot_location: [9.9816, 76.2999]
  },
  {
    id: 48,
    name: "KSRTC EKM-002",
    from: "Ernakulam",
    to: "Palakkad",
    departure: "1:40 PM",
    bus_type: "KSRTC-SWIFT Trivandrum",
    route_highlights: "Ernakulam → Aluva → Ankamaly → Chalakudy → Puthukkad → Thrissur → Vadakkencherry → Alathur → Kuzhalmannam → Palakkad",
    route_sequence: ["Ernakulam", "Aluva", "Ankamaly", "Chalakudy", "Puthukkad", "Thrissur", "Vadakkencherry", "Alathur", "Kuzhalmannam", "Palakkad"],
    depot_location: [9.9816, 76.2999]
  },
  {
    id: 49,
    name: "KSRTC EKM-003",
    from: "Ernakulam",
    to: "Kozhikode",
    departure: "12:15 AM",
    bus_type: "KSRTC-SWIFT Trivandrum",
    route_highlights: "Ernakulam → Aluva → Angamaly → Chalakudy → Puthukad → Thrissur → Kunnamkulam → Edappal → Kuttipuram → Kottakkal → Kozhikode University → Kozhikode",
    route_sequence: ["Ernakulam", "Aluva", "Angamaly", "Chalakudy", "Puthukad", "Thrissur", "Kunnamkulam", "Edappal", "Kuttipuram", "Kottakkal", "Kozhikode University", "Kozhikode"],
    depot_location: [9.9816, 76.2999]
  },
  {
    id: 50,
    name: "KSRTC EKM-004",
    from: "Ernakulam",
    to: "Idukki",
    departure: "3:15 AM",
    bus_type: "KSRTC Ernakulam",
    route_highlights: "Ernakulam → Kakkanad → Pookkattupady → Vazhakulam → Perumbavoor → Kothamangalam → Neriamangalam → Chelachuvadu → Karimban → Thadiyampad → Cheruthoni → Kattappana → Idukki",
    route_sequence: ["Ernakulam", "Kakkanad", "Pookkattupady", "Vazhakulam", "Perumbavoor", "Kothamangalam", "Neriamangalam", "Chelachuvadu", "Karimban", "Thadiyampad", "Cheruthoni", "Kattappana", "Idukki"],
    depot_location: [9.9816, 76.2999]
  }
];
