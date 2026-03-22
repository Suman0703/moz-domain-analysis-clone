import React from 'react';

const NotFound = ({ goHome }) => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-[#F4F7F9] px-4 text-center py-20">
      
      <img 
        src="https://illustrations.popsy.co/amber/falling.svg" 
        alt="Cute confused character" 
        className="w-72 h-72 mb-8 drop-shadow-sm" 
      />
      
      <h1 className="text-7xl font-black text-[#03253F] mb-4 tracking-tight">404</h1>
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Oops! We lost this page.</h2>
      
      <p className="text-lg text-gray-600 mb-10 max-w-md">
        We searched the entire web, but we couldn't find the blog post you were looking for. Let's get you back on track!
      </p>
      
      <button 
        onClick={goHome}
        className="bg-[#0074A3] text-white font-bold py-3 px-10 rounded-full hover:bg-blue-700 transition shadow-md"
      >
        Take me home
      </button>
    </div>
  );
};

export default NotFound;