"use client";
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col bg-themed-blue">
      <button
        className="p-3 text-center bg-white hover:bg-gray-300 ease-in-out delay-100 duration-300 hover:text-gray-600"
        onClick={scrollToTop}
      >
        <p className="font-bold font-serif">Go To Start</p>
      </button>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-4 w-1/2 py-8">
          <div className="flex flex-col">
            <h1 className="Title text-white font-bold text-lg text-start mb-2">
              Conocenos
            </h1>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Blog
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Acerca de nosotros
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Trabaja con nosotros
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="Title text-white font-bold text-lg text-start mb-2">
              Trabaja con Nosotros
            </h1>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Vende con nosotros
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Publica tus productos
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Suministrate con nosotros
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="Title text-white font-bold text-lg text-start mb-2">
              ¿Necesitas Ayuda?
            </h1>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Preguntas frecuentes
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Soporte
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="Title text-white font-bold text-lg text-start mb-2">
              Metodos de Pago
            </h1>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Facturacion
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Pagos en linea
            </a>
            <a
              className="text-white text-sm my-0.5 ml-1 hover:text-blue-400 transition-colors"
              href="#"
            >
              Transferencias
            </a>
          </div>
        </div>
      </div>
      <hr className="mb-8 w-3/4 rounded-full self-center opacity-30" />
      <div className=" flex flex-col items-center">
        <img src="/logo.svg" alt="Logo Marca" className="w-16" />
        <div className="flex flex-row gap-8">
          <a className="text-white" href="#">Español</a>
          <a className="text-white" href="#">Frances</a>
          <a className="text-white" href="#">Ingles</a>
          <a className="text-white" href="#">Italiano</a>
          <a className="text-white" href="#">Esperanto</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
