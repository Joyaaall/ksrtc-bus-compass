
import { useState, useEffect } from "react";
import { depots } from "@/data/depots";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPinIcon, Search, LocateFixed } from "lucide-react";
import { Label } from "@/components/ui/label";
import { LatLngTuple } from "leaflet";
import { findNearestDepot } from "@/services/busService";

interface SearchPanelProps {
  onSearch: (from: string, to: string) => void;
  userLocation: LatLngTuple | null;
  onFindNearestDepot: (depot: { name: string; location: LatLngTuple }) => void;
}

const SearchPanel = ({ onSearch, userLocation, onFindNearestDepot }: SearchPanelProps) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromSuggestions, setFromSuggestions] = useState<string[]>([]);
  const [toSuggestions, setToSuggestions] = useState<string[]>([]);
  const [showFromSuggestions, setShowFromSuggestions] = useState(false);
  const [showToSuggestions, setShowToSuggestions] = useState(false);

  const handleSearch = () => {
    if (from && to) {
      onSearch(from, to);
    }
  };

  const findNearest = () => {
    if (userLocation) {
      const nearest = findNearestDepot(userLocation, depots);
      onFindNearestDepot({ name: nearest.name, location: nearest.location });
      setFrom(nearest.name);
    }
  };

  useEffect(() => {
    if (from) {
      const filtered = Object.keys(depots).filter(depot => 
        depot.toLowerCase().includes(from.toLowerCase())
      );
      setFromSuggestions(filtered);
    } else {
      setFromSuggestions([]);
    }
  }, [from]);

  useEffect(() => {
    if (to) {
      const filtered = Object.keys(depots).filter(depot => 
        depot.toLowerCase().includes(to.toLowerCase())
      );
      setToSuggestions(filtered);
    } else {
      setToSuggestions([]);
    }
  }, [to]);

  return (
    <div className="bg-white rounded-lg shadow-md p-3 md:p-4">
      <div className="space-y-3 md:space-y-4">
        <div className="relative">
          <Label htmlFor="from-depot" className="text-sm font-medium flex items-center mb-1.5">
            <MapPinIcon className="w-4 h-4 mr-1 text-ksrtc-red" />
            From Depot
          </Label>
          <div className="flex space-x-2">
            <Input
              id="from-depot"
              placeholder="Enter departure depot"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              onFocus={() => setShowFromSuggestions(true)}
              onBlur={() => setTimeout(() => setShowFromSuggestions(false), 200)}
              className="flex-1 text-sm"
            />
            {userLocation && (
              <Button 
                type="button" 
                variant="outline" 
                size="icon" 
                className="flex-none" 
                onClick={findNearest}
                title="Find nearest depot"
              >
                <LocateFixed className="h-4 w-4" />
              </Button>
            )}
          </div>
          {showFromSuggestions && fromSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
              {fromSuggestions.map((depot) => (
                <div
                  key={depot}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setFrom(depot);
                    setShowFromSuggestions(false);
                  }}
                >
                  {depot}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <Label htmlFor="to-depot" className="text-sm font-medium flex items-center mb-1.5">
            <MapPinIcon className="w-4 h-4 mr-1 text-ksrtc-red" />
            To Depot
          </Label>
          <Input
            id="to-depot"
            placeholder="Enter destination depot"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            onFocus={() => setShowToSuggestions(true)}
            onBlur={() => setTimeout(() => setShowToSuggestions(false), 200)}
            className="text-sm"
          />
          {showToSuggestions && toSuggestions.length > 0 && (
            <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-48 overflow-y-auto">
              {toSuggestions.map((depot) => (
                <div
                  key={depot}
                  className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setTo(depot);
                    setShowToSuggestions(false);
                  }}
                >
                  {depot}
                </div>
              ))}
            </div>
          )}
        </div>

        <Button
          type="button"
          className="w-full bg-ksrtc-red hover:bg-ksrtc-red/90 text-white"
          onClick={handleSearch}
          disabled={!from || !to}
        >
          <Search className="mr-2 h-4 w-4" />
          Search Buses
        </Button>
      </div>
    </div>
  );
};

export default SearchPanel;
