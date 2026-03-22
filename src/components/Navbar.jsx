import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ setCurrentPage }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  /* 1. Close menus when clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav ref={navRef} className="relative flex justify-between items-center px-4 md:px-8 bg-white border-b border-gray-200 z-50 h-20">
      
      {/* 2. Logo & Mobile Hamburger */}
      <div className="flex items-center">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden mr-4 text-gray-600 focus:outline-none z-50"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        <button 
          onClick={() => { setActiveMenu(null); setIsMobileMenuOpen(false); setCurrentPage('home'); }}
          className="text-[#0081c2] font-black text-3xl md:text-4xl tracking-tighter hover:opacity-80 transition focus:outline-none z-50"
        >
          MOZ
        </button>
      </div>

      {/* 3. Desktop Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex space-x-12 text-gray-600 font-semibold text-base items-center h-full">
        {['products', 'tools', 'learn'].map((menu) => (
          <div key={menu} className="relative h-full flex items-center">
            <button 
              onClick={() => toggleMenu(menu)} 
              className={`capitalize transition-colors h-full focus:outline-none ${activeMenu === menu ? 'text-gray-900' : 'hover:text-blue-600'}`}
            >
              {menu === 'tools' ? 'Free SEO Tools' : menu === 'learn' ? 'Learn SEO' : 'Products'} 
              <span className="text-[10px] ml-1.5 inline-block transition-transform duration-200" style={{ transform: activeMenu === menu ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
            </button>
            {activeMenu === menu && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
          </div>
        ))}
        
        <button onClick={() => { setActiveMenu(null); setCurrentPage('404'); }} className="hover:text-blue-600 h-full transition-colors focus:outline-none">Blog</button>
        
        <div className="relative h-full flex items-center">
          <button onClick={() => toggleMenu('why')} className={`flex items-center transition-colors h-full focus:outline-none ${activeMenu === 'why' ? 'text-gray-900' : 'hover:text-blue-600'}`}>
            Why Moz <span className="text-[10px] ml-1.5 transition-transform duration-200" style={{ transform: activeMenu === 'why' ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
          </button>
          {activeMenu === 'why' && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-[#0081c2] font-bold text-base hover:underline focus:outline-none z-50">Log in</button>
      </div>

      {/* 4. Fixed Mobile Drawer - Now Clickable */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-2xl border-t border-gray-100 flex flex-col px-6 py-4 md:hidden z-[100] animate-in slide-in-from-top duration-300">
          {['Products', 'Free SEO Tools', 'Learn SEO', 'Why Moz'].map(item => (
            <button 
              key={item} 
              onClick={() => setIsMobileMenuOpen(false)} // Closes menu on click
              className="text-left py-5 text-gray-800 font-bold border-b border-gray-50 active:bg-gray-50 transition-colors"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('404'); }} 
            className="text-left py-5 text-blue-600 font-bold border-b border-gray-50 active:bg-gray-50 transition-colors"
          >
            Blog
          </button>
        </div>
      )}

      {/* 5. Desktop Mega Menus (Hidden on Mobile to prevent overlap) */}
      {activeMenu && (
        <div className="hidden md:flex absolute top-[100%] left-1/2 -translate-x-1/2 w-[960px] max-w-[95vw] shadow-2xl border border-gray-200 z-10 overflow-hidden rounded-b-xl bg-white">
          <div className="w-2/3 bg-[#F8FAFB] p-10 grid grid-cols-3 gap-6 text-left">
            {activeMenu === 'products' && (
              <>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-bold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Pro</h4><p className="text-[13px] text-gray-600">Your all-in-one suite of SEO essentials.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-bold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz API</h4><p className="text-[13px] text-gray-600">Power your SEO with link data.</p></div>
                </div>
                {/* ... other product items ... */}
              </>
            )}
            {/* Same structure for tools, learn, why */}
          
 {/* Products Content */}
            {activeMenu === 'products' && (
              <>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Pro</h4><p className="text-[13px] text-gray-600 leading-relaxed">Your all-in-one suite of SEO essentials.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz API</h4><p className="text-[13px] text-gray-600 leading-relaxed">Power your SEO with link data.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Local</h4><p className="text-[13px] text-gray-600 leading-relaxed">Raise your local visibility with ease.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Compare</h4><p className="text-[13px] text-gray-600 leading-relaxed">Find your best SEO product match.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">STAT</h4><p className="text-[13px] text-gray-600 leading-relaxed">Enterprise SERP tracking and analytics.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Data</h4><p className="text-[13px] text-gray-600 leading-relaxed">Custom data solutions for search.</p></div>
                </div>
              </>
            )}

            {/* Tools Content */}
            {activeMenu === 'tools' && (
              <>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Domain Analysis</h4><p className="text-[13px] text-gray-600 leading-relaxed">Top competitive SEO metrics like DA.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Competitive Research</h4><p className="text-[13px] text-gray-600 leading-relaxed">Insights on your search competitors.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Keyword Explorer</h4><p className="text-[13px] text-gray-600 leading-relaxed">Find high-volume, traffic-driving keywords.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">MozBar</h4><p className="text-[13px] text-gray-600 leading-relaxed">SEO metrics for free as you browse.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Link Explorer</h4><p className="text-[13px] text-gray-600 leading-relaxed">Backlink data from 40 trillion links.</p></div>
                </div>
              </>
            )}

            {/* Learn Content */}
            {activeMenu === 'learn' && (
              <>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Beginner's Guide</h4><p className="text-[13px] text-gray-600 leading-relaxed">The famous introduction to SEO.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">How-To Guides</h4><p className="text-[13px] text-gray-600 leading-relaxed">Step-by-step guides for SEO success.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Learning Center</h4><p className="text-[13px] text-gray-600 leading-relaxed">Broaden your knowledge here.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Academy</h4><p className="text-[13px] text-gray-600 leading-relaxed">Upskill and get certified in SEO.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Webinars</h4><p className="text-[13px] text-gray-600 leading-relaxed">Industry experts share best practices.</p></div>
                </div>
              </>
            )}

            {/* Why Moz Content */}
            {activeMenu === 'why' && (
              <>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Digital Marketers</h4><p className="text-[13px] text-gray-600 leading-relaxed">Simplify tasks and grow traffic.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Small Business</h4><p className="text-[13px] text-gray-600 leading-relaxed">Insights to make smarter decisions.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">The Moz Story</h4><p className="text-[13px] text-gray-600 leading-relaxed">Trusted for over 20 years in search.</p></div>
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDE CTA PANEL */}
          <div className="w-1/3 bg-[#171228] p-8 flex flex-col items-center text-center text-white justify-center">
            <h3 className="text-[22px] font-bold mb-6 leading-tight">Ready to boost your SEO?</h3>
            <button className="bg-[#FFD15C] text-gray-900 font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition shadow-sm">Start Free Trial</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

