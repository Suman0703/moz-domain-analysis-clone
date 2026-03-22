import React from 'react';

const CompetitorCard = ({ data }) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col mt-8 md:col-span-2">
      
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Top Search Competitors</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Other websites that compete with mozilla.org for the same keywords, ranked by visibility.{' '}
          <a href="#" className="text-[#0081c2] hover:underline whitespace-nowrap">
            Learn more about off-site SEO strategy.
          </a>
        </p>
      </div>

      {/* Horizontal scroll wrapper for mobile */}
      <div className="w-full overflow-x-auto custom-scrollbar pb-2">
        
        {/* Enforce min-width to prevent column crushing */}
        <div className="min-w-[600px]">
          
          {/* Table Structure */}
          <div className="grid grid-cols-12 gap-4 pb-2 border-b border-gray-200 mb-2">
            <span className="col-span-6 text-xs font-bold text-gray-900 uppercase tracking-wider">Domain</span>
            <span className="col-span-3 text-xs font-bold text-gray-900 uppercase tracking-wider text-right">Domain Authority</span>
            <span className="col-span-3 text-xs font-bold text-gray-900 uppercase tracking-wider text-right">Visibility</span>
          </div>

          <div className="flex flex-col">
            {data.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 items-center py-4 border-b border-gray-100 last:border-none">
                <span className="col-span-6 text-sm text-[#0081c2] hover:underline cursor-pointer truncate pr-4">
                  {item.domain}
                </span>
                <span className="col-span-3 text-sm text-gray-800 text-right">
                  {item.da}
                </span>
                <span className="col-span-3 text-sm text-gray-800 text-right">
                  {item.visibility}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default CompetitorCard;