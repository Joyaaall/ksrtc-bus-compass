
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import SearchPanel from "@/components/SearchPanel";
import MapComponent from "@/components/MapComponent";
import ResultsPanel from "@/components/ResultsPanel";
import { useToast } from "@/hooks/use-toast";
import { findBuses, BusWithDistance } from "@/services/busService";
import { busData } from "@/data/buses";
import { depots } from "@/data/depots";
import { LatLngTuple } from "leaflet";
import { MapPin } from "lucide-react";
import { calculateDistance, formatDistance } from "@/services/mapService";

const Index = () => {
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const [buses, setBuses] = useState<BusWithDistance[]>([]);
  const [selectedDepot, setSelectedDepot] = useState<{ name: string; location: LatLngTuple } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [visibleDepotNames, setVisibleDepotNames] = useState<string[]>([]);
  
  const { toast } = useToast();

  // Get user location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude]);
          toast({
            title: "Location found",
            description: "We've detected your current location.",
            duration: 3000,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location error",
            description: "Could not access your location. Some features may be limited.",
            variant: "destructive",
            duration: 5000,
          });
          // Set default location to center of Kerala
          setUserLocation([10.1632, 76.6413]);
        }
      );
    }
  }, [toast]);

  const handleSearch = (from: string, to: string) => {
    setIsLoading(true);
    setVisibleDepotNames([from, to]);
    
    // Simulate loading for better UX
    setTimeout(() => {
      const results = findBuses(from, to, userLocation || undefined);
      setBuses(results);
      setIsLoading(false);
      setSearched(true);
      
      if (results.length > 0) {
        const withWarnings = results.filter(bus => bus.isFarAway).length;
        
        if (withWarnings > 0) {
          toast({
            title: `Found ${results.length} buses`,
            description: `${withWarnings} buses require traveling to a distant depot first.`,
            variant: "warning",
            duration: 5000,
          });
        } else {
          toast({
            title: "Buses found",
            description: `Found ${results.length} buses between ${from} and ${to}.`,
            duration: 3000,
          });
        }
      } else {
        toast({
          title: "No buses found",
          description: `No buses found that travel from ${from} to ${to} in that order.`,
          variant: "destructive",
          duration: 5000,
        });
      }
    }, 1000);
  };

  const handleGetDirections = (busId: number) => {
    const bus = buses.find(b => b.id === busId);
    if (bus && userLocation) {
      setSelectedDepot({
        name: bus.boardingPoint,
        location: bus.boardingLocation
      });
      
      toast({
        title: `Directions to ${bus.boardingPoint}`,
        description: `Distance: ${formatDistance(bus.distance)}. Route displayed on map.`,
        duration: 5000,
      });
    }
  };

  const handleFindNearestDepot = (depot: { name: string; location: LatLngTuple }) => {
    setSelectedDepot(depot);
    toast({
      title: "Nearest depot found",
      description: `${depot.name} is the nearest KSRTC depot to your location.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <SearchPanel 
              onSearch={handleSearch} 
              userLocation={userLocation}
              onFindNearestDepot={handleFindNearestDepot}
            />
            
            <ResultsPanel 
              buses={buses} 
              onGetDirections={handleGetDirections}
              isLoading={isLoading}
              searched={searched}
            />
          </div>
          
          {/* Map container */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md overflow-hidden h-[calc(100vh-120px)]">
            {!userLocation ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="bg-gray-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-ksrtc-red" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Enable location access</h3>
                  <p className="text-gray-500 max-w-sm">
                    Please allow location access to find the nearest bus depots and plan your journey better.
                  </p>
                </div>
              </div>
            ) : (
              <MapComponent 
                userLocation={userLocation} 
                selectedDepot={selectedDepot}
                depots={depots}
                visibleDepotNames={visibleDepotNames}
              />
            )}
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-3 text-center text-sm">
        <div className="container mx-auto">
          <p>KSRTC Bus Compass © 2025 | Kerala State Road Transport Corporation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
