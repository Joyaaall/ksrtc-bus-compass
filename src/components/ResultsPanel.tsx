
import { BusWithDistance } from "@/services/busService";
import BusCard from "./BusCard";
import { AlertCircle, Bus } from "lucide-react";

interface ResultsPanelProps {
  buses: BusWithDistance[];
  onGetDirections: (busId: number) => void;
  isLoading: boolean;
  searched: boolean;
}

const ResultsPanel = ({ buses, onGetDirections, isLoading, searched }: ResultsPanelProps) => {
  if (isLoading) {
    return (
      <div className="p-4 flex flex-col items-center justify-center min-h-[200px]">
        <div className="animate-pulse w-6 h-6 bg-gray-300 rounded-full mb-3"></div>
        <p className="text-gray-500">Searching for buses...</p>
      </div>
    );
  }

  if (buses.length === 0 && searched) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="bg-red-100 rounded-full p-3 mb-3">
            <AlertCircle className="h-6 w-6 text-ksrtc-red" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">No buses found</h3>
          <p className="text-gray-500 text-center">
            We couldn't find any buses between these depots. Please try different locations or check back later.
          </p>
        </div>
      </div>
    );
  }

  if (buses.length === 0 && !searched) {
    return (
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="bg-ksrtc-light rounded-full p-3 mb-3">
            <Bus className="h-6 w-6 text-ksrtc-red" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-1">Search for KSRTC buses</h3>
          <p className="text-gray-500 text-center">
            Select your departure and destination depots to find available buses.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="px-4 py-2 bg-ksrtc-light rounded-t-lg">
        <p className="text-sm font-medium text-ksrtc-dark">
          Found {buses.length} {buses.length === 1 ? "bus" : "buses"}
        </p>
      </div>
      <div className="p-4 bg-white rounded-b-lg shadow-md max-h-[calc(100vh-450px)] overflow-y-auto">
        {buses.map((bus) => (
          <BusCard key={bus.id} bus={bus} onGetDirections={onGetDirections} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPanel;
