import { locations } from "@/app/data";
import React from "react";

interface LocationModalProps {
  onClose: () => void;
}

const LocationModal: React.FC<LocationModalProps> = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-soft-blue/75 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-lg shadow-md flex flex-col w-1/2">
        <span
          className="absolute top-3 right-3 cursor-pointer text-5xl font-bold text-white hover:text-red-600"
          onClick={onClose}
        >
          &times;
        </span>
        {locations.map((location) => (
          <div
            className="my-6 border-2 border-solid rounded-md p-2"
            key={location.id}
          >
            <h1 className="text-2xl font-mono">
              <b>{location.street}</b> {location.number}
            </h1>
            <ul>
              <li>
                <div className="w-9 h-9 items-center justify-center rounded-full flex">
                  <img src="./pinBlack.svg" alt="" className="h-7" />
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationModal;
