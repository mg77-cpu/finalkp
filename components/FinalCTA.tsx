import React from 'react';
import GradientText from './GradientText';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <GradientText
          colors={["#5C2999", "rgba(92, 41, 153, 0.2)", "#5C2999", "rgba(92, 41, 153, 0.2)", "#5C2999"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
            We're here to support your small business!
          </h2>
        </GradientText>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Ready to simplify your accounting and focus on what you do best? Contact us today for a personalized consultation.
        </p>
        <div className="mt-10">
          <a href="#" className="inline-flex items-center justify-center bg-[#5C2999] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a217a] transition-colors">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
