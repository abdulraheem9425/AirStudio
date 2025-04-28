import { Heart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const products = [
    {
      img: "/assets/images/Minimal.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/assets/images/Essentail.png",
      name: "Essentail Set",
      price: 109,
    },
    {
      img: "/assets/images/classic.png",
      name: "Classic Dress",
      price: 89,
    },
    {
      img: "/assets/images/Headphone.png",
      name: "Headphone",
      price: 129,
    },
    {
      img: "/assets/images/Apple.png",
      name: "Apple Watch",
      price: 499,
    },
    {
      img: "/assets/images/laptop.png",
      name: "Mac Book Pro",
      price: 1999,
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-2 md:px-6 lg:px-20 py-5">
      <div>
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-400">
              Featured Products
            </h2>
            <p className="text-gray-600 tracking-wider">Discover our latest collection</p>
          </div>

          <button className="hover:underline">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="rounded-3xl mb-9 shadow-lg"
            >
              <div className="w-full flex justify-center items-center overflow-hidden rounded-lg mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover h-full w-full"
                />
              </div>

              <div className="flex justify-between items-start mb-2 px-4">
                <h3 className="text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <Heart className="text-gray-400 w-5 h-5 cursor-pointer" />
              </div>

              <div className="flex justify-between items-center px-4">
                <p className="text-blue-700 text-xl font-semibold">
                  ${product.price}
                </p>
                <Link to="/detail-card">
                  <button className="bg-orange-400 text-white text-sm px-4 py-1 mb-2 rounded-full">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
