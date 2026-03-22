import React from 'react';

const ChartCard = () => {
    const chartData = Array.from({ length: 60 }).map((_, i) => {
        let positive = Math.floor(Math.random() * 800 + 200);
        let negative = Math.floor(Math.random() * -800 - 200);

        if (i === 11) negative = -7000;
        if (i === 12) negative = -16500;
        if (i === 13) negative = -11000;
        if (i === 14) negative = -7000;
        if (i === 15) negative = -4500;

        return { index: i, positive, negative };
    });

    const yLabels = [2, 0, -2, -4, -6, -8, -10, -12, -14, -16, -18];

    return (
        <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-sm border border-gray-100 flex flex-col mt-8 md:col-span-2">
            <div className="mb-6">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Discovered and Lost Linking Domains for mozilla.org</h3>
                <p className="text-sm text-gray-500">
                    Track when we found new linking domains over the past 60 days.{' '}
                    <a href="#" className="text-[#0081c2] hover:underline whitespace-nowrap">Learn more about external links.</a>
                </p>
            </div>

            <div className="w-full overflow-x-auto pb-6 custom-scrollbar">
                <div className="flex h-72 w-full min-w-[700px] mt-4 pr-4">
                    <div className="flex flex-col relative w-16 mr-2 shrink-0">
                        <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] text-gray-700 font-medium tracking-wide">
                            Linking Domains
                        </div>

                        <div className="h-full relative flex flex-col justify-between items-end text-[11px] text-gray-600 pb-5">
                            {yLabels.map((val, i) => (
                                <div key={i} className="flex items-center relative w-full justify-end h-0">
                                    <span className="mr-1">{val}k</span>
                                    <div className="w-1 h-px bg-gray-400"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 relative border-l border-b border-gray-400 pb-5 mb-5">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                            {yLabels.map((val, i) => (
                                <div key={i} className="w-full h-0 border-b border-dashed border-gray-300"></div>
                            ))}
                        </div>

                        <div className="absolute top-[10%] w-full h-px bg-gray-400 z-0"></div>

                        <div className="absolute inset-0 flex items-end justify-between px-1 z-10">
                            {chartData.map((data, i) => {
                                const totalRange = 20000;
                                const heightMultiplier = 100 / totalRange;

                                const posHeight = data.positive * heightMultiplier;
                                const negHeight = Math.abs(data.negative) * heightMultiplier;

                                return (
                                    <div key={i} className="group relative flex-1 mx-[1px] h-full flex flex-col">
                                        <div
                                            className="absolute bottom-[90%] w-full bg-[#5AC65C] transition-all duration-200 hover:brightness-110"
                                            style={{ height: `${posHeight}%` }}
                                        ></div>

                                        <div
                                            className="absolute top-[10%] w-full bg-[#FC5C5D] transition-all duration-200 hover:brightness-110"
                                            style={{ height: `${negHeight}%` }}
                                        ></div>

                                        <div className="hidden group-hover:block absolute bottom-1/2 left-1/2 -translate-x-1/2 z-20 w-32 bg-white shadow-lg border border-gray-200 text-xs pointer-events-none">
                                            <div className="bg-gray-400 text-white font-bold py-1 px-2 border-b border-gray-200">
                                                Day {i + 1}
                                            </div>
                                            <div className="flex justify-between items-center px-2 py-1.5 border-b border-gray-100">
                                                <div className="flex items-center text-gray-600"><span className="w-2 h-2 bg-[#FC5C5D] mr-1 inline-block"></span>Lost</div>
                                                <span>{data.negative}</span>
                                            </div>
                                            <div className="flex justify-between items-center px-2 py-1.5">
                                                <div className="flex items-center text-gray-600"><span className="w-2 h-2 bg-[#5AC65C] mr-1 inline-block"></span>Discovered</div>
                                                <span>{data.positive}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="absolute -bottom-6 left-0 w-full flex justify-between text-[10px] text-gray-500 px-2">
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>01/19</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>01/26</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>02/02</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>02/09</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>02/16</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>02/23</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>03/02</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>03/09</div>
                            <div className="relative"><div className="absolute -top-1.5 left-1/2 w-px h-1.5 bg-gray-400"></div>03/16</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartCard;