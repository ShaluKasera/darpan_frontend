import React from 'react';

const HomeFeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-gradient-to-b from-[#fff] to-[#ffe5d9] py-10 px-8 rounded-lg shadow-sm text-center w-full md:w-64">
      <img src={image} alt={title} className="mx-auto mb-4 h-20" />
      <p className="text-xl font-semibold text-[#FF7043]">{title}</p>
      <div className="h-[3px] rounded-2xl w-10 bg-[#FFB300] mx-auto my-2" />
      <p className="text- md text-gray-700">{description}</p>
    </div>
  );
};

export default HomeFeatureCard;
