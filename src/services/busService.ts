
import { busData, BusData } from "@/data/buses";
import { LatLngTuple } from "leaflet";
import { calculateDistance } from "./mapService";

export interface BusWithDistance extends BusData {
  distance: number;
}

export function findBuses(fromDepot: string, toDepot: string, userLocation?: LatLngTuple): BusWithDistance[] {
  // Filter buses that match the route
  const matchingBuses = busData.filter(bus => {
    const matchesFrom = bus.from === fromDepot || bus.route_highlights.includes(fromDepot);
    const matchesTo = bus.to === toDepot || bus.route_highlights.includes(toDepot);
    
    return matchesFrom && matchesTo;
  });
  
  // Add distance from user if location is available
  const busesWithDistance = matchingBuses.map(bus => {
    let distance = 0;
    if (userLocation) {
      distance = calculateDistance(userLocation, bus.depot_location);
    }
    
    return {
      ...bus,
      distance
    };
  });
  
  // Sort by distance if user location is available
  if (userLocation) {
    busesWithDistance.sort((a, b) => a.distance - b.distance);
  }
  
  return busesWithDistance;
}

export function searchBusesByDepot(depot: string): BusData[] {
  return busData.filter(bus => 
    bus.from === depot || 
    bus.to === depot || 
    bus.route_highlights.includes(depot)
  );
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
