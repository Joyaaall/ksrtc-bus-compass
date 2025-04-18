export interface BusData {
  id: number;
  name: string;
  from: string;
  to: string;
  departure: string;
  bus_type: string;
  route_highlights: string;
  depot_location: [number, number]; // [lat, lng]
}

export const busData: BusData[] = [
  {
    id: 1,
    name: "KSRTC 123",
    from: "Ernakulam",
    to: "Kozhikode",
    departure: "8:30 AM",
    bus_type: "Ordinary",
    route_highlights: "Perumbavoor, Muvattupuzha, Kothamangalam",
    depot_location: [9.9312, 76.2673]
  },
  {
    id: 2,
    name: "KSRTC 456",
    from: "Thiruvananthapuram",
    to: "Kannur",
    departure: "7:15 AM",
    bus_type: "Super Fast",
    route_highlights: "Kollam, Alappuzha, Ernakulam, Thrissur, Kozhikode",
    depot_location: [8.5241, 76.9366]
  },
  {
    id: 3,
    name: "KSRTC 789",
    from: "Kottayam",
    to: "Palakkad",
    departure: "9:00 AM",
    bus_type: "Super Deluxe",
    route_highlights: "Ernakulam, Thrissur",
    depot_location: [9.5916, 76.5222]
  },
  {
    id: 4,
    name: "KSRTC 234",
    from: "Kozhikode",
    to: "Thiruvananthapuram",
    departure: "10:30 PM",
    bus_type: "Super Express",
    route_highlights: "Thrissur, Ernakulam, Alappuzha, Kollam",
    depot_location: [11.2588, 75.7804]
  },
  {
    id: 5,
    name: "KSRTC 567",
    from: "Thrissur",
    to: "Kottayam",
    departure: "7:45 AM",
    bus_type: "Ordinary",
    route_highlights: "Ernakulam, Aluva",
    depot_location: [10.5276, 76.2144]
  },
  {
    id: 6,
    name: "KSRTC 890",
    from: "Alappuzha",
    to: "Kozhikode",
    departure: "6:30 AM",
    bus_type: "Super Fast",
    route_highlights: "Ernakulam, Thrissur",
    depot_location: [9.4981, 76.3388]
  },
  {
    id: 7,
    name: "KSRTC 345",
    from: "Kollam",
    to: "Kannur",
    departure: "8:00 AM",
    bus_type: "Super Deluxe",
    route_highlights: "Alappuzha, Ernakulam, Thrissur, Kozhikode",
    depot_location: [8.8932, 76.6141]
  },
  {
    id: 8,
    name: "KSRTC 678",
    from: "Palakkad",
    to: "Thiruvananthapuram",
    departure: "9:15 PM",
    bus_type: "Super Express",
    route_highlights: "Thrissur, Ernakulam, Kollam",
    depot_location: [10.7867, 76.6547]
  },
  {
    id: 9,
    name: "KSRTC 901",
    from: "Kannur",
    to: "Ernakulam",
    departure: "7:00 AM",
    bus_type: "Super Fast",
    route_highlights: "Kozhikode, Thrissur",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 10,
    name: "KSRTC 432",
    from: "Pathanamthitta",
    to: "Kozhikode",
    departure: "8:45 AM",
    bus_type: "Super Express",
    route_highlights: "Kottayam, Ernakulam, Thrissur",
    depot_location: [9.2648, 76.7870]
  },
  {
    id: 7,
    name: "KSRTC KNR-001",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:00 AM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 8,
    name: "KSRTC KNR-002",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:15 AM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 9,
    name: "KSRTC KNR-003",
    from: "Kannur",
    to: "Kasaragod",
    departure: "12:30 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 10,
    name: "KSRTC KNR-004",
    from: "Kannur",
    to: "Kasaragod",
    departure: "1:40 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pappinisseri, Thaliparamba, Pariyaaram Medical College, Payyannur, Karivellur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 11,
    name: "KSRTC KNR-005",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:00 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Standard route",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 12,
    name: "KSRTC KNR-006",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:05 PM",
    bus_type: "Fast Passenger",
    route_highlights: "Pariyaaram Medical College, Payyannur, Karivellur, Cheruvathoor, Neeleswaram, Kanhangad, Cherkala",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 13,
    name: "KSRTC KNR-007",
    from: "Kannur",
    to: "Kasaragod",
    departure: "6:40 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Standard route",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 14,
    name: "KSRTC KNR-008",
    from: "Kannur",
    to: "Kasaragod",
    departure: "7:15 PM",
    bus_type: "Fast Passenger",
    route_highlights: "Thaliparamba, Payyannur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 15,
    name: "KSRTC KNR-009",
    from: "Kannur",
    to: "Kasaragod",
    departure: "8:10 PM",
    bus_type: "Limited Stop Fast Passenger",
    route_highlights: "Thaliparamba, Pariyaaram Medical College, Payyannur, Cheruvathoor, Neeleswaram, Kanhangad, Cherkala",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 16,
    name: "KSRTC KNR-010",
    from: "Kannur",
    to: "Kasaragod",
    departure: "10:30 PM",
    bus_type: "Super Deluxe (KSRTC-SWIFT)",
    route_highlights: "Via Payyannur",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 17,
    name: "KSRTC KNR-011",
    from: "Kannur",
    to: "Kasaragod",
    departure: "11:30 PM",
    bus_type: "Town to Town Ordinary",
    route_highlights: "Pazhayangadi, Payyannur, Kanhangad",
    depot_location: [11.8745, 75.3704]
  },
  {
    id: 18,
    name: "KSRTC TVM-001",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "12:00 AM",
    bus_type: "Low Floor AC",
    route_highlights: "Trivandrum → Kazhakkoottam → Kaniyapuram → Attingal → Kollam → Karunagappalli → Kayamkulam → Haripad → Ambalapuzha → Alappuzha",
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 19,
    name: "KSRTC TVM-002",
    from: "Trivandrum",
    to: "Alappuzha",
    departure: "12:01 AM",
    bus_type: "Super Fast",
    route_highlights: "Trivandrum → Kazhakkoottam → Kaniyapuram → Attingal → Chathannoor → Kollam → Karunagappalli → Kayamkulam → Haripad → Ambalapuzha → Alappuzha",
    depot_location: [8.4855, 76.9492]
  },
  {
    id: 25,
    name: "KSRTC TVM-008",
    from: "Trivandrum",
    to: "Kottayam",
    departure: "1:00 AM",
    bus_type: "Super Fast",
    route_highlights: "Thiruvananthapuram → Venjaramoodu → Kilimanoor → Chadayamangalam → Ayoor → Valakom → Kottarakkara → Yenath → Adoor → Pandalam → Chengannur → Thiruvalla → Changanassery → Kottayam",
    depot_location: [8.4855, 76.9492]
  }
];
