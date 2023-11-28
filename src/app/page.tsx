"use client"
import LocationModal from "@/components/locationModal/page";
import React, { useState } from "react";

export default function Home() {
  const [openAdress, setOpenAdress] = useState(false);

  function handleOpenAdress() {
    setOpenAdress(!openAdress);
  }

  // function handleCloseModal(){
  //   setOpenAdress(false);
  // }

  return (
    <>
      <button
        onClick={handleOpenAdress}
        className="bg-cyan-600 bg-gradient-to-r from-cyan-800 to-cyan-600 flex rounded-2xl px-2 py-1 w-fit mt-2 ml-2 hover:bg-cyan-400 transition hover:drop-shadow-xl ease-out delay-100 hover:scale-105 hover:translate-x-3"
      >
        <img src="/pin.svg" alt="Location" className="w-5 align-middle ml-1" />
        <h2 className="text-white align-middle ml-1 mr-2.5 pb-1">
          <b> Deliver to: </b> Alvaro Obregón 408
        </h2>
      </button>
      {openAdress && <LocationModal onClose={handleOpenAdress}/>}
    </>
  );
}
