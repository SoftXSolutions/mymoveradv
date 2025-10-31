import React from 'react';
import Button from './Button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Start Your Move?</h2>
          <p className="text-xl mb-8 text-orange-50">
            Get instant quotes from verified movers in your area. It's fast, free, and easy!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" className="text-lg">
              Get Your Free Quote
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <input 
              type="tel" 
              placeholder="Enter your phone number"
              className="px-6 py-3 rounded-lg text-gray-800 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
