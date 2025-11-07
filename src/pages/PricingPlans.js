import React from 'react';
import PricingPlansSection from '../components/PricingPlans';

const PricingPlans = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Pricing Plans</h1>
      </div>
      <PricingPlansSection />
    </div>
  );
};

export default PricingPlans;
