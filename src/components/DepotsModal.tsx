
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import { depots } from "@/data/depots";
import { Button } from "@/components/ui/button";

interface DepotsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDepot?: (name: string, location: [number, number]) => void;
}

const DepotsModal = ({ isOpen, onClose, onSelectDepot }: DepotsModalProps) => {
  const sortedDepots = Object.entries(depots).sort(([a], [b]) => a.localeCompare(b));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold">
            <MapPin className="h-5 w-5 text-ksrtc-red" />
            Available Depots
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-2 mt-4">
          {sortedDepots.map(([name, location]) => (
            <Button
              key={name}
              variant="outline"
              className="w-full justify-start text-left hover:bg-ksrtc-red/5"
              onClick={() => {
                onSelectDepot?.(name, location);
                onClose();
              }}
            >
              <MapPin className="h-4 w-4 mr-2 text-ksrtc-red flex-shrink-0" />
              <span className="truncate">{name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DepotsModal;
