import React from 'react';

const EmptyStateCard = ({ title, description, learnMoreLink }) => {
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col h-full relative group">
      
      {/* 1. Sticker Badge */}
      <div className="absolute top-4 right-4 bg-blue-50 text-[#0081c2] font-black text-[9px] px-3 py-1.5 rounded-full rotate-12 transition-transform group-hover:rotate-0 tracking-widest uppercase shadow-sm">
         Info
      </div>

      {/* 2. Card Header */}
      <div className="mb-6 pr-12">
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            {description}{' '}
            {learnMoreLink && (
              <a href={learnMoreLink} className="text-[#0081c2] hover:underline whitespace-nowrap">
                Learn more.
              </a>
            )}
          </p>
        )}
      </div>

      {/* 3. Empty State Content */}
      <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 mt-2 min-h-[220px] md:min-h-[260px] rounded-xl p-8 transition-colors group-hover:border-blue-100">
        
        <img 
          src="https://thumbs.dreamstime.com/b/confused-guy-cartoon-character-isolated-white-background-boy-vector-stock-114648750.jpg" 
          alt="Cute character searching"
          className="w-full max-w-[160px] min-w-[120px] h-auto mb-6 opacity-90 transition-opacity group-hover:opacity-100"
        />
        
        <p className="text-gray-600 text-[13px] md:text-sm text-center px-4 max-w-sm">
          A bit quiet in here! We couldn’t find any featured snippets or People Also Ask boxes for this domain yet.
        </p>
        
      </div>
    </div>
  );
};

export default EmptyStateCard;