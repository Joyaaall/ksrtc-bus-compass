import { LatLngTuple } from "leaflet";

interface RouteResponse {
  code: string;
  routes: {
    geometry: {
      coordinates: [number, number][];
      type: string;
    };
    legs: any[];
    distance: number;
    duration: number;
    weight: number;
  }[];
  waypoints: any[];
}

// Define a custom GeoJSON Feature type that allows for any geometry type
interface CustomGeoJSONFeature extends Omit<GeoJSON.Feature, 'geometry'> {
  geometry: {
    type: string;
    coordinates: number[][] | number[][][] | number[][][][];
  };
  properties?: {
    distance?: number;
    duration?: number;
    [key: string]: any;
  };
}

export async function getRoute(from: LatLngTuple, to: LatLngTuple): Promise<CustomGeoJSONFeature | null> {
  try {
    // Format coordinates from [lat, lng] to [lng, lat] for OSRM
    const fromLng = from[1];
    const fromLat = from[0];
    const toLng = to[1]; 
    const toLat = to[0];
    
    // Make request to OSRM
    const response = await fetch(
      `https://router.project-osrm.org/route/v1/driving/${fromLng},${fromLat};${toLng},${toLat}?overview=full&geometries=geojson`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch route');
    }
    
    const data: RouteResponse = await response.json();
    
    if (data.code !== 'Ok' || !data.routes.length) {
      throw new Error('No route found');
    }
    
    // Create GeoJSON Feature from the route geometry
    const feature: CustomGeoJSONFeature = {
      type: 'Feature',
      properties: {
        distance: data.routes[0].distance,
        duration: data.routes[0].duration
      },
      geometry: data.routes[0].geometry
    };
    
    return feature;
  } catch (error) {
    console.error('Error fetching route:', error);
    return null;
  }
}

export function calculateDistance(point1: LatLngTuple, point2: LatLngTuple): number {
  const R = 6371; // Earth's radius in km
  const dLat = (point2[0] - point1[0]) * Math.PI / 180;
  const dLon = (point2[1] - point1[1]) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(point1[0] * Math.PI / 180) * Math.cos(point2[0] * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
}

export function formatDistance(distance: number): string {
  if (distance < 1) {
    return `${Math.round(distance * 1000)} m`;
  }
  return `${distance.toFixed(1)} km`;
}

export function formatDuration(durationInSeconds: number): string {
  const hours = Math.floor(durationInSeconds / 3600);
  const minutes = Math.floor((durationInSeconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours} hr ${minutes} min`;
  }
  return `${minutes} min`;
}
