import React from "react";
import { Heart, ChevronUp } from "lucide-react";

const ShopCard = () => {
  const Product = [
    {
      img: "/assets/images/shop/card.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/assets/images/shop/card1.png",
      name: "Essentail Set",
      price: 109,
    },
    {
      img: "/assets/images/shop/card2.png",
      name: "Classic Dress",
      price: 89,
    },
    {
      img: "/assets/images/shop/card1.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/assets/images/shop/card.png",
      name: "Essentail Set",
      price: 109,
    },
    {
      img: "/assets/images/shop/card1.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/assets/images/shop/card1.png",
      name: "Classic Dress",
      price: 89,
    },
    {
      img: "/assets/images/shop/card2.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/assets/images/shop/card.png",
      name: "Essentail Set",
      price: 109,
    },
  ];

  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3">
          <div className="flex flex-col  p-4 rounded-xl ">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">Product Categories</h1>
              <ChevronUp size={20} />
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 font-medium">
              <li className="hover:text-orange-500 cursor-pointer">Fashion</li>
              <li className="hover:text-orange-500 cursor-pointer">Men</li>
              <li className="hover:text-orange-500 cursor-pointer">Women</li>
              <li className="hover:text-orange-500 cursor-pointer">Denim</li>
              <li className="hover:text-orange-500 cursor-pointer">Dress</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Product.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
              <div className="h-52 sm:h-60 md:h-64 w-full flex justify-center items-center">
                <img
                  src={product.img}
                  alt={product.name}
                  className="lg:object-cover h-full w-full"
                />
              </div>
              <div className="px-4 py-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
                  <Heart className="text-gray-400 w-5 h-5 cursor-pointer" />
                </div>
                <div className="flex justify-between items-center mt-3">
                  <p className="text-blue-500 text-lg font-semibold">${product.price}</p>
                  <button className="bg-orange-400  text-white text-sm px-3 py-1  rounded-full">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
