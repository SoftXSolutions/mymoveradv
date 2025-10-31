import React from 'react';
import Button from './Button';

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              MyMoveAdvisor is your trusted partner in finding the perfect moving company. We connect you with verified, professional movers who are committed to making your relocation smooth and stress-free.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With over 500 verified moving companies in our network and 10,000+ successful moves completed, we pride ourselves on delivering exceptional service and peace of mind to every customer.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] border-l-4 border-primary transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600 text-sm">Verified Movers</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.2)] border-l-4 border-primary transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer group">
                <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
            </div>

            <Button>
              Learn More About Us
            </Button>
          </div>

          <div className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-[0_20px_60px_rgb(0,0,0,0.3)] transform transition-all duration-500 hover:scale-105 hover:rotate-1">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800" 
                alt="Moving team" 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-xl p-6 shadow-[0_15px_40px_rgb(0,0,0,0.3)] transform transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer">
              <div className="text-2xl font-bold">15+ Years</div>
              <div className="text-sm">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
