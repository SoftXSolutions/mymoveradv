import React from 'react';
import PricingPlans from '../components/PricingPlans';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Grow Your Moving Business
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our network of professional movers and get access to high-quality leads. Choose a plan that works for your business.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <PricingPlans />

      {/* FAQ Section */}
    
    </div>
  );
};

export default Pricing;
