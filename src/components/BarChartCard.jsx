import React from 'react';

const BarChartCard = () => {
  const barData = [
    { label: '#1-3', height: '86%' },
    { label: '#4-10', height: '71%' },
    { label: '#11-20', height: '93%' },
    { label: '#21-30', height: '86%' },
    { label: '#31-40', height: '81%' },
    { label: '#41-50', height: '60%' },
  ];

  const yLabels = ['90k', '80k', '70k', '60k', '50k', '40k', '30k', '20k', '10k', '0'];

  return (
    
    <div className="bg-white rounded-[2rem] p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col mt-8 md:col-span-2">
      
      {/* Header */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Keyword Ranking Distribution</h3>
        <p className="text-sm text-gray-500">
          The number of keywords ranking in the search results within given ranges.
        </p>
      </div>

      <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
        
        <div className="flex h-72 w-full min-w-[600px] pl-6 pr-4 mt-2">
          
          <div className="flex flex-col relative w-12 mr-1">

            <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[13px] font-bold text-gray-900 tracking-wide whitespace-nowrap">
              Ranking Keywords
            </div>
            
            <div className="h-full relative flex flex-col justify-between items-end text-[11px] font-semibold text-gray-800 pb-8">
              {yLabels.map((val, i) => (
                <div key={i} className="flex items-center relative w-full justify-end h-0">
                  <span className="mr-2">{val}</span>
                  <div className="absolute right-0 w-1.5 h-px bg-gray-800"></div>
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-8 w-px bg-gray-800"></div>
          </div>

          <div className="flex-1 relative border-b border-gray-800 pb-8">
            
            <div className="absolute inset-0 bottom-8 flex items-end justify-between px-2 sm:px-6 z-10">
              {barData.map((data, i) => (
                <div key={i} className="w-[13%] h-full flex items-end justify-center group relative">
                  <div 
                    className="w-full bg-[#4BBDF0] transition-all duration-200 hover:brightness-95 rounded-t-[1px]"
                    style={{ height: data.height }}
                  ></div>
                </div>
              ))}
            </div>
            
            {/* X-Axis Labels and Ticks */}
            <div className="absolute bottom-0 left-0 w-full h-8 flex justify-between px-2 sm:px-6">
              {barData.map((data, i) => (
                <div key={i} className="w-[13%] flex flex-col items-center relative">

                  <div className="absolute top-0 w-px h-1.5 bg-gray-800"></div>
                  <span className="absolute top-3 text-[11px] font-semibold text-gray-900">{data.label}</span>
                </div>
              ))}
            </div>

            {/* Centered "Rank Position" Title */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[12px] font-bold text-gray-900 bg-white px-2 z-20 whitespace-nowrap">
              Rank Position
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default BarChartCard;