
import { busData, BusData } from "@/data/buses";
import { depots } from "@/data/depots";
import { LatLngTuple } from "leaflet";
import { calculateDistance } from "./mapService";

export interface BusWithDistance extends BusData {
  distance: number;
  boardingPoint: string;
  boardingLocation: LatLngTuple;
  isFarAway: boolean;
}

export function findBuses(fromDepot: string, toDepot: string, userLocation?: LatLngTuple): BusWithDistance[] {
  console.log(`Searching for buses from ${fromDepot} to ${toDepot}`);
  console.log(`Total buses available for search: ${busData.length}`);
  
  // Filter buses that match the route in correct order
  const matchingBuses = busData.filter(bus => {
    const route = bus.route_sequence;
    const fromIndex = route.indexOf(fromDepot);
    const toIndex = route.indexOf(toDepot);
    
    // Valid if both depots exist and are in correct order
    return fromIndex !== -1 && toIndex !== -1 && fromIndex < toIndex;
  });
  
  console.log(`Found ${matchingBuses.length} matching buses`);
  
  // Add distance and boarding point info
  const busesWithDistance = matchingBuses.map(bus => {
    // Find the earliest valid boarding point (fromDepot or a subsequent stop)
    const fromIndex = bus.route_sequence.indexOf(fromDepot);
    const boardingPoint = bus.route_sequence[fromIndex];
    const boardingLocation = depots[boardingPoint] || bus.depot_location;
    
    let distance = 0;
    if (userLocation) {
      distance = calculateDistance(userLocation, boardingLocation);
    }
    
    // Consider a bus "far away" if the boarding point is far from the requested from depot
    // and user would need to travel a significant distance to reach it
    const isFarAway = boardingPoint !== fromDepot && distance > 50; // More than 50km is considered far away
    
    return {
      ...bus,
      distance,
      boardingPoint,
      boardingLocation,
      isFarAway
    };
  });
  
  // Sort by distance if user location is available
  if (userLocation) {
    busesWithDistance.sort((a, b) => a.distance - b.distance);
  }
  
  return busesWithDistance;
}

export function searchBusesByDepot(depot: string): BusData[] {
  console.log(`Searching for buses connecting to depot: ${depot}`);
  console.log(`Total buses available for search: ${busData.length}`);
  
  const result = busData.filter(bus => 
    bus.route_sequence.includes(depot)
  );
  
  console.log(`Found ${result.length} buses connecting to ${depot}`);
  return result;
}

export function findNearestDepot(userLocation: LatLngTuple, depots: Record<string, LatLngTuple>): { name: string, location: LatLngTuple, distance: number } {
  let nearestDepot = '';
  let minDistance = Infinity;
  
  Object.entries(depots).forEach(([name, location]) => {
    const distance = calculateDistance(userLocation, location);
    if (distance < minDistance) {
      minDistance = distance;
      nearestDepot = name;
    }
  });
  
  return {
    name: nearestDepot,
    location: depots[nearestDepot],
    distance: minDistance
  };
}
