import React from 'react';

const Hero = () => {
    return (
        <>
            {/* Dark Blue Hero Background */}
            <div className="bg-[#03253F] text-white pt-12 md:pt-16 pb-24 md:pb-32 px-4 relative">

                {/* Search Bar Container: Stacks on mobile, row on desktop */}
                <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 bg-transparent sm:bg-white sm:rounded-full sm:p-1.5 sm:shadow-lg">
                    <input
                        type="text"
                        defaultValue="mozilla.org"
                        className="w-full sm:flex-grow px-8 py-4 sm:py-0 text-gray-800 outline-none rounded-full sm:rounded-l-full sm:rounded-r-none text-lg shadow-md sm:shadow-none"
                    />

                    <button className="w-full sm:w-auto bg-[#F8C150] text-gray-900 font-bold px-12 py-4 rounded-full hover:bg-yellow-500 transition whitespace-nowrap text-lg shadow-md sm:shadow-none">
                        Check DA
                    </button>
                </div>

                {/* Hero Text */}
                <div className="text-center mt-10 md:mt-12 max-w-4xl mx-auto">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-wide leading-tight">
                        mozilla.org SEO Analysis & Statistics
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed px-2">
                        See the top SEO metrics for mozilla.org including rankings, links, and traffic by keyword. To see data for other sites, enter your own domain above or explore <a href="#" className="text-[#5cb8ff] hover:underline">Moz's Top 500 Websites</a>.
                    </p>
                </div>
            </div>

            {/* Overlapping Stats Card */}
            <div className="bg-[#F4F7F9] px-4 pb-4">
                <div className="max-w-6xl mx-auto bg-white rounded-2xl md:rounded-t-3xl shadow-md border border-gray-100 -mt-12 relative z-10 p-6 md:p-10 text-center">

                    <h2 className="text-gray-400 font-bold text-sm md:text-xl uppercase tracking-widest mb-1">Showing results for</h2>
                    <h3 className="text-[#E71A5B] font-bold text-2xl md:text-4xl mb-8 md:mb-12">mozilla.org</h3>

                    {/* Stats Grid: 1 col mobile, 2 col tablet, 4 col desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 sm:gap-y-12 divide-y sm:divide-y-0 lg:divide-x divide-gray-100">
                        <div className="pt-6 sm:pt-0">
                            <p className="text-gray-500 text-sm md:text-lg font-medium mb-2">Domain Authority</p>
                            <p className="text-5xl md:text-7xl font-light text-[#E71A5B]">97</p>
                        </div>
                        <div className="pt-6 sm:pt-0 lg:border-l border-gray-100">
                            <p className="text-gray-500 text-sm md:text-lg font-medium mb-2">Linking Root Domains</p>
                            <p className="text-5xl md:text-7xl font-light text-[#E71A5B]">2.9m</p>
                        </div>
                        <div className="pt-6 sm:pt-0 lg:border-l border-gray-100">
                            <p className="text-gray-500 text-sm md:text-lg font-medium mb-2">Ranking Keywords</p>
                            <p className="text-5xl md:text-7xl font-light text-[#E71A5B]">490.2k</p>
                        </div>
                        <div className="pt-6 sm:pt-0 lg:border-l border-gray-100">
                            <p className="text-gray-500 text-sm md:text-lg font-medium mb-2">Spam Score</p>
                            <p className="text-5xl md:text-7xl font-light text-[#E71A5B]">2%</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Hero;