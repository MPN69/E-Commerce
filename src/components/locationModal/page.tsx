import React from "react";
import { LocationClass } from "@/app/data";
import { locations } from "@/app/data";

interface LocationModalProps {
  onClose: () => void;
  onSelect: (location: LocationClass) => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ onClose, onSelect }) => {
  return (
    <div className="fixed top-0 w-full h-full flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="absolute top-0 left-0 w-full h-full bg-soft-blue/75"
      ></div>
      <div className="bg-white p-5 rounded-md drop-shadow-md flex flex-col w-3/4 md:w-1/2 z-10">
        {locations.map((location) => (
          <button
            className="my-4 rounded-md p-2 bg-white drop-shadow overflow-hidden"
            key={location.id}
            onClick={() => onSelect(location)}
          >
            <h1 className="text-md text-gray-600 md:text-2xl m-4 md:m-8">
              <b>{location.street}</b> {location.number}
            </h1>
            <div className="flex flex-col md:flex-row justify-center gap-2 md:gap-9 my-1">
              <h2 className="text-gray-400 text-sm">
                Latidud: {location.latitude}
              </h2>
              <h2 className="text-gray-400 text-sm">
                Longitude {location.longitude}
              </h2>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocationModal;
