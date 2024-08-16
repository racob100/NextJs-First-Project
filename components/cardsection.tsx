import React from "react";
import Card from './card';  // Adjust the path as per your project

const Cardsection = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      {/* Heading */}
      <h2 className="text-lime-500 text-3xl sm:text-4xl font-bold text-center mb-14 mt-28">
        Ideate. Implement. Inspire.
      </h2>

      {/* Two Sentences with Natural Line Breaks */}
      <div className="text-center max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
        <p className="mb-6">
          We don't go by the playbook. Every experience, campaign, and interaction is authentically curated for your community.
        </p>
        <p className="mb-12">
          Therefore, working with HYP3 SQUAD is like having your own in-house marketing team, with web3 native expertise.
        </p>
      </div>

      {/* 4 Cards in 2x2 Layout Centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          <Card 
            title="3+" 
            subtitle="years of" 
            description="web3 marketing experience" 
          />
          <Card 
            title="100+" 
            subtitle="campaigns" 
            description="executed" 
          />
          <Card 
            title="15+" 
            subtitle="market leaders" 
            description="represented" 
          />
          <Card 
            title="500K+" 
            subtitle="users" 
            description="acquired" 
          />
        </div>
      </div>
    </section>
  );
};

export default Cardsection;
