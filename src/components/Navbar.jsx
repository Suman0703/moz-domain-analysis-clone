import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  
  // 1. Create a reference to attach to our main nav container
  const navRef = useRef(null);

  // Helper function to toggle menus
  const toggleMenu = (menuName) => {
    if (activeMenu === menuName) {
      setActiveMenu(null);
    } else {
      setActiveMenu(menuName);
    }
  };

  // 2. Add the effect to listen for clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the menu is open, and the click target is NOT inside our navRef, close it
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    // Attach the event listener to the whole document
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    // 3. Attach the ref to the top-level nav element
    <nav ref={navRef} className="relative flex justify-between items-center px-8 bg-white border-b border-gray-200 z-50 h-20">
      
      {/* Logo */}
      <div className="text-[#0081c2] font-black text-4xl tracking-tighter">
        MOZ
      </div>

      {/* Center Links */}
      <div className="hidden md:flex space-x-10 text-gray-600 font-medium text-[15px] items-center h-full">
        
        {/* 1. Products */}
        <div className="relative h-full flex items-center">
          <button onClick={() => toggleMenu('products')} className={`flex items-center transition-colors h-full ${activeMenu === 'products' ? 'text-gray-900' : 'hover:text-blue-600'}`}>
            Products <span className="text-[10px] ml-1.5 transition-transform" style={{ transform: activeMenu === 'products' ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
          </button>
          {activeMenu === 'products' && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
        </div>

        {/* 2. Free SEO Tools */}
        <div className="relative h-full flex items-center">
          <button onClick={() => toggleMenu('tools')} className={`flex items-center transition-colors h-full ${activeMenu === 'tools' ? 'text-gray-900' : 'hover:text-blue-600'}`}>
            Free SEO Tools <span className="text-[10px] ml-1.5 transition-transform" style={{ transform: activeMenu === 'tools' ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
          </button>
          {activeMenu === 'tools' && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
        </div>

        {/* 3. Learn SEO */}
        <div className="relative h-full flex items-center">
          <button onClick={() => toggleMenu('learn')} className={`flex items-center transition-colors h-full ${activeMenu === 'learn' ? 'text-gray-900' : 'hover:text-blue-600'}`}>
            Learn SEO <span className="text-[10px] ml-1.5 transition-transform" style={{ transform: activeMenu === 'learn' ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
          </button>
          {activeMenu === 'learn' && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
        </div>

        {/* Blog (No Dropdown) */}
        <a href="#" className="flex items-center hover:text-blue-600 h-full">Blog</a>

        {/* 4. Why Moz */}
        <div className="relative h-full flex items-center">
          <button onClick={() => toggleMenu('why')} className={`flex items-center transition-colors h-full ${activeMenu === 'why' ? 'text-gray-900' : 'hover:text-blue-600'}`}>
            Why Moz <span className="text-[10px] ml-1.5 transition-transform" style={{ transform: activeMenu === 'why' ? 'rotate(180deg)' : 'rotate(0deg)' }}>v</span>
          </button>
          {activeMenu === 'why' && <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#F8FAFB] border-t border-l border-gray-200 rotate-45 z-20"></div>}
        </div>

      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-6">
        <button className="text-gray-500 hover:text-gray-800">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <button className="text-[#0081c2] font-semibold text-[15px] hover:underline">Log in</button>
      </div>

      {/* --- MASTER MEGA MENU CONTAINER --- */}
      {activeMenu && (
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-[960px] max-w-[95vw] flex shadow-2xl border-x border-b border-gray-200 z-10">
          
          {/* ============================== */}
          {/* 1. PRODUCTS MENU CONTENT       */}
          {/* ============================== */}
          {activeMenu === 'products' && (
            <>
              <div className="w-2/3 bg-[#F8FAFB] p-10 grid grid-cols-3 gap-6">
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Pro</h4><p className="text-[13px] text-gray-600 leading-relaxed">Your all-in-one suite of SEO essentials.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz API</h4><p className="text-[13px] text-gray-600 leading-relaxed">Power your SEO with our index of over 44 trillion links.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Local</h4><p className="text-[13px] text-gray-600 leading-relaxed">Raise your local SEO visibility with complete local SEO management.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Compare SEO Products</h4><p className="text-[13px] text-gray-600 leading-relaxed">See which Moz SEO solution best meets your business needs.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">STAT</h4><p className="text-[13px] text-gray-600 leading-relaxed">SERP tracking and analytics for enterprise SEO experts.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Data</h4><p className="text-[13px] text-gray-600 leading-relaxed">Power your SEO strategy & AI models with custom data solutions.</p></div>
                </div>
              </div>
              <div className="w-1/3 bg-[#171228] p-8 flex flex-col items-center text-center text-white relative overflow-hidden border-l border-[#2A2440]">
                <span className="text-[12px] font-medium text-gray-300 mb-3">Moz Pro</span>
                <h3 className="text-[22px] font-bold mb-6 leading-tight max-w-[220px]">Track your brand's footprint in AI search</h3>
                <button className="bg-[#FFD15C] text-gray-900 text-[14px] font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition shadow-sm z-10 mb-8">Learn more</button>
                <div className="mt-auto w-full bg-white rounded-t-xl p-3 text-left relative z-10 shadow-lg"><div className="flex justify-between items-center mb-3"><span className="text-[10px] font-bold text-gray-800">Your Brand's <span className="text-[#E71A5B]">AI Visibility</span></span><span className="bg-[#1C1733] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">Beta</span></div><div className="h-10 border-l border-b border-gray-300 relative flex flex-col justify-end space-y-1.5 pb-1 pl-1"><div className="w-[85%] border-b-2 border-purple-400 -rotate-[4deg] origin-bottom-left"></div><div className="w-[70%] border-b-2 border-pink-400 -rotate-12 origin-bottom-left"></div></div></div>
              </div>
            </>
          )}

          {/* ============================== */}
          {/* 2. FREE SEO TOOLS MENU         */}
          {/* ============================== */}
          {activeMenu === 'tools' && (
            <>
              <div className="w-2/3 bg-[#F8FAFB] p-10 grid grid-cols-3 gap-6">
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Domain Analysis</h4><p className="text-[13px] text-gray-600 leading-relaxed">Get top competitive SEO metrics like DA, top pages and more.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Competitive Research</h4><p className="text-[13px] text-gray-600 leading-relaxed">Uncover valuable insights on your organic search competitors.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Keyword Explorer</h4><p className="text-[13px] text-gray-600 leading-relaxed">Find traffic-driving keywords with our 1.25 billion+ keyword index.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">MozBar</h4><p className="text-[13px] text-gray-600 leading-relaxed">See top SEO metrics for free as you browse the web.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Link Explorer</h4><p className="text-[13px] text-gray-600 leading-relaxed">Explore over 40 trillion links for powerful backlink data.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">More Free SEO Tools</h4><p className="text-[13px] text-gray-600 leading-relaxed">Explore all the free SEO tools Moz has to offer.</p></div>
                </div>
              </div>
              <div className="w-1/3 bg-[#6CE0F5] p-8 flex flex-col items-center text-center text-[#03253F] relative overflow-hidden">
                <h3 className="text-[26px] font-bold mb-6 leading-tight mt-4">Let your business shine with Listings AI</h3>
                <button className="bg-[#FFD15C] text-gray-900 text-[14px] font-bold py-2 px-8 rounded-full hover:bg-yellow-400 transition shadow-sm z-10 mb-8">Get found</button>
                <div className="mt-auto w-[110%] bg-white rounded-t-xl p-3 text-left relative z-10 shadow-lg flex-grow"><div className="h-4 bg-gray-100 rounded w-1/3 mb-2"></div><div className="h-16 bg-blue-50 border border-blue-100 rounded flex items-center p-2"><div className="w-8 h-8 rounded bg-white mr-2"></div><div className="flex-1 h-2 bg-gray-200 rounded"></div></div></div>
                <div className="absolute top-[20%] left-4 w-4 h-4 text-white opacity-90 text-xl">✨</div>
                <div className="absolute top-[50%] right-6 w-4 h-4 text-white opacity-90 text-xl">✦</div>
              </div>
            </>
          )}

          {/* ============================== */}
          {/* 3. LEARN SEO MENU              */}
          {/* ============================== */}
          {activeMenu === 'learn' && (
            <>
              <div className="w-2/3 bg-[#F8FAFB] p-10 grid grid-cols-3 gap-6">
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Beginner's Guide to SEO</h4><p className="text-[13px] text-gray-600 leading-relaxed">The #1 most popular introduction to SEO, trusted by millions.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">How-To Guides</h4><p className="text-[13px] text-gray-600 leading-relaxed">Step-by-step guides to search success from the authority on SEO.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">SEO Learning Center</h4><p className="text-[13px] text-gray-600 leading-relaxed">Broaden your knowledge with SEO resources for all skill levels.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Moz Academy</h4><p className="text-[13px] text-gray-600 leading-relaxed">Upskill and get certified with on-demand courses & certifications.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">On-Demand Webinars</h4><p className="text-[13px] text-gray-600 leading-relaxed">Learn modern SEO best practices from industry experts.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-[#0081c2] text-lg mb-1.5 group-hover:text-blue-800">MozCon</h4><p className="text-[13px] text-gray-600 leading-relaxed">Save on Early Bird tickets and join us in London or New York City</p></div>
                </div>
              </div>
              <div className="w-1/3 bg-[#241147] p-8 flex flex-col items-center text-center text-white relative overflow-hidden justify-center">
                <span className="text-[12px] font-medium text-gray-300 mb-3 z-10">Moz API</span>
                <h3 className="text-[26px] font-bold mb-8 leading-tight max-w-[250px] z-10">Access 20 years of data with flexible pricing</h3>
                <button className="bg-[#FFD15C] text-gray-900 text-[14px] font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition shadow-sm z-10">Find your plan</button>
                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #6CE0F5 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
              </div>
            </>
          )}

          {/* ============================== */}
          {/* 4. WHY MOZ MENU                */}
          {/* ============================== */}
          {activeMenu === 'why' && (
            <>
               <div className="w-2/3 bg-[#F8FAFB] p-10 grid grid-cols-3 gap-6">
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Digital Marketers</h4><p className="text-[13px] text-gray-600 leading-relaxed">Simplify SEO tasks to save time and grow your traffic.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Enterprise Solutions</h4><p className="text-[13px] text-gray-600 leading-relaxed">Gain a competitive edge in the ever-changing world of search.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Small Business Solutions</h4><p className="text-[13px] text-gray-600 leading-relaxed">Uncover insights to make smarter marketing decisions in less time.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">The Moz Story</h4><p className="text-[13px] text-gray-600 leading-relaxed">Moz was the first & remains the most trusted SEO company.</p></div>
                </div>
                <div className="space-y-8">
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">Agency Solutions</h4><p className="text-[13px] text-gray-600 leading-relaxed">Earn & keep valuable clients with unparalleled data & insights.</p></div>
                  <div className="group cursor-pointer"><h4 className="font-semibold text-gray-900 text-lg mb-1.5 group-hover:text-blue-600">New Releases</h4><p className="text-[13px] text-gray-600 leading-relaxed">Get the scoop on the latest and greatest from Moz.</p></div>
                </div>
              </div>
              <div className="w-1/3 bg-[#D6EAF8] p-8 flex flex-col items-center text-center text-[#03253F] relative overflow-hidden">
                <span className="text-[12px] font-medium text-[#0081c2] mb-3 z-10">New Feature</span>
                <h3 className="text-[26px] font-bold mb-6 leading-tight max-w-[250px] z-10">Surface actionable competitive intel</h3>
                <button className="bg-[#FFD15C] text-gray-900 text-[14px] font-bold py-2 px-6 rounded-full hover:bg-yellow-400 transition shadow-sm z-10 mb-8">Learn More</button>
                <div className="mt-auto w-full bg-white rounded-xl p-4 text-left relative z-10 shadow-lg border border-gray-200 h-24 flex items-center justify-center">
                    <span className="font-bold text-gray-800 text-lg">Competitive Research</span>
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 border-4 border-[#6CE0F5] rounded-full opacity-30"></div>
                <div className="absolute top-10 -right-10 w-24 h-24 border-4 border-[#6CE0F5] rounded-full opacity-30"></div>
              </div>
            </>
          )}

        </div>
      )}
    </nav>
  );
};

export default Navbar;