import React from "react";

const DetailDescription = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-800 border border-gray-200 rounded mt-6">
      <div className="flex flex-wrap gap-4 sm:gap-6 border-b border-gray-300 mb-6 text-sm font-medium">
        <button className="pb-2 border-b-2 border-black">Description</button>
        <button className="pb-2 hover:border-b-2 hover:border-gray-400">
          Review
        </button>
        <button className="pb-2 hover:border-b-2 hover:border-gray-400">
          Shipping
        </button>
        <button className="pb-2 hover:border-b-2 hover:border-gray-400">
          Return Policies
        </button>
      </div>

      <p className="mb-8 text-sm">
        Button-up shirt sleeves and a relaxed silhouette. It’s tailored with
        drapey, crinkle-texture fabric that’s made from LENZING™ ECOVERO™
        Viscose — responsibly sourced wood-based fibres produced through a
        process that reduces impact on forests, biodiversity and water supply.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-base font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Front button placket</li>
              <li>Adjustable sleeve tabs</li>
              <li>Button-extended cuff, curved placket and hem</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-2">Materials Care</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Content: 100% LENZING™ ECOVERO™ Viscose</li>
              <li>Care: Hand wash</li>
              <li>Imported</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-4">Materials Care</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <img
                src="/assets/images/Border.png"
                alt="Wash"
                className="w-6 h-6 mt-1"
              />
              <span>Machine wash max. 30ºC. Short spin.</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/assets/images/Border1.png"
                alt="Iron"
                className="w-5 h-5 mt-1"
              />
              <span>Iron maximum 110ºC.</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/assets/images/Border2.png"
                alt="No bleach"
                className="w-5 h-5 mt-1"
              />
              <span>Do not bleach/bleach</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/assets/images/Border3.png"
                alt="No dry clean"
                className="w-5 h-5 mt-1"
              />
              <span>Do not dry clean.</span>
            </li>
            <li className="flex items-start gap-3">
              <img
                src="/assets/images/Border4.png"
                alt="Tumble dry"
                className="w-5 h-5 mt-1"
              />
              <span>Tumble dry, medium heat.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailDescription;
