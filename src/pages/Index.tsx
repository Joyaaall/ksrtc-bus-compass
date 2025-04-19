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
import { useIsMobile } from "@/hooks/use-mobile";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

const Index = () => {
  const [userLocation, setUserLocation] = useState<LatLngTuple | null>(null);
  const [buses, setBuses] = useState<BusWithDistance[]>([]);
  const [selectedDepot, setSelectedDepot] = useState<{
    name: string;
    location: LatLngTuple;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [visibleDepotNames, setVisibleDepotNames] = useState<string[]>([]);
  const {
    toast
  } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
        toast({
          title: "Location found",
          description: "We've detected your current location.",
          duration: 3000
        });
      }, error => {
        console.error("Error getting location:", error);
        toast({
          title: "Location error",
          description: "Could not access your location. Some features may be limited.",
          variant: "destructive",
          duration: 5000
        });
        setUserLocation([10.1632, 76.6413]);
      });
    }
  }, [toast]);

  const handleSearch = (from: string, to: string) => {
    setIsLoading(true);
    setVisibleDepotNames([from, to]);

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
            variant: "default",
            duration: 5000
          });
        } else {
          toast({
            title: "Buses found",
            description: `Found ${results.length} buses between ${from} and ${to}.`,
            duration: 3000
          });
        }
      } else {
        toast({
          title: "No buses found",
          description: `No buses found that travel from ${from} to ${to} in that order.`,
          variant: "destructive",
          duration: 5000
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
        duration: 5000
      });
    }
  };

  const handleFindNearestDepot = (depot: {
    name: string;
    location: LatLngTuple;
  }) => {
    setSelectedDepot(depot);
    toast({
      title: "Nearest depot found",
      description: `${depot.name} is the nearest KSRTC depot to your location.`,
      duration: 3000
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header onSelectDepot={(name, location) => {
        setSelectedDepot({ name, location });
        setVisibleDepotNames([name]);
        toast({
          title: "Depot selected",
          description: `Showing location of ${name} depot on the map.`,
          duration: 3000
        });
      }} />
      
      <main className="flex-1 container mx-auto px-2 py-2 md:px-4 md:py-4">
        {isMobile ? (
          <div className="flex flex-col h-[calc(100vh-64px)]">
            <div className="flex-none">
              <SearchPanel onSearch={handleSearch} userLocation={userLocation} onFindNearestDepot={handleFindNearestDepot} />
            </div>
            
            <div className="flex-1 mt-2">
              {!userLocation ? (
                <div className="h-full flex items-center justify-center bg-white rounded-lg shadow-md">
                  <div className="text-center p-4">
                    <div className="bg-gray-100 rounded-full p-4 mx-auto mb-4 w-14 h-14 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-ksrtc-red" />
                    </div>
                    <h3 className="text-base font-medium mb-2">Enable location access</h3>
                    <p className="text-gray-500 text-sm max-w-[250px] mx-auto">
                      Please allow location access to find the nearest bus depots.
                    </p>
                  </div>
                </div>
              ) : (
                <MapComponent userLocation={userLocation} selectedDepot={selectedDepot} depots={depots} visibleDepotNames={visibleDepotNames} />
              )}
            </div>

            {searched && (
              <Drawer>
                <DrawerTrigger className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-ksrtc-red text-white px-4 py-2 rounded-full shadow-lg flex items-center space-x-2">
                  <span>View {buses.length} Results</span>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh] overflow-y-auto">
                  <ResultsPanel buses={buses} onGetDirections={handleGetDirections} isLoading={isLoading} searched={searched} />
                </DrawerContent>
              </Drawer>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1 space-y-4">
              <SearchPanel onSearch={handleSearch} userLocation={userLocation} onFindNearestDepot={handleFindNearestDepot} />
              <ResultsPanel buses={buses} onGetDirections={handleGetDirections} isLoading={isLoading} searched={searched} />
            </div>
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
                <MapComponent userLocation={userLocation} selectedDepot={selectedDepot} depots={depots} visibleDepotNames={visibleDepotNames} />
              )}
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-800 text-gray-300 py-2 text-xs md:text-sm text-center">
        <div className="container mx-auto px-2">
          <p>On Route Travel Solutions © 2025 | Data From Kbuses</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
