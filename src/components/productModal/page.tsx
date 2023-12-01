import { products, Product } from "@/app/data";
import React, { useState } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div
        onClick={onClose}
        className="absolute top-0 left-0 w-full h-full bg-soft-blue/75"
      ></div>
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-md flex flex-col w-1/2">
        <div className="grid grid-flow-row grid-cols-2 gap-8">
          <div className="justify-center items-center">
            <img
              src={product.img}
              alt={product.title}
              className="p-2 m-1 self-center"
            />
          </div>
          <div className="">
            <h1 className="text-2xl font-serif">{product.title}</h1>
            <h2>Especificaciones del producto:</h2>
            <h3>Color: {product.color}</h3>
            <h3>Fecha de produccion: {product.createdAt}</h3>
            <h3>Precio: {product.price}</h3>
            <a href="" className="text-blue-400">Marca: {product.producer}</a>
          </div>
        </div>
        <h1 className="text-center text-gray-400 font-mono text-lg my-4">
          Productos similares
        </h1>
        <hr className="mb-6 w-9/12 self-center  rounded-full" />
        <div className="flex overflow-x-auto space-x-8 h-40">
          {products.map((product) => (
            <div key={product.id}>
              <div className="flex-none rounded-full w-28 h-28 bg-red-600 flex">
                <img
                  className="flex self-center align-middle object-cover"
                  src={product.img}
                  alt={product.title}
                />
              </div>
              <p className="text-center font-mono text-gray-400 text-sm mt-2">
                {product.producer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
