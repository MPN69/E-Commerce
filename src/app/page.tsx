"use client";
import LocationModal from "@/components/locationModal/page";
import { LocationClass } from "./data";
import { locations } from "./data";
import React, { useState } from "react";

interface HomeProps{}

export default function Home(props: HomeProps) {
  const [openAdress, setOpenAdress] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  function handleOpenAdress() {
    setOpenAdress(!openAdress);
  }

  function handleLocationSelect(location: LocationClass){
    setSelectedLocation(location);
    setOpenAdress(false);
  }

  return (
    <>
      <button
        onClick={handleOpenAdress}
        className="drop-shadow-md bg-white justify-center rounded-md"
        //className="bg-cyan-600 bg-gradient-to-r from-cyan-800 to-cyan-600 flex rounded-2xl px-2 py-1 w-fit mt-2 ml-2 hover:bg-cyan-400 transition hover:drop-shadow-xl ease-out delay-100 hover:scale-105 hover:translate-x-3"
      >
        <img src="/pin.svg" alt="Location" className="w-5 align-middle ml-1" />
        <h2 className="text-gray-600 align-middle ml-1 mr-2.5 pb-1">
          <b> Deliver to: </b> {selectedLocation.street} {selectedLocation.number}
        </h2>
      </button>
      {openAdress && <LocationModal onClose={handleOpenAdress} onSelect={handleLocationSelect} />}
    </>
  );
}
