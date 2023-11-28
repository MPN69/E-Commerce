import React from "react";
import profile from "../../assets/img/fondo2.jpg";

const Navbar = () => {
  return (
    <div className="navbar w-full p-5 flex items-center justify-between bg-themed-blue">
      <div className="logo flex items-center font-bold gap-2.5">
        <img src="/logo.svg" alt="Logo Empresa" />
        <span className="text-white text-xl">WebPageName</span>
      </div>
      <div className="icons flex items-center gap-2.5">
        <img src="/search.svg" alt="Buscar" className="icon max-sm:hidden" />
        <img
          src="/product.svg"
          alt="Shopping cart Icon"
          className="icon max-sm:hidden"
        />
        <div className="notification relative">
          <img src="/notifications.svg" alt="Notifications" />
          <span className="bg-red-600 text-white h-4 w-4 rounded-full absolute -top-2.5 -right-2.5 flex items-center justify-center text-xs">
            1
          </span>
        </div>
        <div className="user flex items-center gap-2.5">
          <img
            src={profile.src}
            alt="Profile Photo"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-white">Manuel Peña</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
