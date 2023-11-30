"use client";
import { products, Product } from "@/app/data";
import ProductModal from "../productModal/page";
import React, { useState } from "react";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openProductModal, setOpenProductModal] = useState(false);

  const handleOpenProduct = (product: Product) => {
    setSelectedProduct(product);
    setOpenProductModal(true);
  };

  function handleCloseProduct() {
    setSelectedProduct(null);
    setOpenProductModal(false);
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 ">
            {products.map((product) => (
              <button className="lg:w-1/4 md:1/2 p-4 w-full transition ease-out hover:scale-110 hover:drop-shadow-xl bg-white drop-shadow-md rounded-lg m-8" key={product.id} onClick={() => handleOpenProduct(product)}>
                <div className="block relative h-48 rounded overflow-hidden">
                  <img
                    alt={product.title}
                    className="object-contain object-center w-full h-full block"
                    src={product.img}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    CATEGORY
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    The Catalyzer
                  </h2>
                  <p className="mt-1">$16.00</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="grid py-6 px-12 gap-8 sm:grid-cols-3 md:grid-cols-5 justify-center">
        {products.map((product) => (
          <button
            key={product.id}
            className="transition ease-out delay-400 hover:scale-110 hover:drop-shadow-xl bg-white rounded-lg p-6 h-full w-full drop-shadow-md grid place-content-between"
            onClick={() => handleOpenProduct(product)}
          >
            <img
              className="w-full h-auto bottom-2 justify-center"
              src={product.img}
              alt={product.title}
            />
            <div>
              <h3 className="font-thin text-start text-md font-serif">
                {product.title}
              </h3>
              <p className="text-start font-bold font-serif mt-1">
                Precio: {product.price}
              </p>
              <div className="flex flex-row gap-1 mt-2 h-6 w-3/4">
                <img
                  src="./star.svg"
                  alt="Star Rate"
                  className="h-full w-1/6"
                />
                <img
                  src="./star.svg"
                  alt="Star Rate"
                  className="h-full w-1/6"
                />
                <img
                  src="./star.svg"
                  alt="Star Rate"
                  className="h-full w-1/6"
                />
                <img
                  src="./star.svg"
                  alt="Star Rate"
                  className="h-full w-1/6"
                />
                <img
                  src="./grayStar.svg"
                  alt="Star Rate"
                  className="h-full w-1/6"
                />
                <p className="text-gray-500 font-serif">({product.producer})</p>
              </div>
            </div>
          </button>
        ))}
        {openProductModal && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseProduct}
          />
        )}
      </div>
    </div>
  );
};

export default Products;
