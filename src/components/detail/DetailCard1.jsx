import { Heart } from "lucide-react";
import React from "react";

const DeatailCard1 = () => {
  const products = [
    {
      img: "/public/assets/images/Minimal.png",
      name: "Minimal Dress",
      price: 130,
    },
    {
      img: "/public/assets/images/Essentail.png",
      name: "Essentail Set",
      price: 109,
    },

    {
      img: "/public/assets/images/classic.png",
      name: "Classic Dress",
      price: 89,
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-sans ">
              People Also Bought
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:px-20 ">
          {products.map((product, index) => (
            <div
              key={index}
              className="    rounded-3xl mb-9   shadow-lg "
            >
              <div className="w-full   flex justify-center items-center overflow-hidden rounded-lg mb-4">
                <img
                  src={product.img}
                  alt={product.name}
                  className="object-cover  w-full"
                />
              </div>

              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900 lg:ml-2">
                  {product.name}
                </h3>
                <Heart className="text-gray-400 w-5 h-5 cursor-pointer lg:mr-6" />
              </div>

              <div className="flex justify-between items-center">
                <p className="text-blue-700 text-xl font-semibold lg:ml-3 mb-5">
                  ${product.price}
                </p>
              
                  <button className="bg-orange-400 text-white text-sm px-4 py-1 rounded-full lg:mr-4 mb-5">
                    Add to Cart
                  </button>
            
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeatailCard1;
