import React from 'react';

const NotFound = ({ goHome }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F7F9] px-6 text-center py-12 md:py-20">
      <img
        src="https://illustrations.popsy.co/amber/falling.svg"
        alt="404 Illustration"
        className="w-48 h-48 md:w-72 md:h-72 mb-8 drop-shadow-sm"
      />
      <h1 className="text-5xl md:text-7xl font-black text-[#03253F] mb-4 tracking-tight">404</h1>
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">Oops! We lost this page.</h2>
      <p className="text-base md:text-lg text-gray-600 mb-10 max-w-md">
        We searched the entire web, but we couldn't find the blog post you were looking for.
      </p>
      <button
        onClick={goHome}
        className="w-full sm:w-auto bg-[#0074A3] text-white font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition shadow-md"
      >
        Take me home
      </button>
    </div>
  );
};

export default NotFound;