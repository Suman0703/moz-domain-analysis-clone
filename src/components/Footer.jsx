import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white flex flex-col">
      
      {/* 1. Pre-Footer CTA Section */}
      <div className="max-w-6xl mx-auto w-full py-10 px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Get started with Moz Pro!
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
            Unlock the power of advanced SEO tools and data-driven insights.
          </p>
        </div>
        <button className="bg-[#0074A3] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition shadow-sm whitespace-nowrap w-full md:w-auto">
          Start my free trial
        </button>
      </div>

      {/* 2. Main Link Matrix */}
      <div className="bg-[#F2F7F9] rounded-t-[2.5rem] md:rounded-t-[3rem] pt-12 pb-16 px-6 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-4 flex-grow">
            <div>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase flex items-center">Products <span className="ml-1">→</span></h4>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li><a href="#" className="hover:text-blue-600">Moz Pro</a></li>
                <li><a href="#" className="hover:text-blue-600">Moz Local</a></li>
                <li><a href="#" className="hover:text-blue-600">Moz API</a></li>
                <li><a href="#" className="hover:text-blue-600">Moz Data</a></li>
                <li><a href="#" className="hover:text-blue-600">STAT</a></li>
                <li><a href="#" className="hover:text-blue-600">Product Updates</a></li>
              </ul>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase">Moz Solutions</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">SMB Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Agency Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-blue-600">Digital Marketers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase flex items-center">Free Tools <span className="ml-1 md:hidden lg:inline">→</span></h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Domain Authority</a></li>
                <li><a href="#" className="hover:text-blue-600">Link Explorer</a></li>
                <li><a href="#" className="hover:text-blue-600">Keyword Explorer</a></li>
                <li><a href="#" className="hover:text-blue-600">Competitive Research</a></li>
                <li><a href="#" className="hover:text-blue-600">Brand Authority</a></li>
                <li><a href="#" className="hover:text-blue-600">Local Citation</a></li>
                <li><a href="#" className="hover:text-blue-600">MozBar</a></li>
                <li><a href="#" className="hover:text-blue-600">MozCast</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase">Resources</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600">SEO Learning Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Help Hub</a></li>
                <li><a href="#" className="hover:text-blue-600">Beginner's Guide</a></li>
                <li><a href="#" className="hover:text-blue-600">How-to Guides</a></li>
                <li><a href="#" className="hover:text-blue-600">Moz Academy</a></li>
                <li><a href="#" className="hover:text-blue-600">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase">About Moz</h4>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li><a href="#" className="hover:text-blue-600">About</a></li>
                <li><a href="#" className="hover:text-blue-600">Team</a></li>
                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact</a></li>
              </ul>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase">Why Moz</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Case Studies</a></li>
                <li><a href="#" className="hover:text-blue-600">Testimonials</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-xs tracking-widest text-gray-900 mb-4 uppercase">Get Involved</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600">Become an Affiliate</a></li>
                <li><a href="#" className="hover:text-blue-600">MozCon</a></li>
                <li><a href="#" className="hover:text-blue-600">Webinars</a></li>
                <li><a href="#" className="hover:text-blue-600">Marketer Series</a></li>
                <li><a href="#" className="hover:text-blue-600">MozPod</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:w-72 lg:pl-10 lg:border-l border-gray-300">
            <h4 className="font-bold text-lg text-gray-900 mb-4">Connect with us</h4>
            <div className="flex space-x-3 mb-6">
              {['𝕏', 'f', 'in', 'ig', 'yt'].map((icon) => (
                <span key={icon} className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-blue-500 hover:bg-blue-50 cursor-pointer transition-colors text-lg">
                  {icon}
                </span>
              ))}
            </div>
            <a href="#" className="text-[#0081c2] hover:underline text-sm mb-12 block font-semibold">Contact the Help team</a>
            <h4 className="font-bold text-lg text-gray-900 mb-4">Join our newsletter</h4>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal Bar */}
      <div className="bg-[#03253F] text-white py-10 px-6 md:px-8 lg:px-16 flex flex-col items-center md:flex-row justify-between text-center md:text-left text-xs gap-6">
        <div className="text-[#0081c2] font-black text-3xl tracking-tighter">
          MOZ
        </div>
        <p className="text-gray-400 max-w-md">
          © 2021 - 2026 SEOMoz, Inc., a Ziff Davis company. All rights reserved. Moz is a registered trademark of SEOMoz, Inc.
        </p>
        <div className="flex space-x-6 text-gray-300 font-medium">
          <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;