
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getRoute } from "@/services/mapService";
import { LatLngTuple } from "leaflet";

interface MapComponentProps {
  userLocation: LatLngTuple | null;
  selectedDepot: { name: string; location: LatLngTuple } | null;
  depots: Record<string, LatLngTuple>;
  visibleDepotNames: string[];
}

const MapComponent = ({ userLocation, selectedDepot, depots, visibleDepotNames }: MapComponentProps) => {
  const mapRef = useRef<L.Map | null>(null);
  const routeLayerRef = useRef<L.GeoJSON | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) {
      // Create map centered on Kerala
      mapRef.current = L.map("map", {
        center: [10.1632, 76.6413], // Center of Kerala
        zoom: 8,
        layers: [
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          })
        ]
      });

      // Add markers layer group
      markersLayerRef.current = L.layerGroup().addTo(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Update markers when user location changes
  useEffect(() => {
    if (!mapRef.current || !markersLayerRef.current) return;

    // Clear existing markers
    markersLayerRef.current.clearLayers();

    // Add user location marker if available
    if (userLocation) {
      const userIcon = L.divIcon({
        className: "user-marker",
        html: '<div class="flex items-center justify-center w-full h-full"><div class="animate-pulse-glow bg-blue-500 w-2 h-2 rounded-full"></div></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      const userMarker = L.marker(userLocation, { icon: userIcon })
        .addTo(markersLayerRef.current)
        .bindPopup("Your Location");
    }

    // Add depot markers
    Object.entries(depots).forEach(([name, location]) => {
      if (visibleDepotNames.length === 0 || visibleDepotNames.includes(name)) {
        const isSelected = selectedDepot?.name === name;
        
        const depotIcon = L.divIcon({
          className: "depot-marker",
          html: `<div class="flex items-center justify-center w-full h-full ${isSelected ? 'bg-ksrtc-red' : 'bg-ksrtc-yellow'} text-xs font-bold">${name.charAt(0)}</div>`,
          iconSize: [isSelected ? 32 : 24, isSelected ? 32 : 24],
          iconAnchor: [isSelected ? 16 : 12, isSelected ? 16 : 12]
        });

        const depotMarker = L.marker(location, { icon: depotIcon })
          .addTo(markersLayerRef.current)
          .bindPopup(`<b>${name}</b><br>KSRTC Bus Depot`);
          
        if (isSelected) {
          depotMarker.openPopup();
        }
      }
    });

  }, [userLocation, selectedDepot, depots, visibleDepotNames]);

  // Draw route when selectedDepot changes
  useEffect(() => {
    const fetchAndDrawRoute = async () => {
      if (!mapRef.current || !userLocation || !selectedDepot) return;

      // Remove existing route if any
      if (routeLayerRef.current) {
        mapRef.current.removeLayer(routeLayerRef.current);
        routeLayerRef.current = null;
      }

      try {
        // Get the route
        const routeData = await getRoute(userLocation, selectedDepot.location);
        
        if (routeData) {
          // Create and add GeoJSON layer
          routeLayerRef.current = L.geoJSON(routeData, {
            style: {
              color: "#d32f2f",
              weight: 5,
              opacity: 0.7,
              lineJoin: "round",
              dashArray: "5, 10"
            }
          }).addTo(mapRef.current);

          // Fit map to route
          const bounds = routeLayerRef.current.getBounds();
          mapRef.current.fitBounds(bounds, {
            padding: [50, 50],
            maxZoom: 13
          });
        }
      } catch (error) {
        console.error("Error fetching and drawing route:", error);
      }
    };

    fetchAndDrawRoute();
  }, [userLocation, selectedDepot]);

  return <div id="map" className="w-full h-full rounded-lg" />;
};

export default MapComponent;
