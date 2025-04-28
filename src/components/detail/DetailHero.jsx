import React from "react";

const DetailHero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 mt-5 gap-6 px-4 lg:px-10 mt-15">
      <div className="lg:col-span-5 flex flex-col lg:flex-row gap-4 items-center lg:items-start">
        <div className="flex flex-row lg:flex-col gap-3 overflow-auto scrollbar-hide">
          <img
            src="/assets/images/detail1.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 1"
          />
          <img
            src="/assets/images/detail2.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 2"
          />
          <img
            src="/assets/images/detail3.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 3"
          />
          <img
            src="/assets/images/detail4.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 4"
          />
          <img
            src="/assets/images/detail5.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 5"
          />
          <img
            src="/assets/images/detail6.png"
            className="w-32 h-20 lg:w-40 lg:h-22 rounded-lg hover:border-2 snap-center"
            alt="Thumbnail 6"
          />
        </div>

        <div>
          <img
            src="/assets/images/detail.png"
            className="w-full max-w-md lg:w-200 max-h-screen object-cover rounded-md"
            alt="Main Product"
          />
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold">Ribbed Tank Top</h1>

        <div className="flex flex-wrap items-center gap-3">
          <button className="border px-4 py-1 text-sm rounded">
            Best Seller
          </button>
          <span className="flex items-center text-sm text-gray-600">
            <img
              src="/assets/images/current.png"
              alt="Cart"
              className="w-4 h-4 mr-2"
            />
            Selling fast! 56 people have this in their carts.
          </span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-2xl font-semibold text-orange-400">$16.95</span>
          <span className="text-2xl text-gray-400 line-through">$18.00</span>
          <span className="bg-yellow-500 text-sm px-3 text-white py-1 rounded-full">
            20% OFF
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-black text-white w-8 h-6 flex items-center justify-center  text-sm font-semibold">
            20
          </div>
          <span className="text-sm font-medium">
            People are viewing this right now
          </span>
        </div>

        <div className="border border-orange-400 lg:p-4   w-full max-w-xs sm:p-5">
          <p className="font-semibold text-sm text-center">
            {" "}
            <img
              src="/assets/images/watch.png"
              alt=""
              className=" relative  lg:relative top-4 left-7 "
            />{" "}
            HURRY UP! SALE ENDS IN:
          </p>
          <div className="flex gap-2 mt-1 text-orange-500 font-semibold flex-wrap">
            <span>72 Days</span> : <span>1 Hour</span> : <span>15 Mins</span> :{" "}
            <span>10 Secs</span>
          </div>
        </div>

        <div>
          <h5 className="mb-2">
            Color: <strong>Beige</strong>
          </h5>
          <div className="flex gap-3">
            <button className="w-8 h-8 rounded-full bg-gray-100  border" />
            <button className="w-5 h-5 rounded-full bg-gray-200  mt-2" />
            <button className="w-5 h-5 rounded-full bg-gray-300 mt-2" />
            <button className="w-5 h-5 rounded-full bg-gray-400  mt-2" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <h5>
              Size: <strong>M</strong>
            </h5>
            <span className="text-sm lg:mr-25 underline">Find your size</span>
          </div>
          <div className="flex gap-3 flex-wrap">
            <button className="w-8 h-9 border border-gray-300  hover:bg-black hover:text-white">
              S
            </button>
            <button className="w-8 h-9 border border-gray-300  hover:bg-black hover:text-white">
              M
            </button>
            <button className="w-8 h-9 border border-gray-300  hover:bg-black hover:text-white">
              L
            </button>
            <button className="w-8 h-9 border border-gray-300  hover:bg-black hover:text-white">
              XL
            </button>
          </div>
        </div>

        <div>
          <h5 className="mb-1 font-bold">Quantity:</h5>
          <div className=" flex items-center justify-between bg-gray-200 w-32 rounded px-3 py-2 mx-auto sm:mx-0 ">
            <img
              src="/assets/images/minus.png"
              alt="Minus"
              className="h-4 w-4"
            />
            <span className="font-medium">1</span>
            <img src="/assets/images/plus.png" alt="Plus" className="h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-black text-white  md:w-auto py-3 px-6 lg:w-140 rounded-full ">
            Add to cart - $16.95
          </button>
          <div className="flex gap-2">
            <img src="/assets/images/Link.png" alt="Link" className="w-7 h-7" />
            <img
              src="/assets/images/Icon.png"
              alt="Icon"
              className="w-7 h-7 "
            />
          </div>
        </div>

        <button className="bg-yellow-500 text-blue-950 font-semibold w-full py-3 rounded-full flex items-center justify-center lg:w-162 gap-2">
          Buy with{" "}
          <span className="italic font-bold">
            Pay<span className="text-blue-600">Pal</span>
          </span>
        </button>
        <a href="#" className="underline text-sm text-center">
          More payment options
        </a>

        <div className="flex flex-wrap gap-10 text-sm  mt-2">
          <span className="cursor-pointer flex items-center">
            <img src="/assets/images/compare.png" alt="" className="h-4 mr-2" />
            Compare color
          </span>
          <span className="cursor-pointer flex items-center">
            <img
              src="/assets/images/question.png"
              alt=""
              className="h-4 mr-2"
            />
            Ask a question
          </span>
          <span className="cursor-pointer flex items-center">
            <img src="/assets/images/truck.png" alt="" className="h-4 mr-2" />
            Delivery & Return
          </span>
          <span className="cursor-pointer flex items-center">
            <img src="/assets/images/share.png" alt="" className="h-4 mr-2" />
            Share
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-170 gap-4 mt-4">
          <div className="p-4 rounded-md text-center w-full lg:w-1/2 shadow-sm">
            <img  
              src="/assets/images/ship.png"
              alt="Shipping"
              className="w-10 h-10 mx-auto mb-2"
            />
            <p className="text-sm">
              Estimate delivery times: <strong>12–26 days</strong>{" "}
              (International),
              <strong> 3–6 days</strong> (United <br />
              States).
            </p>
          </div>
          <div className="p-4 rounded-md text-center w-full lg:w-1/2 shadow-sm">
            <img
              src="/assets/images/send.png"
              alt="Return"
              className="w-10 h-10 mx-auto mb-2"
            />
            <p className="text-sm">
              Return within <strong>30 days</strong> of purchase.
              <br />
              Duties & taxes are non-refundable.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-black"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span className="text-sm font-semibold">
              Guarantee Safe
              <br /> Checkout
            </span>
          </div>
          <div className="flex items-center gap-3 flex-wrap lg:ml-10 mt-2">
            <img
              src="/assets/images/visa.png"
              alt="Visa"
              className="h-6 lg:relative left-30 bottom-14"
            />
            <img
              src="/assets/images/pay.png"
              alt="Pay"
              className="h-6 lg:relative left-30 bottom-14"
            />
            <img
              src="/assets/images/jazz.png"
              alt="Jazz"
              className="h-6 lg:relative left-30 bottom-14"
            />
            <img
              src="/assets/images/amex.png"
              alt="Amex"
              className="h-6 lg:relative left-30 bottom-14"
            />
            <img
              src="/assets/images/pp.png"
              alt="PayPal"
              className="h-6 lg:relative left-30 bottom-14"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHero;
