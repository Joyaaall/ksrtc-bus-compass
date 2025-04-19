
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Bus, MapPin } from "lucide-react";
import DepotsModal from "./DepotsModal";

interface HeaderProps {
  className?: string;
  onSelectDepot?: (name: string, location: [number, number]) => void;
}

const Header = ({ className, onSelectDepot }: HeaderProps) => {
  const [isDepotsModalOpen, setIsDepotsModalOpen] = useState(false);

  return (
    <header className={cn("bg-ksrtc-red text-white py-3 px-4 shadow-md", className)}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bus className="h-6 w-6" />
          <h1 className="text-xl font-bold">On Route Travel Solutions</h1>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsDepotsModalOpen(true)}
            className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 text-sm"
          >
            <MapPin className="h-4 w-4" />
            <span>Depots</span>
          </button>
        </div>
      </div>

      <DepotsModal 
        isOpen={isDepotsModalOpen}
        onClose={() => setIsDepotsModalOpen(false)}
        onSelectDepot={onSelectDepot}
      />
    </header>
  );
};

export default Header;
