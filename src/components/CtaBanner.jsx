import React from 'react';

const CtaBanner = ({ title, subtitle, buttonText }) => {
  return (
    <div className="bg-[#021A2F] rounded-[2rem] p-8 md:p-12 text-center text-white mt-8 md:col-span-2 shadow-sm flex flex-col items-center justify-center min-h-[250px] md:min-h-[300px]">
      
      {/* Responsive typography */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-wide">
        {title}
      </h2>
      
      <p className="text-base md:text-lg text-gray-300 mb-8 font-light max-w-xl px-2">
        {subtitle}
      </p>
      
      {/* Full-width button on mobile, auto-width on sm+ screens */}
      <button className="bg-[#FCE19B] text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-400 transition shadow-sm w-full sm:w-auto">
        {buttonText}
      </button>

    </div>
  );
};

export default CtaBanner;