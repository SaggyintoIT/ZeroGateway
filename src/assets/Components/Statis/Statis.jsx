import React from 'react';

const StatisticsSection = () => {
  return (
    <section className="bg-[#f8b48c] text-gray-900 py-12 md:py-24 w-full">
      <div className="container mx-auto px-4 flex flex-col items-center W">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Partners with the payments leader</h1>
        <div className="flex flex-wrap flex-row justify-center w-2/3 ">
          <div className="p-4 md:w-1/4 w-full sm:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">2.7M</h2>
            <p className="text-lg leading-relaxed">Users</p>
          </div>
          <div className="p-4 md:w-1/4 w-full sm:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">+10M</h2>
            <p className="text-lg leading-relaxed">API Hits</p>
          </div>
          <div className="p-4 md:w-1/4 w-full sm:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">+10k</h2>
            <p className="text-lg leading-relaxed">Merchants</p>
          </div>
          <div className="p-4 md:w-1/4 w-full sm:w-1/2 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">+4M</h2>
            <p className="text-lg leading-relaxed">Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
