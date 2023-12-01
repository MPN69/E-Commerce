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
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap -m-4 ">
          {products.map((product) => (
            <button
              className="lg:w-1/4 md:w-1/3 sm:w-1/2 p-4 w-full"
              key={product.id}
              onClick={() => handleOpenProduct(product)}
            >
              <div className="p-6 transition ease-out hover:scale-110 hover:drop-shadow-xl bg-white drop-shadow-md rounded-lg">
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
                  <p className="mt-1">{product.price}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
      {openProductModal && (
        <ProductModal product={selectedProduct} onClose={handleCloseProduct} />
      )}
    </section>
  );
};

export default Products;
