
import { BusWithDistance } from "@/services/busService";
import { formatDistance } from "@/services/mapService";
import { Bus, Clock, MapPin, Navigation, AlertTriangle, Route } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BusCardProps {
  bus: BusWithDistance;
  onGetDirections: (busId: number) => void;
}

const BusCard = ({ bus, onGetDirections }: BusCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-3">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center space-x-2">
            <Bus className="h-5 w-5 text-ksrtc-red" />
            <h3 className="font-semibold text-lg">{bus.name}</h3>
            <span className="bg-ksrtc-yellow/20 text-ksrtc-dark text-xs px-2 py-0.5 rounded-full">
              {bus.bus_type}
            </span>
          </div>
          
          <div className="mt-2 text-sm">
            <div className="flex items-center space-x-1 text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>{bus.from} → {bus.to}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-600 mt-1">
              <Clock className="h-4 w-4" />
              <span>Departure: {bus.departure}</span>
            </div>
          </div>
          
          {/* Boarding Point Information */}
          <div className="mt-2 flex items-start space-x-1">
            <MapPin className="h-4 w-4 text-green-600 mt-0.5" />
            <div>
              <span className="text-sm font-medium text-green-600">
                Board at: {bus.boardingPoint}
              </span>
              {bus.isFarAway && (
                <div className="flex items-center mt-1 text-xs text-amber-600">
                  <AlertTriangle className="h-3.5 w-3.5 mr-1" />
                  <span>Warning: You'll need to travel to {bus.boardingPoint} first ({formatDistance(bus.distance)} away)</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Route Sequence */}
          <div className="mt-2 flex items-start space-x-1">
            <Route className="h-4 w-4 text-gray-500 mt-0.5" />
            <div className="text-xs text-gray-500">
              <span className="font-semibold">Route: </span>
              {bus.route_sequence.join(" → ")}
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <span className="text-sm font-medium text-ksrtc-dark">
            {formatDistance(bus.distance)} away
          </span>
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center space-x-1 text-ksrtc-red hover:text-ksrtc-red hover:bg-ksrtc-red/5 border-ksrtc-red/30"
          onClick={() => onGetDirections(bus.id)}
        >
          <Navigation className="h-4 w-4" />
          <span>Get Directions</span>
        </Button>
      </div>
    </div>
  );
};

export default BusCard;
