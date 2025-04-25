import { Star } from "lucide-react";
import React from "react";

const StoreCard = () => {
  const products = [
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },

    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },

    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
    { img: "/assets/images/store/box.png", name: "ABC" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:px-10 lg:px-35      sm:py-10">
      {products.map((product, index) => (
        <div
          key={index}
         className="flex flex-col items-center p-5 px-13   mt-6    rounded-4xl shadow-xl"
        >
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-auto overflow-hidden "
          />
          <h3 className="  relative bottom-5  leading-3  gap-2 font-bold font-serif text-2xl py-3">
            {product.name}
          </h3>
          <span className="flex gap-2 ">
            <Star className="text-orange-300" />{" "}
            <Star className="text-orange-300" />
            <Star className="text-orange-300" /> <Star /> <Star />
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoreCard;
