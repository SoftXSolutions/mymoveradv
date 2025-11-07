import React from 'react';

const About = () => (
  <div className="max-w-5xl mx-auto px-4 py-12">
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h1>
    <p className="text-gray-700 leading-7 mb-6">
      Move Consult helps homeowners and businesses plan, price, and book moving services with confidence. We connect verified movers with customers through a guided quote experience, transparent pricing, and simple communication tools.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
      <div className="border rounded-xl p-5 bg-white">
        <div className="text-lg font-semibold text-gray-800 mb-1">For customers</div>
        <p className="text-sm text-gray-600">Compare movers, request tailored quotes, and track progress in one place.</p>
      </div>
      <div className="border rounded-xl p-5 bg-white">
        <div className="text-lg font-semibold text-gray-800 mb-1">For movers</div>
        <p className="text-sm text-gray-600">Showcase services, manage leads, and grow trust through authentic reviews.</p>
      </div>
      <div className="border rounded-xl p-5 bg-white">
        <div className="text-lg font-semibold text-gray-800 mb-1">Secure and fair</div>
        <p className="text-sm text-gray-600">Data privacy, clear terms, and tools that keep both parties informed.</p>
      </div>
    </div>
  </div>
);

export default About;
