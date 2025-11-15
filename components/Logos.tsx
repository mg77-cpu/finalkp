import React from 'react';
import GradientText from './GradientText';


const logos = [
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aabfa8de65994b44dc_Ansa.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aaf64bdf80bcd878f9_atlas.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d64a88e97203a5af0c65_dash-fi.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aa10194d788d08e104_Flex.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d64afe8234aca1548369_gordian.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aaf34953d5b1d798c6_Loop.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aad934f70e2cf9e1cf_medallion.svg",
    // "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/686114e3a56c672e848d6313_mercury.svg", // Removed mercury.svg
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68592f87aee1aa028b8c2c37_novo.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d64b2c4e68a8a0f5048f_order.co.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68592f87239b63c3bbb13d36_papaya.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/68592f874ea36f4b2ea18127_parker.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aaaf61530586d6ab14_seis.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d64b52087e23d4538d39_torch.svg",
    "https://cdn.prod.website-files.com/669fb74007a2fb8f4db2a8fd/6863d4aa294e854b899465a8_Tremendous.svg",
];

const Logos: React.FC = () => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 max-w-3xl mx-auto">
         <GradientText
                  colors={["#000000", "#C0C0C0", "#000000"]}
                  animationSpeed={5}
                  showBorder={false}
                >
                  
                    We're here to support your small business!
                </GradientText>
      </h2>
        <div className="mt-16 overflow-hidden logos-main">
          <div className="flex animate-scroll hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-8 flex items-center justify-center h-16">
                <img src={logo} alt={`Client logo ${index + 1}`} className="max-h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;