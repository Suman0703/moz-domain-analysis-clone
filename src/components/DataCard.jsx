import React from 'react';

const DataCard = ({ title, description, col1Header, col2Header, data, isLink = true }) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col h-full">
      
      {/* Header Section */}
      <div className="mb-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-12 gap-4 pb-2 border-b border-gray-200 mb-2">
        <span className="col-span-8 text-xs font-bold text-gray-900 uppercase tracking-wider">
          {col1Header}
        </span>
        <span className="col-span-4 text-xs font-bold text-gray-900 uppercase tracking-wider text-right">
          {col2Header}
        </span>
      </div>

      {/* Table Body */}
      <div className="flex flex-col flex-1">
        {data.map((item, index) => (
          <div 
            key={index} 
            className="grid grid-cols-12 gap-4 items-center py-3.5 border-b border-gray-50 last:border-none"
          >
            {/* Column 1: Name/URL */}
            <span className={`col-span-8 text-sm truncate pr-2 ${
              isLink ? 'text-[#0081c2] hover:underline cursor-pointer' : 'text-gray-700'
            }`}>
              {item.name}
            </span>
            
            {/* Column 2: Score/Rank */}
            <span className="col-span-4 text-sm font-medium text-gray-900 text-right">
              {item.score}
            </span>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a href="#" className="text-[#0081c2] text-sm font-bold hover:underline flex items-center">
          See all {title.toLowerCase()} <span className="ml-1">→</span>
        </a>
      </div>
      
    </div>
  );
};

export default DataCard;