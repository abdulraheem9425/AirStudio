import React from 'react';

const SalesItems = () => {
  const items = [
    {
      title: 'New In',
      desc: 'Latest arrivals and trends',
      img: '/assets/images/new.png',
    },
    {
      title: 'Trending',
      desc: 'Most popular this season',
      img: '/assets/images/trend.png',
    },
    {
      title: 'Best Sellers',
      desc: 'Our customer favorites',
      img: '/assets/images/best.png',
    },
    {
      title: 'Collections',
      desc: 'Curated fashion and digital items',
      img: '/assets/images/collect.png',
    },
  ];

  return (
    <div className="bg-white py-12 px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-2 ">Sales Items</h2>
          <p className="text-gray-600 md:text-lg">
            Explore our diverse collection of fashion and digital products
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-3  rounded-lg text-center "
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-24 h-24 mx-auto object-contain mb-4"
              />
              <h3 className=" flex font-bold text-gray-900 text-xl">{item.title}</h3>
              <p className=" flex text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesItems;
