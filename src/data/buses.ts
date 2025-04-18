
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
  // Kannur → Kasaragod buses
  {
    id: 1,
    name: "KSRTC KNR-001",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:00 AM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704] // Kannur
  },
  {
    id: 2,
    name: "KSRTC KNR-002",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:15 AM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Same as above",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 3,
    name: "KSRTC KNR-003",
    from: "Kannur",
    to: "Kasaragod",
    departure: "12:30 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Same as above",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 4,
    name: "KSRTC KNR-004",
    from: "Kannur",
    to: "Kasaragod",
    departure: "1:40 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Same as above",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 5,
    name: "KSRTC KNR-005",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:00 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Standard route",
    route_sequence: ["Kannur", "Pappinisseri", "Thaliparamba", "Payyannur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 6,
    name: "KSRTC KNR-006",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:05 PM",
    bus_type: "Fast Passenger",
    route_highlights: "Pariyaaram Medical College, Payyannur, Karivellur, Cheruvathoor, Neeleswaram, Kanhangad, Cherkala",
    route_sequence: ["Kannur", "Pariyaaram Medical College", "Payyannur", "Karivellur", "Cheruvathoor", "Neeleswaram", "Kanhangad", "Cherkala", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 7,
    name: "KSRTC KNR-007",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:40 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Standard route",
    route_sequence: ["Kannur", "Thaliparamba", "Payyannur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 8,
    name: "KSRTC KNR-008",
    from: "Kannur",
    to: "Kasaragod",
    departure: "7:15 PM",
    bus_type: "Fast Passenger",
    route_highlights: "Thaliparamba, Payyannur, Kanhangad",
    route_sequence: ["Kannur", "Thaliparamba", "Payyannur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 9,
    name: "KSRTC KNR-009",
    from: "Kannur",
    to: "Kasaragod",
    departure: "8:10 PM",
    bus_type: "Limited Stop Fast Passenger",
    route_highlights: "Thaliparamba, Pariyaaram Medical College, Payyannur, Cheruvathoor, Neeleswaram, Kanhangad, Cherkala",
    route_sequence: ["Kannur", "Thaliparamba", "Pariyaaram Medical College", "Payyannur", "Cheruvathoor", "Neeleswaram", "Kanhangad", "Cherkala", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 10,
    name: "KSRTC KNR-010",
    from: "Kannur",
    to: "Kasaragod",
    departure: "10:30 PM",
    bus_type: "Super Deluxe (KSRTC-SWIFT)",
    route_highlights: "Via Payyannur",
    route_sequence: ["Kannur", "Payyannur", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 11,
    name: "KSRTC KNR-011",
    from: "Kannur",
    to: "Kasaragod",
    departure: "11:30 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pazhayangadi, Payyannur, Kanhangad",
    route_sequence: ["Kannur", "Pazhayangadi", "Payyannur", "Kanhangad", "Kasaragod"],
    depot_location: [11.8745, 75.3704]
  },

  // Trivandrum to Alappuzha buses
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
  {
    id: 13,
    name: "KSRTC TVM-002",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "12:01 AM",
    bus_type: "Super Fast",
    route_highlights: "Trivandrum → Kazhakkoottam → Kaniyapuram → Attingal → Chathannoor → Kollam → Karunagappalli → Kayamkulam → Haripad → Ambalapuzha → Alappuzha",
    route_sequence: ["Trivandrum", "Kazhakkoottam", "Kaniyapuram", "Attingal", "Chathannoor", "Kollam", "Karunagappalli", "Kayamkulam", "Haripad", "Ambalapuzha", "Alappuzha"],
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 14,
    name: "KSRTC TVM-003",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "12:30 AM",
    bus_type: "Super Fast",
    route_highlights: "Trivandrum → Attingal → Chathannoor → Kollam → Karunagappalli → Kayamkulam → Haripad → Alappuzha",
    route_sequence: ["Trivandrum", "Attingal", "Chathannoor", "Kollam", "Karunagappalli", "Kayamkulam", "Haripad", "Alappuzha"],
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 15,
    name: "KSRTC TVM-004",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "1:05 AM",
    bus_type: "Super Fast",
    route_highlights: "Trivandrum → Attingal → Kollam → Karunagappalli → Kayamkulam → Haripad → Alappuzha",
    route_sequence: ["Trivandrum", "Attingal", "Kollam", "Karunagappalli", "Kayamkulam", "Haripad", "Alappuzha"],
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 16,
    name: "KSRTC TVM-005",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "2:00 AM",
    bus_type: "Low Floor AC",
    route_highlights: "Trivandrum → Kazhakkoottam → Kaniyapuram → Attingal → Kollam → Karunagappalli → Kayamkulam → Haripad → Ambalapuzha → Alappuzha",
    route_sequence: ["Trivandrum", "Kazhakkoottam", "Kaniyapuram", "Attingal", "Kollam", "Karunagappalli", "Kayamkulam", "Haripad", "Ambalapuzha", "Alappuzha"],
    depot_location: [8.4855, 76.9492]
  },

  // Trivandrum to Kottayam buses
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
  
  // Example routes with Ernakulam for testing
  {
    id: 18,
    name: "KSRTC ERN-001",
    from: "Ernakulam",
    to: "Thiruvananthapuram",
    departure: "8:30 AM",
    bus_type: "Super Fast",
    route_highlights: "Ernakulam → Alappuzha → Kollam → Thiruvananthapuram",
    route_sequence: ["Ernakulam", "Alappuzha", "Kollam", "Thiruvananthapuram"],
    depot_location: [9.9312, 76.2673]
  },
  {
    id: 19,
    name: "KSRTC ERN-002",
    from: "Ernakulam",
    to: "Thiruvananthapuram",
    departure: "9:15 AM",
    bus_type: "Deluxe",
    route_highlights: "Ernakulam → Kottayam → Kollam → Thiruvananthapuram",
    route_sequence: ["Ernakulam", "Kottayam", "Kollam", "Thiruvananthapuram"],
    depot_location: [9.9312, 76.2673]
  },
  {
    id: 20,
    name: "KSRTC PAL-001",
    from: "Palakkad",
    to: "Thiruvananthapuram",
    departure: "7:30 AM",
    bus_type: "Super Fast",
    route_highlights: "Palakkad → Thrissur → Ernakulam → Kottayam → Kollam → Thiruvananthapuram",
    route_sequence: ["Palakkad", "Thrissur", "Ernakulam", "Kottayam", "Kollam", "Thiruvananthapuram"],
    depot_location: [10.7867, 76.6547]
  },
  {
    id: 21,
    name: "KSRTC TVM-007",
    from: "Thiruvananthapuram",
    to: "Thrissur",
    departure: "7:00 AM",
    bus_type: "Super Fast",
    route_highlights: "Thiruvananthapuram → Kollam → Kottayam → Ernakulam → Thrissur",
    route_sequence: ["Thiruvananthapuram", "Kollam", "Kottayam", "Ernakulam", "Thrissur"],
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 22,
    name: "KSRTC TVM-008",
    from: "Trivandrum",
    to: "Kottayam",
    departure: "1:00 AM",
    bus_type: "Super Fast",
    route_highlights: "Thiruvananthapuram → Venjaramoodu → Kilimanoor → Chadayamangalam → Ayoor → Valakom → Kottarakkara → Yenath → Adoor → Pandalam → Chengannur → Thiruvalla → Changanassery → Kottayam",
    route_sequence: ["Trivandrum", "Venjaramoodu", "Kilimanoor", "Chadayamangalam", "Ayoor", "Valakom", "Kottarakkara", "Yenath", "Adoor", "Pandalam", "Chengannur", "Thiruvalla", "Changanassery", "Kottayam"],
    depot_location: [8.4855, 76.9492]
  }
];
