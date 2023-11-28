import { products, Product } from "@/app/data";
import React from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {

    if(!product){
        return null;
    }
    
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      {/* Fondo del modal */}
      <div
        onClick={onClose}
        className="absolute top-0 left-0 w-full h-full bg-soft-blue/75"
      ></div>

      {/* Contenido del modal */}
      <div className="relative z-10 bg-white p-5 rounded-lg shadow-md flex flex-col w-1/2">
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
            <h3 className="text-blue-400 cursor-pointer">
              Marca: {product.producer}
            </h3>
          </div>
        </div>
        <div className="grid grid-flow-col">
          <div className="bg-blue-600 flex-wrap h-"></div>
        </div>

        {/* <div
          className="my-6 border-2 border-solid rounded-md p-2"
          key={product.id}
        >
          <h1 className="text-2xl font-mono">
            <b>{product.producer}</b> {product.title}
          </h1>
          <ul>
            <li>
              <div className="w-9 h-9 items-center justify-center rounded-full flex">
                <img src="./pinBlack.svg" alt="" className="h-7" />
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default ProductModal;
