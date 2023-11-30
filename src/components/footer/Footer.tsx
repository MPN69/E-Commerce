"use client";
import React, { ChangeEvent, useState } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [correoDestino, setCorreoDestino] = useState("");
  const [cuerpo, setCuerpo] = useState("");

  const handleAsuntoChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCuerpo(event.target.value);
  };

  const enviarCorreo = () => {
    // Reemplaza "destinatario@dominio.com" con la dirección de correo electrónico a la que deseas enviar el correo
    const destinatario = "penanavarromanuel85@gmail.com";

    // Construye el enlace de correo electrónico con el asunto
    const link = `mailto:${destinatario}?subject=Quiero Solicitar informacion&body=${encodeURIComponent(
      cuerpo
    )}`;

    // Abre el cliente de correo predeterminado
    window.location.href = link;
  };

  return (
    <footer className="text-gray-400 bg-themed-blue body-font">
      <button
        className="p-3 text-center bg-white hover:bg-gray-300 ease-in-out delay-100 duration-300 hover:text-gray-600 w-full"
        onClick={scrollToTop}
      >
        <p className="body-font">Go To Start</p>
      </button>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first w-full">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CONOCENOS
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              TRABAJA CON NOSOTROS
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              ¿NECESITAS AYUDA?
            </h2>
            <ul className="list-none mb-10">
              <li>
                <a className="text-gray-400 hover:text-white">First Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Second Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Third Link</a>
              </li>
              <li>
                <a className="text-gray-400 hover:text-white">Fourth Link</a>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              SUBSCRIBETE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Escribenos tu correo o numero para contactarte
                </label>
                <input
                  placeholder="Correo o Numero"
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  value={cuerpo}
                  onChange={handleAsuntoChange}
                  className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button
                className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={enviarCorreo}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <img src="/logo.svg" alt="Logo" />
            <span className="ml-3 text-xl">Negocio</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">
            © 2024 Negocio —
            <a
              href="https://www.linkedin.com/in/manuel-pena-navarro-129573287/"
              className="text-gray-500 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @axholutions
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
