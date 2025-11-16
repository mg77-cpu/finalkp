import React from 'react';
import ColorBends from './ColorBends';

const TeamMemberProfile: React.FC = () => {
  const credentials = [
    "Registered Tax Accountant", 
    
    "PAAB Member", 
    "Chartered Professional"
  ];

  return (
    <section id="about" className="py-8 sm:py-12 relative bg-green-40 overflow-hidden shadow-lg">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <ColorBends
          colors={["#a60bf3ff", "#4e15dcff", "#00ffd1"]}
          rotation={30}
          speed={1.2}
          scale={1.5}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
      </div>

      {/* Foreground content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7">
            {/* Header with Image aligned to the left */}
            <div className="flex flex-col items-center mb-8 lg:flex-row lg:items-start lg:justify-between">
              {/* Text content - appears first on small screens */}
              <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0 lg:mr-8">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                  <p className="text-purple-800">Meet</p> William Mufuka
                </h2>
                <div className="w-24 h-1 bg-[#5C2999] rounded-full mb-8 mx-auto lg:mx-0"></div>
              </div>
              {/* William's Photo - appears second on small screens */}
              <div className="flex-shrink-0">
                <div className="w-[300px] h-[400px] shadow-xl rounded-2xl">
                  <img 
                    src="/william mufuka.jpg" 
                    alt="William Mufuka - Principal Accountant"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mb-10 rounded-2xl bg-white bg-opacity-50 p-6 shadow-sm">
              <p className="text-base text-gray-700 leading-relaxed">
                William Mufuka is the principal accountant at KP Accounting & Tax Services and the person you'll work with directly. With over 20 years of experience in both public practice and the private sector, he brings practical, no-fuss advice and real support to small business owners.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                His background spans senior roles as a Financial Accountant and Tax Advisor, giving him a deep understanding of the pressures business owners face. William is known for his clear communication, tailored support, and commitment to making accounting simple for his clients.
              </p>
              
              <p className="text-base text-gray-700 leading-relaxed">
                Registered as a Tax Accountant and with the Public Accountants and Auditors Board, William is also a Chartered Governance and Accounting Professional, combining technical expertise with genuine care.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {credentials.map((credential, index) => (
                <div key={index} className="bg-[#5C2999] bg-opacity-10 rounded-full px-4 py-2">
                  <span className="text-sm font-semibold text-[#5C2999]">{credential}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Testimonial */}
          <div className="lg:col-span-5 mb-16">
            <div className="bg-[#f8f9fa] rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-[#5C2999] mb-2">20+</div>
                <div className="text-lg font-semibold text-gray-600">Years Experience</div>
              </div>
              
              <div className="border-t border-gray-200 pt-8">
                <div className="text-center mb-4">
                  <div className="text-6xl text-[#5C2999] opacity-50 mb-2">“</div>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6 text-center">
                William is excellent at what he does. He is personable, supportive and professional. I'm glad I found William and his services. I highly recommend him.
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold text-gray-900">Brodee Breukel</div>
                  <div className="text-sm text-gray-600">Midnight Melts</div>
                </div>
              </div>
            </div>

            <div className="bg-[#E4F5E1] rounded-xl p-6 mt-32">
              <div className="text-center ">
                <p className="text-lg font-bold text-gray-800 mb-2">
                  Ready to work with William?
                </p>
                <p className="text-gray-600 mb-4">
                  Get personalized accounting support for your business
                </p>
                <a href="/appointments"  className="inline-flex items-center justify-center bg-[#5C2999] text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-gray-300 transition-colors">
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemberProfile;